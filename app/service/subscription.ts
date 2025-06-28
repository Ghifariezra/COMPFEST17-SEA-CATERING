import prisma from "@/prisma/prisma";

export interface CreateSubscriptionInput {
    full_name: string;
    phone: string;
    address: string;
    plan_id: string;
    meal_types: string[];
    delivery_days_id: string;
    custom_days: string[];
    allergies?: string;
    total_price: number;
    user_id: number;
}

export async function createSubscription(data: CreateSubscriptionInput) {
    return prisma.subscriptions.create({
        data: {
            full_name: data.full_name,
            phone: data.phone,
            address: data.address,
            plan_id: data.plan_id,
            meal_types: data.meal_types,
            delivery_days_id: data.delivery_days_id,
            custom_days: data.custom_days,
            allergies: data.allergies?.trim() || null,
            total_price: data.total_price,
            user_id: data.user_id,
            status: "active",
        },
    });
}
