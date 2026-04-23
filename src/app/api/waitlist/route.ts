import { NextResponse } from "next/server";
import { getSupabase } from "@/lib/supabase";

export async function POST(request: Request) {
  const { email, question } = await request.json();

  if (!email || !question) {
    return NextResponse.json(
      { error: "Email and question are required" },
      { status: 400 }
    );
  }

  const { error } = await getSupabase()
    .from("waitlist")
    .insert({ email, question });

  if (error) {
    console.error("Supabase insert error:", error);
    return NextResponse.json(
      { error: "Failed to save submission", details: error.message },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true });
}
