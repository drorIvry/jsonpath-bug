import jsonpath from "jsonpath";
import { NextResponse, type NextRequest } from "next/server";

// export const runtime = "edge";

export function GET(req: NextRequest) {
  console.log(">>>>>>>>", "hereeeeee");
  const argValue = jsonpath.query(
    {
      a: {
        b: "value",
      },
    },
    "a.b",
  );
  return NextResponse.json({ success: true });
}
