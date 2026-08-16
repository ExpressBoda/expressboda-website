export async function GET({ request }) {
  const client_id = process.env.OAUTH_CLIENT_ID;
  const url = new URL(request.url);
  const redirectUri = `https://github.com/login/oauth/authorize?client_id=${client_id}&scope=repo`;
  
  return Response.redirect(redirectUri, 302);
}
