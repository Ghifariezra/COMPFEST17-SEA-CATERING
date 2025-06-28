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
    // Fetch user's subscriptions from API
    fetch("/api/my-subscriptions")
      .then((res) => res.json())
      .then((data) => setSubscriptions(data.subscriptions));
  }, []);

  return (
    <div className="max-w-3xl mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">My Subscriptions</h1>
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
      {showPause && selectedSub && (
        <PauseSubscriptionModal
          subscription={selectedSub}
          onClose={() => setShowPause(false)}
          onPaused={(updated) => {
            setSubscriptions((subs) => subs.map((s) => (s.id === updated.id ? updated : s)));
            setShowPause(false);
          }}
        />
      )}
      {showCancel && selectedSub && (
        <CancelSubscriptionModal
          subscription={selectedSub}
          onClose={() => setShowCancel(false)}
          onCancelled={(id) => {
            setSubscriptions((subs) => subs.map((s) => (s.id === id ? { ...s, status: "cancelled" } : s)));
            setShowCancel(false);
          }}
        />
      )}
    </div>
  );
}
