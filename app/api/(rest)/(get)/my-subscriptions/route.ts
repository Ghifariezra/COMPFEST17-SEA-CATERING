import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { jwtVerify } from "jose";
import prisma from "@/prisma/prisma";

const secret = new TextEncoder().encode(process.env.JWT_SECRET);

export async function GET(req: NextRequest) {
  try {
    const cookieStore = cookies();
    const token = (await cookieStore).get("token")?.value;

    if (!token) {
      return NextResponse.json({ success: false, error: "Unauthorized. No token found." }, { status: 401 });
    }

    const { payload } = await jwtVerify(token, secret);
    const user_id = Number(payload.id);
    if (!user_id || isNaN(user_id)) {
      return NextResponse.json({ success: false, error: "Invalid token payload." }, { status: 400 });
    }

    const user = await prisma.users.findUnique({ where: { id: user_id } });
    if (!user) {
      return NextResponse.json({ success: false, error: "User not found." }, { status: 404 });
    }

    const subscriptions = await prisma.subscriptions.findMany({
      where: { user_id },
      include: { meal_plan: true },
      orderBy: { submitted_at: "desc" },
    });

    // Mapping ke camelCase agar cocok dengan tipe Subscription di frontend
    const mapped = subscriptions.map(sub => ({
      id: sub.id,
      planName: sub.meal_plan?.name || "",
      mealTypes: sub.meal_types ?? [],
      deliveryDays: sub.delivery_days_id || "",
      totalPrice: sub.total_price ?? 0,
      status: sub.status || "",
    }));

    return NextResponse.json({ success: true, subscriptions: mapped });
  } catch (error) {
    console.error("Error fetching subscriptions:", error);
    return NextResponse.json({ success: false, error: "Internal server error" }, { status: 500 });
  }
}