import { jwtVerify } from 'jose';

export const onRequestGet: PagesFunction = async ({ request, env }) => {
  const url = new URL(request.url);
  const token = url.searchParams.get('token');
  if (!token) {
    return new Response('Missing token', { status: 400 });
  }

  try {
    await jwtVerify(token, new TextEncoder().encode(env.JWT_SECRET));
    const html = `<!DOCTYPE html><html lang="ja"><meta charset="utf-8" /><body>登録完了</body></html>`;
    return new Response(html, {
      headers: { 'content-type': 'text/html; charset=UTF-8' },
    });
  } catch {
    return new Response('Invalid token', { status: 400 });
  }
};
