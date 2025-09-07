import { Translations } from '../types';

export const translations: Record<string, Translations> = {
  en: {
    hero: {
      title: "Waitlist",
      subtitle: "Join the future",
      cta: "Join Waitlist"
    },
    form: {
      email: {
        label: "Email Address",
        placeholder: "Enter your email",
        required: "Email is required",
        invalid: "Please enter a valid email address"
      },
      name: {
        label: "",
        placeholder: ""
      },
      interest: {
        label: "",
        placeholder: "",
        options: []
      },
      referralCode: {
        label: "",
        placeholder: ""
      },
      agreeToTerms: {
        label: "I agree to the terms",
        required: "You must agree to the terms"
      },
      submit: "Join Waitlist",
      submitting: "Joining...",
      success: "Success! You've been added to our waitlist.",
      error: "Something went wrong. Please try again.",
      retry: "Try Again"
    },
    socialProof: {
      title: "Trusted by thousands",
      badges: [
        "5000+ Users",
        "99% Satisfaction",
        "24/7 Support"
      ]
    },
    faq: {
      title: "Frequently Asked Questions",
      items: [
        {
          question: "What is this waitlist for?",
          answer: "Our waitlist gives you early access to our upcoming platform with exclusive features and benefits."
        },
        {
          question: "When will I get access?",
          answer: "We'll notify you via email as soon as we're ready to launch. Expected timeline is Q2 2024."
        },
        {
          question: "Is there a cost to join?",
          answer: "Joining the waitlist is completely free. Early access members may receive special pricing."
        },
        {
          question: "Can I invite friends?",
          answer: "Yes! Use your referral code to invite friends and earn rewards when they join."
        }
      ]
    },
    footer: {
      terms: "Terms of Service",
      privacy: "Privacy Policy",
      copyright: "© 2024 Waitlist. All rights reserved."
    }
  },
  ja: {
    hero: {
      title: "ウェイトリスト",
      subtitle: "未来に参加しよう",
      cta: "ウェイトリストに参加"
    },
    form: {
      email: {
        label: "メールアドレス",
        placeholder: "メールアドレスを入力",
        required: "メールアドレスは必須です",
        invalid: "有効なメールアドレスを入力してください"
      },
      name: {
        label: "",
        placeholder: ""
      },
      interest: {
        label: "",
        placeholder: "",
        options: []
      },
      referralCode: {
        label: "",
        placeholder: ""
      },
      agreeToTerms: {
        label: "利用規約に同意します",
        required: "利用規約への同意が必要です"
      },
      submit: "ウェイトリストに参加",
      submitting: "参加中...",
      success: "成功！ウェイトリストに追加されました。",
      error: "エラーが発生しました。もう一度お試しください。",
      retry: "再試行"
    },
    socialProof: {
      title: "数千人に信頼されています",
      badges: [
        "5000+ ユーザー",
        "99% 満足度",
        "24/7 サポート"
      ]
    },
    faq: {
      title: "よくある質問",
      items: [
        {
          question: "このウェイトリストは何のためですか？",
          answer: "ウェイトリストに参加すると、今後のプラットフォームへの早期アクセスと特別な機能・特典を提供します。"
        },
        {
          question: "いつアクセスできますか？",
          answer: "準備が整い次第、メールでお知らせします。予定は2024年第2四半期です。"
        },
        {
          question: "参加に費用はかかりますか？",
          answer: "ウェイトリストへの参加は完全無料です。早期アクセスメンバーは特別価格の対象となる場合があります。"
        },
        {
          question: "友人を招待できますか？",
          answer: "はい！紹介コードを使って友人を招待し、参加時に報酬を受け取ることができます。"
        }
      ]
    },
    footer: {
      terms: "利用規約",
      privacy: "プライバシーポリシー",
      copyright: "© 2024 ウェイトリスト。全著作権所有。"
    }
  }
};
