const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8000;
const DATA_DIR = path.join(__dirname, 'data');
const DATA_FILE = path.join(DATA_DIR, 'students.json');
const API_KEY = '';// 可选：设置一个简单 API 密钥，前端在 gas_config.js 中也填写相同值

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon'
};

function ensureDataFile() {
  try {
    if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR);
    if (!fs.existsSync(DATA_FILE)) fs.writeFileSync(DATA_FILE, JSON.stringify([]), 'utf-8');
  } catch (e) {
    console.error('初始化数据文件失败:', e);
  }
}

function readAll() {
  ensureDataFile();
  try {
    const raw = fs.readFileSync(DATA_FILE, 'utf-8');
    const rows = JSON.parse(raw || '[]');
    return Array.isArray(rows) ? rows : [];
  } catch (e) {
    console.error('读取数据失败:', e);
    return [];
  }
}

function writeAll(rows) {
  ensureDataFile();
  try {
    fs.writeFileSync(DATA_FILE, JSON.stringify(rows, null, 2), 'utf-8');
  } catch (e) {
    console.error('写入数据失败:', e);
  }
}

function json(res, obj, status = 200) {
  res.writeHead(status, {
    'Content-Type': 'application/json; charset=utf-8',
    'Cache-Control': 'no-cache',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type'
  });
  res.end(JSON.stringify(obj));
}

function handleApi(req, res) {
  if (req.method === 'OPTIONS') {
    return json(res, { ok: true });
  }

  let body = '';
  req.on('data', chunk => body += chunk);
  req.on('end', () => {
    try {
      const parsed = body ? JSON.parse(body) : {};
      const action = parsed.action;
      const data = parsed.data || {};
      const apiKey = parsed.apiKey || '';
      if (API_KEY && apiKey !== API_KEY) {
        return json(res, { ok: false, error: 'unauthorized' }, 401);
      }

      switch (action) {
        case 'listStudents': {
          const rows = readAll();
          const { grade, className } = data;
          const students = rows.filter(r => (!grade || r.grade === grade) && (!className || r.class === className))
            .map(r => ({ name: r.name, earnedStamps: r.earnedStamps || [], stampDates: r.stampDates || {}, monthlyHistory: r.monthlyHistory || {} }));
          return json(res, { ok: true, students });
        }
        case 'uploadStudents': {
          const rows = readAll();
          const { grade, className, students } = data;
          const kept = rows.filter(r => !(r.grade === grade && r.class === className));
          const toAdd = (students || []).map(s => ({ name: s.name, grade, class: className, earnedStamps: [], stampDates: {}, monthlyHistory: {} }));
          writeAll(kept.concat(toAdd));
          return json(res, { ok: true, added: toAdd.length });
        }
        case 'award': {
          const rows = readAll();
          const { studentId, stampId, date, meta } = data;
          const name = extractNameFromStudentId(studentId);
          let updated = 0;
          rows.forEach(r => {
            if (r.name === name && (!meta || (r.grade === meta.grade && r.class === meta.className))) {
              r.earnedStamps = r.earnedStamps || [];
              if (!r.earnedStamps.includes(stampId)) r.earnedStamps.push(stampId);
              r.stampDates = r.stampDates || {};
              r.stampDates[String(stampId)] = date || new Date().toLocaleDateString('zh-CN');
              updated++;
            }
          });
          writeAll(rows);
          return json(res, { ok: true, updated });
        }
        case 'cancel': {
          const rows = readAll();
          const { studentId, stampId, meta } = data;
          const name = extractNameFromStudentId(studentId);
          let updated = 0;
          rows.forEach(r => {
            if (r.name === name && (!meta || (r.grade === meta.grade && r.class === meta.className))) {
              r.earnedStamps = (r.earnedStamps || []).filter(id => id !== stampId);
              if (r.stampDates && r.stampDates[String(stampId)]) delete r.stampDates[String(stampId)];
              updated++;
            }
          });
          writeAll(rows);
          return json(res, { ok: true, updated });
        }
        case 'batchAward': {
          const rows = readAll();
          const { grade, className, stampId } = data;
          let updated = 0;
          rows.forEach(r => {
            if (r.grade === grade && r.class === className) {
              r.earnedStamps = r.earnedStamps || [];
              if (!r.earnedStamps.includes(stampId)) {
                r.earnedStamps.push(stampId);
                r.stampDates = r.stampDates || {};
                r.stampDates[String(stampId)] = new Date().toLocaleDateString('zh-CN');
                updated++;
              }
            }
          });
          writeAll(rows);
          return json(res, { ok: true, updated });
        }
        case 'batchCancel': {
          const rows = readAll();
          const { grade, className, stampId } = data;
          let updated = 0;
          rows.forEach(r => {
            if (r.grade === grade && r.class === className) {
              const before = (r.earnedStamps || []).length;
              r.earnedStamps = (r.earnedStamps || []).filter(id => id !== stampId);
              if (before !== r.earnedStamps.length) {
                if (r.stampDates && r.stampDates[String(stampId)]) delete r.stampDates[String(stampId)];
                updated++;
              }
            }
          });
          writeAll(rows);
          return json(res, { ok: true, updated });
        }
        case 'resetClass': {
          const rows = readAll();
          const { grade, className } = data;
          rows.forEach(r => {
            if (r.grade === grade && r.class === className) {
              r.earnedStamps = [];
              r.stampDates = {};
            }
          });
          writeAll(rows);
          return json(res, { ok: true });
        }
        case 'saveSnapshot': {
          // 可根据需要实现快照归档，这里直接返回成功
          return json(res, { ok: true });
        }
        default:
          return json(res, { ok: false, error: 'unknown action' }, 400);
      }
    } catch (e) {
      console.error('API 错误:', e);
      return json(res, { ok: false, error: String(e) }, 500);
    }
  });
}

function extractNameFromStudentId(studentId) {
  if (!studentId) return '';
  const parts = String(studentId).split('_');
  return parts.length >= 4 ? parts.slice(3).join('_') : String(studentId);
}

const server = http.createServer((req, res) => {
  console.log(`Request: ${req.method} ${req.url}`);

  // API 路由
  if (req.url.startsWith('/api')) {
    return handleApi(req, res);
  }
  
  let filePath = '.' + req.url;
  
  // 特殊处理 favicon.ico 请求
  if (req.url === '/favicon.ico') {
    // 检查是否存在 favicon.ico 文件
    if (fs.existsSync('./favicon.ico')) {
      filePath = './favicon.ico';
    } else {
      // 如果没有 favicon.ico 文件，则使用 images/192.png 作为替代
      filePath = './images/192.png';
    }
  }
  
  // 如果请求的是根路径，则返回index.html
  if (filePath === './') {
    filePath = './index.html';
  }
  
  const extname = String(path.extname(filePath)).toLowerCase();
  const contentType = MIME_TYPES[extname] || 'application/octet-stream';
  
  fs.readFile(filePath, (error, content) => {
    if (error) {
      if (error.code === 'ENOENT') {
        // 文件未找到
        console.log(`404 Not Found: ${filePath}`);
        fs.readFile('./404.html', (err, content404) => {
          if (err) {
            // 如果没有404页面，则返回简单错误信息
            res.writeHead(404, { 
              'Content-Type': 'text/html; charset=utf-8',
              'Cache-Control': 'no-cache'
            });
            res.end('<h1>404 Not Found</h1><p>The page you are looking for could not be found.</p>', 'utf-8');
          } else {
            res.writeHead(404, { 
              'Content-Type': 'text/html; charset=utf-8',
              'Cache-Control': 'no-cache'
            });
            res.end(content404, 'utf-8');
          }
        });
      } else {
        // 其他服务器错误
        console.log(`500 Server Error: ${error.code} for ${filePath}`);
        res.writeHead(500, {
          'Content-Type': 'text/html; charset=utf-8',
          'Cache-Control': 'no-cache'
        });
        res.end(`Server Error: ${error.code}`);
      }
    } else {
      // 成功读取文件
      console.log(`200 OK: ${filePath}`);
      res.writeHead(200, { 
        'Content-Type': contentType,
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0'
      });
      res.end(content, 'utf-8');
    }
  });
});

server.listen(PORT, () => {
  console.log(`服务器正在运行在 http://localhost:${PORT}/`);
  console.log('按 Ctrl+C 停止服务器');
});