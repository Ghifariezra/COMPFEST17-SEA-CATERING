import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/prisma";

export async function POST(req: NextRequest, context: { params: { id: string } }) {
  const { id } = context.params;
  const { pauseUntil } = await req.json();

  // Pastikan kolom status dan paused_until ada di tabel subscriptions
  const updated = await prisma.subscriptions.update({
    where: { id: Number(id) },
    data: {
      status: "paused",
      paused_until: pauseUntil ? new Date(pauseUntil) : null, // Perbaikan di sini
    },
    include: { meal_plan: true },
  });

  return NextResponse.json({ success: true, subscription: updated });
}