import fetch from "node-fetch";

export default async function handler(req, res) {
  const { code } = req.query;

  const params = {
    client_id: process.env.GITHUB_CLIENT_ID,
    client_secret: process.env.GITHUB_CLIENT_SECRET,
    code,
  };

  const r = await fetch("https://github.com/login/oauth/access_token", {
    method: "POST",
    headers: { Accept: "application/json" },
    body: new URLSearchParams(params),
  });

  const data = await r.json();

  return res.status(200).json(data);
}
