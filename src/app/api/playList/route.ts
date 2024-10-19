import { NextResponse } from "next/server";
import { playList } from "@/mock";
import { playListItemType } from "@/types";

export async function GET(request: Request) {
  const url = new URL(request.url);

  const params = url.searchParams;

  const type = params.get("type");

  const searchValue = params.get("searchValue");

  let data: any = [];
  if (!searchValue) {
    if (type === "all") {
      return NextResponse.json(playList, { status: 200 });
    }
    data = playList.filter((item) => item.type === type);
  } else {
    data = playList.filter((item) => item.title.includes(searchValue));
  }

  return NextResponse.json({ data });
}
