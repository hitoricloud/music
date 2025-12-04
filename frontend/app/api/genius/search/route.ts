import axios from "axios";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const q = searchParams.get("q") || "";
    const type = searchParams.get("type") || "";
    const per_page = searchParams.get("per_page") || "";
    const page = searchParams.get("page") || "";

    const response = await axios.get(`https://genius.com/api/search/${type}`, {
      params: {
        q: decodeURIComponent(q),
        per_page,
        page,
      },
    });

    return NextResponse.json({
      result: response.data,
      status: response.status,
    });
  } catch (e: any) {
    console.error("AXIOS ERROR:", e?.response?.data || e);
    return NextResponse.json({ error: "Server error: " + e.response.data }, { status: 500 });
  }
}
