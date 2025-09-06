export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validateForm = (formData: {
  email: string;
  agreeToTerms: boolean;
}): { isValid: boolean; errors: Record<string, string> } => {
  const errors: Record<string, string> = {};

  if (!formData.email.trim()) {
    errors.email = 'required';
  } else if (!validateEmail(formData.email)) {
    errors.email = 'invalid';
  }

  if (!formData.agreeToTerms) {
    errors.agreeToTerms = 'required';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};
