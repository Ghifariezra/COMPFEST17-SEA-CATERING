import { NextResponse } from "next/server";
import prisma from "@/prisma/prisma";

export async function GET() {
    try {
        const testimonials = await prisma.testimonials.findMany({
            orderBy: { created_at: "desc" },
            include: {
                users: {
                    select: {
                        id: true,
                        full_name: true,
                        email: true,
                    },
                },
            },
        });

        // Optional: mapping agar field lebih clean di frontend
        const mapped = testimonials.map((t) => ({
            id: t.id,
            name: t.name,
            from: t.from,
            feedback: t.feedback,
            status: t.status,
            rate: t.rate,
            createdAt: t.created_at,
            user: t.users
                ? {
                    id: t.users.id,
                    fullName: t.users.full_name,
                    email: t.users.email,
                }
                : null,
        }));

        return NextResponse.json({ success: true, data: mapped });
    } catch (error) {
        console.error("Error fetching testimonials:", error);
        return NextResponse.json({ success: false, error: "Internal server error" }, { status: 500 });
    }
}