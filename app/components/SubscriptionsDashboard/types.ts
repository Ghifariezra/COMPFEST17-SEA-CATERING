export interface Subscription {
    id: string;
    planName: string;
    mealTypes: string[];
    deliveryDays: string;
    totalPrice: number;
    status: "active" | "paused" | "cancelled";
    startDate: string;
    endDate?: string;
    pausedUntil?: string;
  }