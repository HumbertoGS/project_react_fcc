// Notice from where NextResponse is imported:
import { NextResponse } from "next/server";

import { methodGet, methodPost } from "./controller";

export async function GET(req) {
  try {
    const response = await methodGet();
    return NextResponse.json({ ...response, error: false });
  } catch (err) {
    return NextResponse.json(
      { message: err, error: true, datos: null },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  try {
    const response = await methodPost(req);
    return NextResponse.json({ ...response, error: false });
  } catch (err) {
    return NextResponse.json(
      { message: err, error: true, datos: null },
      { status: 500 }
    );
  }
}
