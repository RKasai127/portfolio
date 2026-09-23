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
    "バックエンドエンジニアとして、会員制サイトのAPI開発に従事してきました。住所変更・退会処理や、年齢確認のための外部サービス連携など、個人情報を扱う機能を担当し、会員数200万人規模のサービスから現在の100万人規模のサービスまで携わっています。開発チームのサブリーダーとして、レビューや進捗管理を通じたチームの生産性向上にも取り組んできました。直近ではAWS(Transit Gateway, CloudFormation等)を用いた環境構築において、既存構成を踏まえたセキュリティ設定の要否判断や、AIツールを活用した構築手順の策定・検証など、バックエンドを軸足にインフラ領域への越境を実践しています。また、認証基盤のテストコード整備・CI組み込みによる品質改善も実施しました。今後はこの延長として、フロントエンド・インフラ・セキュリティ領域にも越境しながら、チームで協力して世の中をより良くするプロダクトづくりに携わり、技術力でビジネスにインパクトを出せるエンジニアを目指していきたいです。OSS活動も引き続き積極的に取り組んでいきます。",
  skills: {
    proficient: [
      "Python",
      "AngularJS",
      "Next.js",
      "Docker",
      "Heroku",
      "PostgreSQL",
    ],
    familiar: ["AWS", "Cloudflare", "Astro", "Auth0", "Salesforce", "MuleSoft"],
  },
  projects: [
    {
      name: "vscode-autoconfig",
      link: "https://github.com/RKasai127/vscode-autoconfig",
      bullets: [
        "プロジェクトのpackage.jsonやrequirements.txtなどのマニフェストファイルを解析",
        ".vscode/settings.jsonとextensions.jsonの推奨設定を自動生成するCLIツール",
        "npmパッケージとして公開",
      ],
      skills: ["TypeScript", "Node.js"],
    },
    {
      name: "xlreset",
      link: "https://github.com/RKasai127/xlreset",
      bullets: [
        "Excelファイルの各シートの表示位置をA1・ズーム100%にリセットする依存0のCLIツール",
        "開いた際にスクロール位置やズームが崩れたファイルを一括で整える用途で利用可能",
        "pipxでインストール可能なPython製パッケージとして公開",
      ],
      skills: ["Python"],
    },
  ],
  experience: [
    {
      company: "上場企業のSIer",
      title: "Software Engineer/PL(サブリーダ)",
      dateRange: "2025/3 - 現在",
      bullets: [
        "会員制ToCサイトのバックエンド開発を担当。開発チームのサブリーダーとして定例ファシリテーション・進捗管理・顧客折衝を推進",
        "PM休職時に約1ヶ月間PLを代行。対面での仕様説明会を提案・実施し、スケジュール遅延0件でプロジェクトを運営",
        "テスト未整備だった認証基盤のテストコードを単独で約300件新規作成しCIへ組み込み。カバレッジを自ら提案し97〜99%まで向上",
        "AWS・Heroku環境の新規構築を、既存構成を踏まえつつAIツールも活用しながら単独で推進(稼働後障害0件)",
        "新人エンジニアのメンターとして教育を担当。サポートしたメンバーは後任プロジェクトでメンターへと成長",
      ],
    },
    {
      company: "小規模SIer",
      title: "Software Engineer",
      dateRange: "2021/4 - 2025/3",
      bullets: [
        "特定ユーザー層向け会員制サイト(会員数200万人規模)の認証基盤リプレイスを、仕様不明な状態から仕様を明確化した上で完遂",
        "上記に加え、決済・外部サービス連携など複数のAPIリプレイス・新規開発を担当",
        "内装コンサルタント会社向け管理画面(フロント・バックエンド)の新規開発・運用保守、バス会社向け管理画面のAPI開発を担当",
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
