# 快速开始 - Supabase + Zeabur 完全免费部署

## 🚀 3步完成部署（完全免费）

### 第一步：Supabase 数据库设置（5分钟）

1. **注册 Supabase**
   - 访问 https://supabase.com
   - 点击 "Start your project" 免费注册
   - 使用 GitHub 账号登录更快

2. **创建项目**
   - 点击 "New Project"
   - 项目名称：`xiaobangyang`
   - 数据库密码：设置一个强密码并记住
   - 区域：选择 `Southeast Asia (Singapore)`
   - 点击 "Create new project"，等待2分钟初始化

3. **运行建表 SQL**
   - 左侧菜单点击 "SQL Editor"
   - 点击 "New query"
   - 打开项目中的 `SUPABASE_SETUP.md` 文件
   - 复制"第二步"中的所有 SQL 代码
   - 粘贴到 SQL Editor 并点击 "Run"
   - 再复制"第三步"中的 RLS 策略 SQL
   - 粘贴并再次点击 "Run"

4. **获取配置信息**
   - 左侧菜单点击 "Settings" → "API"
   - 复制 `Project URL=https://eugqrswoawuzeiyqawed.supabase.co`（
   - 复制 `anon public=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV1Z3Fyc3dvYXd1emVpeXFhd2VkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk4MDYyNzQsImV4cCI6MjA3NTM4MjI3NH0.BOKgC0vMaHNn7yyY4R84fInqYDDqIqlvB-nMxKER3RM` key（一长串字符）

### 第二步：配置项目（2分钟）

1. **修改 supabase_config.js**
   ```javascript
   window.SUPABASE_CONFIG = {
     enabled: true,  // 改为 true
     url: '粘贴你的 Project URL',
     anonKey: '粘贴你的 anon public key',
     teacherPassword: 'WQXFXXX'  // 可自定义老师登录密码
   };
   ```

2. **（可选）测试本地运行**
   ```bash
   # 在项目目录运行
   node server.js
   
   # 浏览器访问
   http://localhost:8000
   
   # 登录教师端，上传学生名单测试
   ```

### 第三步：部署到 Zeabur（3分钟）

#### 方案 A：从 GitHub 部署（推荐）

1. **推送代码到 GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/你的用户名/xiaobangyang.git
   git push -u origin main
   ```

2. **在 Zeabur 部署**
   - 访问 https://zeabur.com 并注册/登录
   - 点击 "New Project"
   - 选择 Region: `Hong Kong` 或 `Singapore`
   - 点击 "Add Service" → "Git"
   - 授权并选择你的仓库
   - 等待自动部署（1-2分钟）

3. **获取访问地址**
   - 部署完成后会显示域名（如 `xxx.zeabur.app`）
   - 点击域名访问你的网站

#### 方案 B：直接上传文件

1. 在 Zeabur 项目中点击 "Add Service" → "Static"
2. 选择 "Upload Files"
3. 将整个项目文件夹拖拽上传
4. 等待部署完成

## ✅ 完成！

你的集章系统现已上线，访问地址：`https://你的项目.zeabur.app`

### 后续步骤

1. **测试功能**
   - 访问你的网站
   - 点击"教师端"，用密码登录
   - 上传学生名单（Excel格式，需包含"姓名"列）
   - 测试授予印章

2. **分发给老师**
   - 把网站地址和密码发给其他老师
   - 每个老师都可以在自己电脑/手机上登录使用

3. **家长查看**
   - 家长访问同一个网址
   - 切换到"家长端"
   - 选择年级班级和学生姓名查看

## 💰 费用说明

- **Supabase 免费额度**：500MB 数据库 + 5GB 带宽/月
- **Zeabur 免费额度**：每月 $5 美元
- **学校使用**：完全在免费范围内
- **无需信用卡**：两个平台都可以免费使用

## 🔧 常见问题

### Q: 打不开 Supabase 怎么办？
A: Supabase 是国外服务，如果访问慢：
1. 多刷新几次
2. 使用手机热点尝试
3. 换个时间段访问
4. 参考备选方案：改用飞书多维表（联系我）

### Q: 部署后数据不同步？
A: 检查：
1. `supabase_config.js` 中 `enabled` 是否为 `true`
2. URL 和 Key 是否正确复制（没有多余空格）
3. 打开浏览器 F12 查看 Console 有无错误

### Q: 忘记老师密码？
A: 修改 `supabase_config.js` 中的 `teacherPassword`，重新部署

### Q: 多个老师可以同时使用吗？
A: 可以！所有老师用同一个网址和密码登录，数据实时同步

### Q: 家长怎么查看自己孩子的数据？
A: 
- 当前版本：家长端选择年级、班级、学生姓名
- 未来版本：每个学生生成唯一访问码，家长输入访问码只能看自己孩子

## 📚 详细文档

- 完整的 Supabase 设置：查看 `SUPABASE_SETUP.md`
- 完整的 Zeabur 部署：查看 `ZEABUR_DEPLOY.md`
- 原项目说明：查看 `README.md`

## 🆘 需要帮助？

1. 查看浏览器 Console 错误信息（F12）
2. 查看 Supabase Table Editor 数据是否正确
3. 查看 Zeabur Logs 日志
4. 提交 Issue 到 GitHub

## 🎉 享受你的免费集章系统！

现在你有了一个：
- ✅ 多老师多设备同步使用
- ✅ 家长在家随时查看
- ✅ 数据自动备份
- ✅ 完全免费
- ✅ 无需服务器

的专业集章系统！

