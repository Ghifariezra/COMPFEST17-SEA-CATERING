import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/prisma";

export async function POST(req: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;

  // Pastikan kolom status ada di tabel subscriptions
  await prisma.subscriptions.update({
    where: { id: Number(id) },
    data: { status: "cancelled" },
  });

  return NextResponse.json({ success: true, id });
}