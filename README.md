# AICodingStandards.com — 完整建站方案（ChatGPT 五轮对话汇总）

---

## 一、产品定位

**网站名称：** AI Coding Standards Library
**副标题：** Best practices, architecture rules, coding standards, and AI-friendly engineering guidelines for modern AI-assisted development.
**中文理解：** AI 编码标准库 / AI 工程规范库

**不是：** ❌ 编程教程站 ❌ ChatGPT Prompt 站 ❌ 普通博客
**而是：** "AI Coding Context Infrastructure" — 给 AI 提供稳定工程上下文的标准库。

### 目标用户

| 层级 | 用户 | 痛点 |
|------|------|------|
| 第一层（核心） | Cursor / Claude Code / Windsurf / Copilot 用户 | AI 写代码不稳定、项目结构混乱、AI 经常"忘记规则" |
| 第二层（SEO） | 搜索用户 | 搜索 "ai coding standards"、"cursor coding rules" 等关键词 |

### 与已有网站的关系（内容边界）

| 网站 | 定位 | 内容范围 |
|------|------|----------|
| reporules.dev | Repository Governance System | 仓库治理、rules/memory/architecture 生成 |
| aicodingstandards.com | AI Coding Standards Library | 语言/框架层面的编码规范 |

**内容边界：** AICodingStandards 只写语言/框架层面的编码规范（如 TypeScript 命名、React 组件模式），不涉及"仓库治理"和"项目管理"。

✅ 可以做：TypeScript 命名规范、React 组件模式、Astro 目录最佳实践、AI-safe 模式、禁止模式
❌ 不可以做：repo governance、project management、memory system、rules orchestration

**设计上：** 两个站不共用设计风格，避免 Google 判定为重复站。

### 盈利模式

| 阶段 | 方式 |
|------|------|
| 0-3 个月 | Google AdSense 广告 |
| 3-6 个月 | 联盟推荐（Cursor / Claude / Vercel 等） |
| 6 个月后 | 工具化（AI Rules Generator 等） |

---

## 二、MVP 最小可行产品

### 页面结构（5 页）

| 页面 | 路径 | 作用 |
|------|------|------|
| 首页 | / | SEO + 品牌定位 + 引导浏览 |
| Standards 列表页 | /standards | 所有标准导航 + SEO 聚合 |
| 标准详情页（核心） | /standards/[slug] | 核心流量页 |
| Frameworks 概览页 | /frameworks | 分类导航 |
| About 页 | /about | 可信度 |

### MVP 不做清单

- ❌ 不做搜索功能（后期加）
- ❌ 不做 Dark mode
- ❌ 不做评论系统
- ❌ 不做按框架分类的二级页面（/frameworks/react 先不做）
- ❌ 不做 Generator 工具
- ❌ 不做用户系统/登录

### 第一批内容（5 篇）

1. TypeScript Naming Conventions
2. React Component Structure Standards
3. Astro Project Folder Structure
4. React Hook Organization Best Practices
5. CSS Utility Class Standards with Tailwind

---

## 三、首页设计

只做 3 个区块：

1. **Hero 区域**
   - 标题：AI Coding Standards Library
   - 副标题：Production-ready coding standards, architecture patterns, and AI-friendly engineering guidelines
   - 按钮：Browse Standards / Explore Frameworks

2. **热门标准卡片**（4-6 张）
   - TypeScript Naming Conventions
   - React Component Structure
   - AI-Friendly React Patterns
   - Astro Project Structure

3. **为什么需要 AI Standards？**（三栏）
   - Consistency（让 AI 输出稳定）
   - Context（让 AI 理解项目结构）
   - Scalability（大型项目不会失控）

---

## 四、标准详情页设计

### 页面布局

```
┌─────────────────────┐
│ Header              │
├─────────────────────┤
│ Hero（标题+标签）    │
├──────────┬──────────┤
│ Content  │ TOC      │
│          │ (sticky) │
│          │          │
│ Ad Slot  │ Ad       │
├──────────┴──────────┤
│ Related Standards   │
├─────────────────────┤
│ Footer              │
└─────────────────────┘
```

### 每页内容结构

1. **标题区：** 标准名 + 标签
2. **为什么重要：** 简短说明
3. **推荐结构：** 代码块展示
4. **最佳实践：** 列表展示
5. **错误案例 ❌ + 正确案例 ✅**
6. **AI Prompt 示例：** 用户可粘贴给 AI
7. **关联标准：** 自动按 tag 匹配

---

## 五、UI 设计

### 风格
- Documentation + Modern Blog 风格（参考 shadcn/ui、Vercel Docs）
- 极简、高可读性、SEO 友好
- 不做 dark mode

### Tailwind 配色

```js
// tailwind.config.mjs
theme: {
  extend: {
    colors: {
      primary: {
        50: '#EFF6FF',
        100: '#DBEAFE',
        200: '#BFDBFE',
        300: '#93C5FD',
        400: '#60A5FA',
        500: '#3B82F6',
        600: '#2563EB',
        700: '#1D4ED8',
        800: '#1E40AF',
        900: '#1E3A8A',
      },
      background: '#FFFFFF',
      foreground: '#0F172A',
      muted: '#64748B',
      border: '#E2E8F0',
      card: '#F8FAFC',
      code: '#0F172A',
    },
  },
}
```

### 页面颜色规范
- 页面背景：bg-white
- 主文字：text-slate-900
- 次级文字：text-slate-500
- 卡片背景：bg-slate-50
- Hover：hover:bg-slate-100
- 链接：text-blue-600 / hover:text-blue-700

### 字体
- 正文：Inter（通过 @fontsource self-hosted）
- 代码：JetBrains Mono（通过 @fontsource self-hosted）

```bash
npm install @fontsource/inter @fontsource/jetbrains-mono
```

```css
/* global.css */
@import '@fontsource/inter';
@import '@fontsource/jetbrains-mono';

body { font-family: 'Inter', sans-serif; }
code, pre { font-family: 'JetBrains Mono', monospace; }
```

### Logo
- 文字 Logo：**AI Coding Standards**
- 左侧图标："</>" 或 "{}" 或 "A"
- Favicon：Favicon.io 生成，蓝底白字 "AI"（32x32）

---

## 六、技术栈

| 技术 | 选型 | 原因 |
|------|------|------|
| 框架 | Astro | SEO 极强、超轻量、静态生成 |
| CSS | Tailwind CSS | 高效、易维护 |
| UI 组件 | shadcn/ui | Claude Code 最会写 |
| 内容格式 | MDX | 内容驱动、可扩展 |
| 代码高亮 | Shiki（Astro 内置） | Vercel Docs 在用，SEO 最好 |
| 部署 | Cloudflare Pages（免费） | 无需境外银行卡，完全免费 |
| 分析 | Google Analytics（GA4） | 免费 |
| SEO 工具 | Google Search Console | 免费 |

---

## 七、项目目录结构

```
src/
├── layouts/
│   ├── BaseLayout.astro       # 全局布局（Header + Footer + SEO）
│   └── StandardLayout.astro   # 标准详情布局
│
├── components/
│   ├── layout/
│   │   ├── Header.astro
│   │   └── Footer.astro
│   ├── ui/                    # shadcn 组件
│   └── standards/
│       ├── TableOfContents.astro
│       ├── StandardHero.astro
│       ├── RelatedStandards.astro
│       ├── AdSlot.astro
│       ├── CodeBlock.astro
│       └── TagList.astro
│
├── content/
│   └── standards/             # MDX 标准文件
│       ├── typescript-naming.mdx
│       ├── react-component-structure.mdx
│       └── ...
│
├── pages/
│   ├── index.astro
│   ├── about.astro
│   ├── frameworks/
│   │   └── index.astro
│   └── standards/
│       ├── index.astro
│       └── [slug].astro
│
├── styles/
│   └── global.css
│
├── utils/
│   └── content.ts
│
└── config.ts                  # Astro Content Collections 配置

public/
└── images/
    ├── standards/
    ├── diagrams/
    └── screenshots/
```

---

## 八、路由设计

| 路由 | 页面 | 说明 |
|------|------|------|
| / | 首页 | Hero + 热门标准 + 三栏 |
| /standards | 标准列表 | 所有标准，最新优先 |
| /standards/[slug] | 标准详情 | Astro 动态路由 |
| /frameworks | Frameworks 概览 | 分类导航 |
| /about | 关于页面 | 可信度 |

---

## 九、MDX Frontmatter 设计

### Content Collections Schema

```ts
// src/content/config.ts
import { defineCollection, z } from 'astro:content'

const standardsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    featured: z.boolean().optional().default(false),
    publishedAt: z.date(),
  }),
})

export const collections = {
  standards: standardsCollection,
}
```

### 文章 frontmatter 示例

```yaml
---
title: TypeScript Naming Conventions
description: Best practices for naming variables, functions, classes, and types in TypeScript.
tags:
  - TypeScript
  - Naming
  - Best Practices
featured: true
publishedAt: 2026-05-15
---
```

### URL Slug
- 手动写 slug（文件名即为 slug）
- 文件 typescript-naming.mdx → URL /standards/typescript-naming
- 不用中文文件名

---

## 十、SEO 架构

### 每页 Meta（BaseLayout 自动输出）

```astro
<head>
  <title>{title} | AI Coding Standards Library</title>
  <meta name="description" content={description} />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />
</head>
```

### JSON-LD Structured Data

**首页 → WebSite Schema：**
```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "AI Coding Standards Library",
  "url": "https://aicodingstandards.com"
}
```

**标准页 → TechArticle Schema：**
```json
{
  "@context": "https://schema.org",
  "@type": "TechArticle",
  "headline": "TypeScript Naming Conventions",
  "description": "Best practices for naming in TypeScript.",
  "author": { "@type": "Organization", "name": "AI Coding Standards" }
}
```

### Sitemap + Robots

```bash
npm install @astrojs/sitemap
```

```js
// astro.config.mjs
import sitemap from '@astrojs/sitemap'

export default {
  site: 'https://aicodingstandards.com',
  integrations: [sitemap()],
}
```

robots.txt Astro 会自动生成 sitemap 引用。

### SEO 策略
- URL 短路径：/standards/frontend-folder-structure
- Title 模板：{Title} | AI Coding Standards Library
- Description：150 字以内
- 内链策略：每篇文章至少 5 个 Related Standards（自动按 tag 匹配）

---

## 十一、导航设计

### Desktop
Logo | Standards | Frameworks | About

### Mobile
右上角 ☰ → shadcn/ui Sheet（右侧滑出 Drawer）

Drawer 内容：Standards / Frameworks / About

---

## 十二、TOC 实现

Astro 原生支持 headings，无需手动解析：

```astro
---
const { Content, headings } = await render(entry);
---

<nav class="sticky top-24">
  <ul class="space-y-2">
    {headings.map(h => (
      <li class={`ml-${(h.depth - 2) * 4}`}>
        <a href={`#${h.slug}`} class="text-sm text-slate-500 hover:text-blue-600">
          {h.text}
        </a>
      </li>
    ))}
  </ul>
</nav>
```

---

## 十三、Related Standards（自动匹配）

**规则：** 按 tag 重叠度自动匹配，不手动维护。

```ts
// 自动找相同 tags 的文章，按标签重合数排序
function getRelated(entry, allEntries) {
  return allEntries
    .filter(e => e.id !== entry.id)
    .map(e => ({
      ...e,
      score: e.data.tags.filter(t => entry.data.tags.includes(t)).length,
    }))
    .filter(e => e.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 5)
}
```

---

## 十四、广告位设计

### 占位组件（初期）

```astro
<!-- AdSlot.astro -->
<div class="my-10">
  <div class="rounded-xl border border-slate-200 p-6 text-center text-sm text-slate-400">
    Advertisement
  </div>
</div>
```

### 位置

| 页面 | 位置 |
|------|------|
| 首页 | Hero 下方（728x90） |
| Standards 列表页 | 每 6 个卡片插一个广告 |
| 标准详情页 | 正文中间 + 右侧栏下方 |

### 页面宽度
- 最大宽度：max-w-7xl
- 内容区：prose（自动）
- 右侧栏：260px（TOC + 广告）

### 申请 AdSense 后

只替换 AdSlot.astro 内部代码，组件名不变。

---

## 十五、Google Analytics + Search Console

### GA4 接入

```html
<!-- BaseLayout.astro -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Search Console

1. 进入 Google Search Console
2. 添加 Domain Property
3. Cloudflare DNS 添加 TXT Record 验证
4. 提交 sitemap.xml（Astro @astrojs/sitemap 自动生成）

---

## 十六、图片方案

- 存放位置：`/public/images/standards/`
- MDX 引用：`![React Structure](/images/standards/react-structure.png)`
- 图片格式：截图用 webp，图标/架构图用 svg
- 不需要外部 CDN（Cloudflare 自动 CDN）

---

## 十七、发布流程

### 一次标准文章从写到上线

| 步骤 | 操作 |
|------|------|
| 1 | 创建 content/standards/xxx.mdx |
| 2 | 写 frontmatter |
| 3 | 写内容 |
| 4 | 放图片到 /public/images/ |
| 5 | 本地预览：npm run dev |
| 6 | 检查 TOC / 图片 / Related / SEO |
| 7 | GitHub Desktop 提交 Commit + Push |
| 8 | Cloudflare 自动构建部署 |
| 9 | Google 自动抓取 |

**总耗时：2-3 分钟**

### 内容增长节奏

| 时期 | 频率 | 原因 |
|------|------|------|
| 第一个月 | 每周 3-5 篇 | 快速铺量 |
| 第二个月 | 每周 2-3 篇 | 持续更新 |
| 稳定期 | 每周 1-2 篇 | 长期维护 |

---

## 十八、执行计划（5 天上线）

| 天 | 内容 |
|----|------|
| Day 1 | Astro 初始化 + Tailwind + shadcn + Layout + 首页 |
| Day 2 | Content Collections 配置 + Standards 动态路由 + MDX 系统 |
| Day 3 | 写 5 篇高质量 Standards |
| Day 4 | Cloudflare Pages 部署 + SEO metadata + sitemap |
| Day 5 | Google Search Console + Google Analytics 配置 |

---

## 十九、关键提醒

### 技术提醒
- ✅ Astro Content Collections 用 z.object 做 schema 校验
- ✅ 代码高亮用 Shiki（Astro 内置 markdown.shikiConfig）
- ✅ 图片放 /public/，不用图床
- ✅ GitHub 仓库名推荐：aicodingstandards.com
- ✅ .gitignore：node_modules, dist, .env

### 内容提醒
- ✅ 每篇聚焦语言/框架层面
- ❌ 不写仓库治理
- ✅ 按 tag 自动关联，不手动维护
- ✅ 质量 > 数量

### 未来扩展（现在不做）
- ❌ Generator 工具
- ❌ 交互式代码示例 / iframe / CodeSandbox
- ❌ 用户系统
- ❌ 数据库 / API

### 性能说明
- Astro 100 页静态构建：20-40 秒
- Cloudflare Pages 免费计划完全足够
- 不会遇到 DeepSeek API 超时问题（纯静态站，无 API 调用）
- 不需要 Workers Paid，不涉及境外银行卡

---

## 二十、shadcn/ui 在 Astro 中的正确配置

### 核心原则

网站 **90% 用 Astro 原生组件**，只有需要交互的地方（Drawer、Mobile Menu、Search）才用 React + shadcn/ui。

**使用场景拆分：**

| 用 Astro 写 | 用 shadcn/react 写 |
|-------------|-------------------|
| Layout、Header、Footer | Mobile Drawer |
| Cards、Content | Search Modal |
| Standards 页面 | 未来：Theme Switch、Command Palette |

### 安装步骤

```bash
# Step 1: 创建项目
npm create astro@latest

# Step 2: 安装 Tailwind
npx astro add tailwind

# Step 3: 安装 React
npx astro add react

# Step 4: 安装 shadcn/ui 依赖
npm install class-variance-authority clsx tailwind-merge lucide-react

# Step 5: 初始化 shadcn CLI
npx shadcn@latest init
```

CLI 会问：
- Framework → 选 **Astro**
- Components path → `src/components/ui`
- Tailwind config → `tailwind.config.mjs`
- CSS file → `src/styles/global.css`

```bash
# Step 6: 安装需要的组件（按需）
npx shadcn@latest add sheet   # Mobile drawer
npx shadcn@latest add button  # 按钮
```

---

## 二十一、完整 astro.config.mjs（可直接用）

```js
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://aicodingstandards.com",

  integrations: [
    tailwind(),
    react(),
    mdx(),
    sitemap(),
  ],

  markdown: {
    shikiConfig: {
      theme: "github-light",
      wrap: true,
    },
  },

  vite: {
    ssr: {
      noExternal: ["@shikijs/transformers"],
    },
  },
});
```

**不需要的东西（现在不加）：**
- ❌ image service
- ❌ SSR adapter
- ❌ database
- ❌ CMS
- ❌ analytics plugin

---

## 二十二、完整标准页面示例（可直接作为模板）

文件路径：`src/content/standards/typescript-naming.mdx`

```markdown
---
title: TypeScript Naming Conventions
slug: typescript-naming
description: Best practices for consistent and scalable TypeScript naming conventions in modern frontend applications.
tags:
  - TypeScript
  - Naming
  - Frontend
featured: true
publishedAt: 2026-05-15
ogImage: /images/og/typescript-naming.png
---

# TypeScript Naming Conventions

Consistent naming conventions improve code readability, maintainability, and AI-assisted code generation quality.

AI coding tools perform significantly better when variable names, interfaces, components, and functions follow predictable patterns.

---

## Why Naming Consistency Matters

Inconsistent naming creates problems such as:

- Reduced readability
- Harder refactoring
- Confusing AI-generated code
- Duplicate abstractions
- Poor autocomplete experience

Consistent naming standards help both developers and AI tools understand project structure more effectively.

---

## General Naming Principles

Follow these rules across the codebase:

- Prefer descriptive names over short abbreviations
- Use consistent casing
- Avoid unnecessary prefixes
- Keep names predictable
- Align file names with exported symbols

---

## Variable Naming

Use camelCase for variables and functions.

### Correct ✅

```ts
const userProfile = {}
const isAuthenticated = true

function fetchUserData() {}
```

### Incorrect ❌

```ts
const User_Profile = {}
const auth = true

function GetUser() {}
```

---

## Component Naming

Use PascalCase for React components.

### Correct ✅

```tsx
export function UserCard() {}
export function SettingsModal() {}
```

### Incorrect ❌

```tsx
export function userCard() {}
export function settings_modal() {}
```

---

## Interface Naming

Avoid the `I` prefix for interfaces.

### Correct ✅

```ts
interface User {
  id: string
}
```

### Incorrect ❌

```ts
interface IUser {
  id: string
}
```

---

## Enum Naming

Use PascalCase for enum names and enum members.

### Correct ✅

```ts
enum UserRole {
  Admin,
  Editor,
  Viewer,
}
```

### Incorrect ❌

```ts
enum user_role {
  admin,
  editor,
}
```

---

## File Naming Standards

Use kebab-case for filenames.

### Correct ✅

```
user-profile.ts
auth-service.ts
settings-modal.tsx
```

### Incorrect ❌

```
UserProfile.ts
AuthService.ts
settingsModal.tsx
```

---

## AI Coding Prompt Example

Use the following instruction when working with AI coding tools:

```
Follow the TypeScript naming conventions defined in this project:
- camelCase for variables and functions
- PascalCase for components and types
- kebab-case for filenames
- avoid interface prefixes like IUser
```

---

## Best Practices Summary

- Use descriptive names
- Keep casing consistent
- Align filenames with exports
- Avoid abbreviations unless universally understood
- Prefer predictable patterns across the repository

---

## Related Standards

- React Component Structure Standards
- React Hook Organization Best Practices
- Tailwind Utility Class Standards
```
