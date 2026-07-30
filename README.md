<img width="100%" alt="preview" src="./public/readme-header.svg" />

<div align="center">

# RyoKasai's Portfolio

[![Astro](https://img.shields.io/badge/Astro-5.x-BC52EE?logo=astro&logoColor=white)](https://astro.build/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38BDF8?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Cloudflare](https://img.shields.io/badge/Deployed_on-Cloudflare-F38020?logo=cloudflare&logoColor=white)](https://workers.cloudflare.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE.md)
[![Format Check](https://github.com/RKasai127/portfolio/actions/workflows/format-check.yml/badge.svg)](https://github.com/YomSakurai/portfolio/actions/workflows/format-check.yml)

</div>

## Built With

- **[Astro](https://astro.build/)** - 静的サイトジェネレーター
- **[Tailwind CSS v4](https://tailwindcss.com/)** - ユーティリティファーストCSSフレームワーク
- **[Tabler Icons](https://tabler.io/icons)** - アイコンライブラリ
- **[TypeScript](https://www.typescriptlang.org/docs/)** - プログラミング言語

## Local Development

```bash
npm install
npm run dev
```

## Project Structure

```text
.
├── CLAUDE.md
├── LICENSE.md
├── README.md
├── astro.config.mjs
├── dist
│   ├── _astro
│   │   └── index.1Ac7MrES.css
│   ├── favicon.svg
│   ├── index.html
│   └── qiita.svg
├── package-lock.json
├── package.json
├── public
│   ├── favicon.svg
│   ├── qiita.svg
│   └── readme-header.svg
├── src
│   ├── components
│   │   ├── About.astro
│   │   ├── Experience.astro
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── Licenses.astro
│   │   └── Projects.astro
│   ├── config.ts
│   ├── pages
│   │   └── index.astro
│   ├── styles
│   │   └── global.css
│   └── types
│       └── index.ts
└── tsconfig.json
```

## Deployment

Astro製の静的サイトのため、Netlify / Vercel / GitHub Pages / Cloudflare Pages など
主要な静的ホスティングサービスへ無料でデプロイ可能です。
詳細は [Astro公式デプロイガイド](https://docs.astro.build/en/guides/deploy/) を参照してください。

## License

このサイトは [RyanFitzgerald/devportfolio](https://github.com/RyanFitzgerald/devportfolio) 様のテンプレート([MIT License](./LICENSE.md))をベースにカスタマイズして作成しています。
素晴らしいテンプレートの公開ありがとうございます。この場を借りて感謝申し上げます。
