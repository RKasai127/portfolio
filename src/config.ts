import type { Project, Socials } from "./types";

export const siteConfig = {
  name: "RyoKasai",
  title: "Software Engineer",
  description: "Portfolio website of Kasai",
  accentColor: "#1d4ed8",
  social: {
    email: "your-email@example.com",
    qiita: "https://qiita.com/Yom-Sakurai",
    github: "https://github.com/RKasai127",
  } as Socials,
  aboutMe:
    "バックエンドエンジニアとして5年間、主にToC向け会員制サイトの開発・運用保守に従事してきました。マイページなど個人情報を扱う領域のAPI開発を中心に、数多くの機能実装を手がけています。技術を使って世の中をより良く、便利にしていくこと、ビジネスにインパクトを出していくことを大切にしています。技術力とチームをまとめる力の両面から、価値を出せるエンジニアになることを目指しています。",
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
  projects: [] as Project[],
  experience: [
    {
      company: "上場企業のSIer",
      title: "Software Engineer/PL(サブリーダ)",
      dateRange: "2025/3 - 現在",
      bullets: [
        "会員制サイト(ToC)の新規機能開発・運用保守をバックエンドエンジニアとして参画",
        "開発のサブリーダとしてファシリテーションや進捗管理を担当",
        "新人エンジニアのメンターなどの教育も担当",
      ],
    },
    {
      company: "小規模SIer",
      title: "Software Engineer",
      dateRange: "2021/4 - 2025/3",
      bullets: [
        "喫煙者向け会員制サイトの新規機能開発・新基盤の移行プロジェクト・運用保守を担当",
        "建築コンサルタント会社向けの管理画面(フロント・バックエンドの両方を担当)の新規開発・運用保守を担当",
        "バス会社向けの新規管理画面構築をバックエンドエンジニアとしてAPI開発を担当",
      ],
    },
  ],
  certifications: [
    {
      name: "University Name",
      dateRange: "2014 - 2018",
    },
    {
      name: "University Name",
      dateRange: "2014 - 2018",
    },
  ],
};
