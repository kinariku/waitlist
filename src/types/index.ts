export interface WaitlistFormData {
  email: string;
  name?: string;
  interest: string;
  referralCode?: string;
  agreeToTerms: boolean;
}

export interface Language {
  code: string;
  name: string;
  flag: string;
}

export interface Translations {
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  form: {
    email: {
      label: string;
      placeholder: string;
      required: string;
      invalid: string;
    };
    name: {
      label: string;
      placeholder: string;
    };
    interest: {
      label: string;
      placeholder: string;
      options: string[];
    };
    referralCode: {
      label: string;
      placeholder: string;
    };
    agreeToTerms: {
      label: string;
      required: string;
    };
    submit: string;
    submitting: string;
    success: string;
    error: string;
    retry: string;
  };
  socialProof: {
    title: string;
    badges: string[];
  };
  faq: {
    title: string;
    items: {
      question: string;
      answer: string;
    }[];
  };
  footer: {
    terms: string;
    privacy: string;
    copyright: string;
  };
}
