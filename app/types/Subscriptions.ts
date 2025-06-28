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

export interface PropsActive {
    subscriptions: Subscription[];
    onPause: (sub: Subscription) => void;
    onCancel: (sub: Subscription) => void;
}

export interface PropsCancel {
  subscription: Subscription;
  onClose: () => void;
  onCancelled: (id: string) => void;
}

export interface PropsPause {
  subscription: Subscription;
  onClose: () => void;
  onPaused: (updated: Subscription) => void;
}