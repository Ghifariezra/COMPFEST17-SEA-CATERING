import { NextResponse } from "next/server";
import prisma from "@/prisma/prisma";

export async function GET() {
    try {
        const mealPlans = await prisma.meal_plans.findMany();
        return NextResponse.json({ success: true, data: mealPlans });
    } catch (error) {
        return NextResponse.json({ success: false, error: String(error) }, { status: 500 });
    }
}