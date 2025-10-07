// Supabase 配置文件
// 使用方法：
// 1. 在 https://supabase.com 注册并创建项目
// 2. 在项目设置中找到 URL 和 anon key
// 3. 将下面的占位符替换为你的真实值
// 4. 部署到 Zeabur 时，可以使用环境变量或直接写在这里

window.SUPABASE_CONFIG = {
  // 是否启用 Supabase（设为 true 后会自动同步到云端）
  enabled: true, // 已启用
  
  // 你的 Supabase 项目 URL（在项目设置 → API 中找到）
  url: 'https://eugqrswoawuzeiyqawed.supabase.co',
  
  // 你的 Supabase anon/public key（在项目设置 → API 中找到）
  anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV1Z3Fyc3dvYXd1emVpeXFhd2VkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk4MDYyNzQsImV4cCI6MjA3NTM4MjI3NH0.BOKgC0vMaHNn7yyY4R84fInqYDDqIqlvB-nMxKER3RM',
  
  // 老师登录密码（简化版：共享密码）
  // 注意：正式使用建议改用 Supabase Auth 的邮箱密码登录
  teacherPassword: 'WQXFXXX'
};

// 开发提示：
// - anon key 是公开的，可以放在前端
// - 数据安全由 RLS（行级安全策略）保护
// - 家长端使用访问码查询，无需登录

