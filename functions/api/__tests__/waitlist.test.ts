/**
 * @jest-environment node
 */
import { jest } from '@jest/globals';

const sendMock = jest.fn();
jest.mock('resend', () => ({
  Resend: jest.fn().mockImplementation(() => ({ emails: { send: sendMock } })),
}));
jest.mock('jose', () => ({
  SignJWT: jest.fn().mockImplementation(() => ({
    setProtectedHeader: () => ({
      setExpirationTime: () => ({
        sign: () => Promise.resolve('token'),
      }),
    }),
  })),
}));

describe('onRequestPost', () => {
  const env = {
    JWT_SECRET: 'secret',
    APP_URL: 'http://example.com',
    RESEND_API_KEY: 'key',
    EMAIL_FROM: 'from@example.com',
  } as any;

  beforeEach(() => {
    sendMock.mockClear();
  });

  it('validates input', async () => {
    const { onRequestPost } = await import('../waitlist');
    const req = new Request('http://localhost', {
      method: 'POST',
      body: JSON.stringify({ email: 'test@example.com' }),
      headers: { 'Content-Type': 'application/json' },
    });
    const res = await onRequestPost({ request: req, env } as any);
    expect(res.status).toBe(400);
  });

  it('sends email when input is valid', async () => {
    const { onRequestPost } = await import('../waitlist');
    const req = new Request('http://localhost', {
      method: 'POST',
      body: JSON.stringify({ email: 'test@example.com', consent: true }),
      headers: { 'Content-Type': 'application/json' },
    });
    const res = await onRequestPost({ request: req, env } as any);
    expect(res.status).toBe(200);
    expect(sendMock).toHaveBeenCalled();
  });
});
