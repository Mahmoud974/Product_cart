import { NextResponse } from "next/server";
import { desserts } from "../db/data";

export const GET = async () => {
  try {
    const response = NextResponse.json(desserts, { status: 200 });
    response.headers.set("Access-Control-Allow-Origin", "*");
    response.headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    return response;
  } catch (err) {
    console.error(err);

    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  }
};
