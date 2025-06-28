import { useEffect, useState } from "react";
import ActiveSubscriptions from "./ActiveSubscriptions";
import PauseSubscriptionModal from "./PauseSubscriptionModal";
import CancelSubscriptionModal from "./CancelSubscriptionModal";
import type { Subscription } from "./types";

export default function UserDashboard() {
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);
  const [selectedSub, setSelectedSub] = useState<Subscription | null>(null);
  const [showPause, setShowPause] = useState(false);
  const [showCancel, setShowCancel] = useState(false);

  useEffect(() => {
    fetch("/api/my-subscriptions")
      .then((res) => res.json())
      .then((data) => setSubscriptions(data.subscriptions));
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl sm:text-4xl font-extrabold mb-8 text-gray-900 tracking-tight">
        My Subscriptions
      </h1>
      <div className="bg-white rounded-xl shadow-lg p-4 sm:p-8 transition-all">
        <ActiveSubscriptions
          subscriptions={subscriptions}
          onPause={(sub) => {
            setSelectedSub(sub);
            setShowPause(true);
          }}
          onCancel={(sub) => {
            setSelectedSub(sub);
            setShowCancel(true);
          }}
        />
      </div>
      {showPause && selectedSub && (
        <PauseSubscriptionModal
          subscription={selectedSub}
          onClose={() => setShowPause(false)}
          onPaused={(updated) => {
            setSubscriptions((subs) =>
              subs.map((s) => (s.id === updated.id ? updated : s))
            );
            setShowPause(false);
          }}
        />
      )}
      {showCancel && selectedSub && (
        <CancelSubscriptionModal
          subscription={selectedSub}
          onClose={() => setShowCancel(false)}
          onCancelled={(id) => {
            setSubscriptions((subs) =>
              subs.map((s) =>
                s.id === id ? { ...s, status: "cancelled" } : s
              )
            );
            setShowCancel(false);
          }}
        />
      )}
    </div>
  );
}
