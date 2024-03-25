import { NextRequest, NextResponse } from "next/server";
import fetch from "node-fetch";

export default async function handler() {
  const res = await fetch(
    `https://graph.instagram.com/v12.0/me/media?fields=id,caption,media_type,media_url,permalink,timestamp&access_token=${process.env.NEXT_PUBLIC_INSTAGRAM_KEY}&limit=10`,
    {
      method: "POST",
      body: JSON.stringify({
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.CLIENT_SECRET,
        fb_exchange_token: process.env.NEXT_PUBLIC_INSTAGRAM_KEY,
      }),
      headers: { "Content-Type": "application/json" },
    }
  );

  const data = await res.json();
  return NextResponse.json({ data });
}
