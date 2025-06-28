import prisma from "../../prisma/prisma";

export async function getAdminMetrics(start: string, end: string) {
    // New Subscriptions
    const newSubscriptions = await prisma.subscriptions.count({
        where: { submitted_at: { gte: new Date(start), lte: new Date(end) } },
    });

    // Monthly Recurring Revenue (MRR)
    const mrrAgg = await prisma.subscriptions.aggregate({
        _sum: { total_price: true },
        where: { status: "active", submitted_at: { gte: new Date(start), lte: new Date(end) } },
    });

    // Reactivations (contoh: status aktif, dan submitted_at dalam range)
    // Jika ingin lebih akurat, tambahkan field updated_at di schema
    const reactivations = await prisma.subscriptions.count({
        where: {
            status: "active",
            submitted_at: { gte: new Date(start), lte: new Date(end) },
            // Tambahkan logic lain jika ada field pendukung
        },
    });

    // Subscription Growth (total aktif sampai end date)
    const subscriptionGrowth = await prisma.subscriptions.count({
        where: { status: "active", submitted_at: { lte: new Date(end) } },
    });

    return {
        newSubscriptions,
        mrr: mrrAgg._sum?.total_price ?? 0,
        reactivations,
        subscriptionGrowth,
    };
}