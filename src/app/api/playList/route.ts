import { NextResponse } from "next/server";
import { playList } from "@/mock";

export async function GET(request: Request) {
  const url = new URL(request.url);

  const params = url.searchParams;

  const type = params.get("type");

  if (type === "all") {
    return NextResponse.json(playList, { status: 400 });
  }

  const data = playList.filter((item) => item.type === type);

  return NextResponse.json({ data });
}
