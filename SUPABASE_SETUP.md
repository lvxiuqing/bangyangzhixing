# Supabase 数据库设置指南

## 第一步：创建 Supabase 项目

1. 访问 https://supabase.com 并注册/登录
2. 点击 "New Project"（新建项目）
3. 填写项目信息：
   - Name（名称）: xiaobangyang
   - Database Password（数据库密码）: 设置一个强密码并保存
   - Region（区域）: 选择 Southeast Asia (Singapore) 或离你最近的
4. 点击 "Create new project" 并等待初始化完成（约2分钟）

## 第二步：创建数据表

1. 在项目界面左侧点击 "SQL Editor"
2. 点击 "New query"
3. 复制下面的 SQL 代码并粘贴，然后点击 "Run"

```sql
-- 创建学生表
create table if not exists public.students (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  grade text not null,
  class text not null,
  access_code text not null unique,
  earned_stamps jsonb default '[]'::jsonb,
  stamp_dates jsonb default '{}'::jsonb,
  monthly_history jsonb default '{}'::jsonb,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 创建访问码索引（家长查询用）
create index if not exists students_access_code_idx on public.students (access_code);

-- 创建年级班级索引（老师查询用）
create index if not exists students_grade_class_idx on public.students (grade, class);

-- 创建姓名索引
create index if not exists students_name_idx on public.students (name);

-- 创建访问日志表（可选，用于记录操作历史）
create table if not exists public.stamp_logs (
  id uuid default gen_random_uuid() primary key,
  student_id uuid references public.students(id) on delete cascade,
  stamp_id integer not null,
  action text not null check (action in ('award', 'cancel')),
  operated_at timestamp with time zone default timezone('utc'::text, now()) not null,
  metadata jsonb default '{}'::jsonb
);

-- 创建日志索引
create index if not exists stamp_logs_student_idx on public.stamp_logs (student_id);
```

## 第三步：设置行级安全策略（RLS）

继续在 SQL Editor 中运行以下代码：

```sql
-- 启用行级安全
alter table public.students enable row level security;
alter table public.stamp_logs enable row level security;

-- 策略1：家长端只读访问（通过访问码）
create policy "家长可通过访问码查看学生"
  on public.students for select
  using (true);  -- 允许所有人读取，但前端需要提供正确的 code

-- 策略2：老师端可以读取所有学生（简化版，共享密码）
-- 注意：这是简化版，正式使用建议启用 Supabase Auth
create policy "老师可查看所有学生"
  on public.students for select
  using (true);

-- 策略3：老师端可以更新学生数据
create policy "老师可更新学生数据"
  on public.students for update
  using (true);

-- 策略4：老师端可以插入新学生
create policy "老师可插入学生"
  on public.students for insert
  with check (true);

-- 策略5：老师端可以删除学生
create policy "老师可删除学生"
  on public.students for delete
  using (true);

-- 日志表策略（所有人可插入，仅管理员可查看）
create policy "任何人可记录日志"
  on public.stamp_logs for insert
  with check (true);

create policy "管理员可查看日志"
  on public.stamp_logs for select
  using (true);
```

### 安全说明

当前配置使用简化的权限策略（`using (true)`），适合快速上线。这依赖于：
- 前端不暴露敏感操作（家长端只读）
- 老师登录使用共享密码（在 `supabase_config.js` 中）

**正式使用建议**：
1. 启用 Supabase Auth（邮箱密码登录）
2. 在数据库中添加 `teachers` 表存储老师账号
3. 修改 RLS 策略为基于 `auth.uid()` 的权限判断
4. 家长端查询改为仅返回匹配 `code` 的单条记录

示例（更安全的 RLS）：
```sql
-- 删除旧策略
drop policy if exists "家长可通过访问码查看学生" on public.students;
drop policy if exists "老师可查看所有学生" on public.students;

-- 新策略：仅允许查询自己访问码的学生
create policy "家长仅可查看自己孩子"
  on public.students for select
  using (
    code = current_setting('request.jwt.claims', true)::json->>'code'
  );

-- 老师策略：需要认证后才能操作
create policy "认证老师可操作"
  on public.students for all
  using (auth.role() = 'authenticated');
```

## 第四步：获取配置信息

1. 在 Supabase 项目界面点击左侧 "Settings" → "API"
2. 找到以下信息：
   - **Project URL**: 形如 `https://xxx.supabase.co`
   - **anon public**: 形如 `eyJhbGci...` 的长字符串
3. 复制这两个值

## 第五步：配置前端

打开项目中的 `supabase_config.js` 文件，修改如下：

```javascript
window.SUPABASE_CONFIG = {
  enabled: true,  // 改为 true
  url: 'https://你的项目ID.supabase.co',  // 粘贴你的 Project URL
  anonKey: '你的anon-key',  // 粘贴你的 anon public key
  teacherPassword: 'WQXFXXX'  // 老师登录密码（可自定义）
};
```

## 第六步：测试

1. 在本地运行项目：`node server.js` 或直接打开 `index.html`
2. 切换到教师端，登录（密码是你在 config 中设置的）
3. 上传学生名单（Excel）
4. 打开浏览器开发者工具（F12），查看 Console 是否有 Supabase 相关日志
5. 在 Supabase 项目中点击 "Table Editor" → "students"，查看是否有数据

## 常见问题

### Q: 提示 "Failed to fetch" 或网络错误？
A: 检查：
1. Supabase URL 和 Key 是否正确
2. 网络是否能访问 Supabase（国内可能需要等待或使用代理）
3. 浏览器 Console 中的详细错误信息

### Q: 数据没有同步到 Supabase？
A: 检查：
1. `supabase_config.js` 中 `enabled` 是否为 `true`
2. Console 中是否有 "Supabase xxx 失败" 的警告
3. Supabase 项目的 RLS 策略是否正确启用

### Q: 家长端看不到数据？
A: 确保：
1. 学生已上传到 Supabase（在 Table Editor 中查看）
2. 每个学生都有唯一的 `code`（访问码）
3. 家长输入的访问码正确

### Q: 想要更严格的权限控制？
A: 参考上面"安全说明"部分的进阶 RLS 配置，启用 Supabase Auth。

## 数据库升级

### 如果你之前创建的表使用 `code` 字段，需要升级为 `access_code`

在 Supabase SQL Editor 中运行：

```sql
-- 将 code 字段重命名为 access_code
ALTER TABLE public.students 
RENAME COLUMN code TO access_code;

-- 更新索引名称（如果存在旧索引）
DROP INDEX IF EXISTS students_code_idx;
CREATE INDEX IF NOT EXISTS students_access_code_idx ON public.students (access_code);
```

## 下一步

配置完成后，继续查看 `ZEABUR_DEPLOY.md` 了解如何部署到 Zeabur。

