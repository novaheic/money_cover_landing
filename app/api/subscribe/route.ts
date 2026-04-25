import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { email } = await req.json();

  if (!email || typeof email !== "string") {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  const response = await fetch(
    "https://moneycoven.substack.com/api/v1/free?nojs=true",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
      body: new URLSearchParams({ email }),
    },
  );

  if (!response.ok) {
    return NextResponse.json(
      { error: "Subscription failed" },
      { status: response.status },
    );
  }

  return NextResponse.json({ ok: true });
}
