import { NextResponse } from "next/server";
import { desserts } from "../db/data";

export const GET = async () => {
  try {
    return NextResponse.json(desserts, { status: 200 });
  } catch (err) {
    console.error(err);

    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  }
};
