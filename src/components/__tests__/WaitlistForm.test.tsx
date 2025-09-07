import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import WaitlistForm from '../WaitlistForm';
import { translations } from '../../utils/translations';

describe('WaitlistForm', () => {
  beforeEach(() => {
    localStorage.clear();
    (global.fetch as unknown) = jest.fn();
  });

  test('handles successful submission', async () => {
    (global.fetch as jest.Mock).mockResolvedValue({ ok: true });
    render(<WaitlistForm translations={translations.en} currentLanguage="en" />);

    fireEvent.change(screen.getByLabelText(/Email Address/i), { target: { value: 'test@example.com' } });
    fireEvent.click(screen.getByLabelText(/I agree to the terms/i));
    fireEvent.click(screen.getByRole('button', { name: /Join Waitlist/i }));

    await waitFor(() => expect(screen.getByText(translations.en.form.success)).toBeInTheDocument());
    expect(localStorage.getItem('waitlist_registered_email')).toBe('test@example.com');
    expect(global.fetch).toHaveBeenCalledWith('/api/waitlist', expect.objectContaining({
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: 'test@example.com', consent: true })
    }));
  });

  test('shows validation errors for invalid email', () => {
    const { container } = render(<WaitlistForm translations={translations.en} currentLanguage="en" />);
    const form = container.querySelector('form')!;
    fireEvent.submit(form);
    expect(screen.getByText(translations.en.form.email.required)).toBeInTheDocument();

    fireEvent.change(screen.getByLabelText(/Email Address/i), { target: { value: 'invalid' } });
    fireEvent.submit(form);
    expect(screen.getByText(translations.en.form.email.invalid)).toBeInTheDocument();
  });

  test('requires consent before submitting', () => {
    render(<WaitlistForm translations={translations.en} currentLanguage="en" />);
    fireEvent.change(screen.getByLabelText(/Email Address/i), { target: { value: 'test@example.com' } });
    fireEvent.click(screen.getByRole('button', { name: /Join Waitlist/i }));
    expect(screen.getByText(translations.en.form.agreeToTerms.required)).toBeInTheDocument();
    expect(global.fetch).not.toHaveBeenCalled();
  });
});
