import { NextResponse } from "next/server";
import { playList } from "@/mock";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const url = new URL(request.url);

  const productId = params?.id;

  const data = playList.filter((item) => String(item.id) === productId)[0];

  return NextResponse.json(data);
}
