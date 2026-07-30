import type { SiteConfig } from "./types";

export const siteConfig: SiteConfig = {
  name: "RyoKasai",
  title: "Software Engineer",
  description: "Portfolio website of Kasai",
  accentColor: "#1d4ed8",
  social: {
    qiita: "https://qiita.com/RK127",
    github: "https://github.com/RKasai127",
  },
  aboutMe:
    "バックエンドエンジニアとして5年間、会員制サイトのAPI開発に従事してきました。住所変更・退会処理や、年齢確認のための外部サービス連携など、個人情報を扱う機能を中心に担当し、会員数200万人規模のサービスから現在の100万人規模のサービスまで携わっています。開発チームのサブリーダーとしてレビューや進捗管理を担いながら、メンバーが前向きに取り組めるよう雑談を通じたコミュニケーションも大切にしています。今後は応答速度改善や大量リクエストを支える設計など、パフォーマンス面での価値提供に軸足を置きつつ、裁量を持って技術的な改善に取り組める環境で、インフラやフロントエンド領域などに広げていきたいと考えています。ゆくゆくは、技術力でビジネスにインパクトを出せる・世の中をより良くできるようなエンジニアになることが目標です。",
  skills: {
    proficient: [
      "Python",
      "AngularJS",
      "Next.js",
      "Docker",
      "Heroku",
      "PostgreSQL",
    ],
    familiar: ["AWS", "Astro", "Auth0", "Salesforce", "MuleSoft"],
  },
  projects: [],
  experience: [
    {
      company: "上場企業のSIer",
      title: "Software Engineer/PL(サブリーダ)",
      dateRange: "2025/3 - 現在",
      bullets: [
        "会員制サイト(ToC)の新規機能開発・運用保守をバックエンドエンジニアとして参画",
        "開発チームのサブリーダとして定例等のファシリテーションや進捗管理を担当",
        "新人エンジニアのメンターなどの教育も担当",
      ],
    },
    {
      company: "小規模SIer",
      title: "Software Engineer",
      dateRange: "2021/4 - 2025/3",
      bullets: [
        "特定ユーザー層向け会員制サイトの新規機能開発・新基盤の移行プロジェクト・運用保守を担当",
        "建築コンサルタント会社向けの管理画面(フロント・バックエンドの両方を担当)の新規開発・運用保守を担当",
        "バス会社向けの新規管理画面構築をバックエンドエンジニアとしてAPI開発を担当",
      ],
    },
  ],
  licenses: [
    {
      name: "AWS Certified Solutions Architect - Associate",
      dateRange: "2026/3",
    },
    {
      name: "基本情報技術者",
      dateRange: "2018",
    },
  ],
};
