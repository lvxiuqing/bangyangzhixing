# Zeabur 部署指南

## 前提条件

- 已完成 Supabase 配置（参考 `SUPABASE_SETUP.md`）
- 已注册 Zeabur 账号（访问 https://zeabur.com）
- 项目代码已推送到 GitHub/GitLab（或准备手动上传）

## 方式一：从 Git 仓库部署（推荐）

### 1. 准备 Git 仓库

```bash
# 如果还没有 Git 仓库，初始化一个
git init
git add .
git commit -m "Initial commit"

# 创建 GitHub 仓库后推送
git remote add origin https://github.com/你的用户名/xiaobangyang.git
git push -u origin main
```

### 2. 在 Zeabur 创建项目

1. 登录 https://zeabur.com
2. 点击 "New Project"
3. 选择 Region（建议选 Hong Kong 或 Singapore，国内访问快）
4. 点击 "Create"

### 3. 部署服务

1. 在项目页面点击 "Add Service" → "Git"
2. 选择你的 GitHub/GitLab 仓库
3. 选择 `xiaobangyang` 仓库
4. Zeabur 会自动检测为静态网站

### 4. 配置环境变量（可选）

如果你不想在代码中暴露 Supabase 配置，可以使用环境变量：

1. 点击你的服务
2. 进入 "Variables" 标签
3. 添加以下变量：
   - `SUPABASE_URL`: 你的 Supabase 项目 URL
   - `SUPABASE_ANON_KEY`: 你的 anon key

然后修改 `supabase_config.js`:
```javascript
window.SUPABASE_CONFIG = {
  enabled: true,
  url: process.env.SUPABASE_URL || 'https://xxx.supabase.co',
  anonKey: process.env.SUPABASE_ANON_KEY || 'your-anon-key',
  teacherPassword: 'WQXFXXX'
};
```

### 5. 部署完成

1. 等待构建完成（通常1-2分钟）
2. Zeabur 会自动分配一个域名，形如 `xxx.zeabur.app`
3. 点击域名访问你的网站

### 6. 绑定自定义域名（可选）

1. 在服务页面点击 "Domains"
2. 添加你自己的域名
3. 在你的域名注册商处添加 CNAME 记录指向 Zeabur 提供的地址

## 方式二：上传文件部署

### 1. 准备部署文件

确保以下文件存在并正确配置：
- `index.html`
- `script.js`
- `styles.css`
- `supabase_config.js`（已填入正确的 URL 和 Key）
- `path_config.js`
- `gas_config.js`
- `images/` 文件夹
- `manifest.json`
- `service-worker.js`

### 2. 创建 Zeabur 项目

同"方式一"的第2步

### 3. 上传文件

1. 点击 "Add Service" → "Static"
2. 选择 "Upload Files"
3. 将所有文件拖拽上传
4. 确认上传

### 4. 部署完成

Zeabur 会自动部署并分配域名

## 重要配置检查

部署前确认以下配置：

### ✅ supabase_config.js
```javascript
window.SUPABASE_CONFIG = {
  enabled: true,  // 必须为 true
  url: 'https://你的项目.supabase.co',  // 正确的 URL
  anonKey: '你的anon-key',  // 正确的 Key
  teacherPassword: 'WQXFXXX'  // 自定义密码
};
```

### ✅ gas_config.js（如不使用 GAS，保持 disabled）
```javascript
window.GAS_CONFIG = {
  enabled: false,  // 使用 Supabase 时保持 false
  endpoint: 'http://localhost:8000/api',
  apiKey: ''
};
```

## 测试部署

1. 访问 Zeabur 分配的域名
2. 测试教师端登录
3. 上传学生名单
4. 检查 Supabase Table Editor 中是否有数据
5. 测试授予/取消印章
6. 测试家长端访问（如有访问码功能）

## 更新部署

### Git 方式
```bash
# 修改代码后
git add .
git commit -m "Update xxx"
git push

# Zeabur 会自动检测并重新部署
```

### 上传方式
在 Zeabur 服务页面重新上传文件即可

## 费用说明

**Zeabur 免费额度**（2024）：
- 每月 $5 美元免费额度
- 静态站点几乎不消耗额度
- 小规模使用完全免费

**超出免费额度的情况**：
- 大量并发访问（数千用户同时在线）
- 大量静态资源（图片/视频）

对于学校集章系统，免费额度足够使用。

## 常见问题

### Q: 部署后页面打不开？
A: 检查：
1. 是否选择了正确的 Region
2. 构建是否成功（查看 Logs）
3. 域名 DNS 是否生效（如使用自定义域名）

### Q: 部署后 Supabase 连接失败？
A: 检查：
1. `supabase_config.js` 中的配置是否正确
2. Supabase 项目是否正常运行
3. 浏览器 Console 中的错误信息

### Q: 如何查看访问日志？
A: 在 Zeabur 服务页面点击 "Logs" 标签

### Q: 如何回滚到之前的版本？
A: 
- Git 方式：在 Git 中回退提交后重新推送
- 上传方式：重新上传之前的文件

### Q: 国内访问慢怎么办？
A: 
1. 选择 Hong Kong 或 Singapore 区域
2. 考虑绑定国内 CDN
3. 启用 PWA 离线缓存（项目已支持）

## 安全建议

1. **不要在代码中硬编码敏感信息**
   - 使用环境变量存储 Supabase Key
   - 老师密码定期更换

2. **启用 HTTPS**
   - Zeabur 自动提供 HTTPS
   - 确保所有链接使用 HTTPS

3. **设置 Supabase RLS**
   - 参考 `SUPABASE_SETUP.md` 中的安全策略
   - 正式使用建议启用 Auth

4. **监控使用情况**
   - 定期检查 Supabase 和 Zeabur 的用量
   - 设置用量告警

## 下一步

部署完成后：
1. 测试所有功能
2. 准备学生名单 Excel
3. 培训老师使用
4. 生成家长访问码（每个学生一个）
5. 向家长分发访问链接和访问码

## 技术支持

遇到问题可以：
1. 查看浏览器 Console 错误信息
2. 检查 Zeabur Logs
3. 查看 Supabase Table Editor 数据
4. 参考本项目 README.md

