#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import http.server
import socketserver
import os
import urllib.parse
import mimetypes

# 定义端口
PORT = 8008

# 定义MIME类型
MIME_TYPES = {
    '.html': 'text/html; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.js': 'text/javascript; charset=utf-8',
    '.json': 'application/json; charset=utf-8',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon',
    '.woff': 'font/woff',
    '.woff2': 'font/woff2',
    '.ttf': 'font/ttf'
}

class MyHttpRequestHandler(http.server.SimpleHTTPRequestHandler):
    def guess_type(self, path):
        """重写guess_type方法以支持自定义MIME类型"""
        base, ext = os.path.splitext(path)
        if ext.lower() in MIME_TYPES:
            return MIME_TYPES[ext.lower()]
        return super().guess_type(path)
    
    def do_GET(self):
        """处理GET请求"""
        # 解析请求路径
        parsed_path = urllib.parse.urlparse(self.path)
        filepath = parsed_path.path
        
        # 特殊处理 favicon.ico 请求
        if filepath == '/favicon.ico':
            if os.path.exists('./favicon.ico'):
                self.path = '/favicon.ico'
            else:
                # 如果没有 favicon.ico 文件，则使用 images/192.png 作为替代
                self.path = '/images/192.png'
        
        # 如果请求的是根路径，则返回index.html
        if self.path == '/':
            self.path = '/index.html'
        
        # 处理带查询参数的路径（如 styles.css?v=1.0.1）
        clean_path = self.path.split('?')[0]
        
        # 获取文件扩展名
        _, ext = os.path.splitext(clean_path)
        
        # 尝试提供文件
        try:
            # 检查文件是否存在（使用清理后的路径）
            file_path = '.' + clean_path
            if os.path.exists(file_path):
                # 如果原始路径和清理后的路径不同，需要手动处理文件提供
                if self.path != clean_path:
                    # 读取文件内容并发送
                    with open(file_path, 'rb') as f:
                        content = f.read()
                    # 获取MIME类型
                    mime_type = self.guess_type(file_path)
                    # 发送响应
                    self.send_response(200)
                    self.send_header('Content-type', mime_type)
                    self.send_header('Content-Length', str(len(content)))
                    self.send_header('Cache-Control', 'no-cache')
                    self.end_headers()
                    self.wfile.write(content)
                else:
                    # 调用父类方法处理文件
                    return http.server.SimpleHTTPRequestHandler.do_GET(self)
            else:
                # 文件未找到，尝试返回404页面
                if os.path.exists('./404.html'):
                    self.send_response(404)
                    self.send_header('Content-type', 'text/html; charset=utf-8')
                    self.send_header('Cache-Control', 'no-cache')
                    self.end_headers()
                    with open('./404.html', 'rb') as f:
                        self.wfile.write(f.read())
                else:
                    # 如果没有404页面，则返回简单错误信息
                    self.send_response(404)
                    self.send_header('Content-type', 'text/html; charset=utf-8')
                    self.send_header('Cache-Control', 'no-cache')
                    self.end_headers()
                    self.wfile.write(b'<h1>404 Not Found</h1><p>The page you are looking for could not be found.</p>')
        except Exception as e:
            # 其他服务器错误
            self.send_response(500)
            self.send_header('Content-type', 'text/html; charset=utf-8')
            self.send_header('Cache-Control', 'no-cache')
            self.end_headers()
            self.wfile.write(f'Server Error: {str(e)}'.encode('utf-8'))

# 创建服务器
with socketserver.TCPServer(("", PORT), MyHttpRequestHandler) as httpd:
    print(f"服务器正在运行在 http://localhost:{PORT}/")
    print("按 Ctrl+C 停止服务器")
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\n服务器已停止")