import { useState } from "react";
import type { Subscription } from "./types";

interface Props {
  subscription: Subscription;
  onClose: () => void;
  onPaused: (updated: Subscription) => void;
}

export default function PauseSubscriptionModal({ subscription, onClose, onPaused }: Props) {
  const [pauseUntil, setPauseUntil] = useState("");

  const handlePause = async () => {
    // Call API to pause
    const res = await fetch(`/api/pause-subscription/${subscription.id}`, {
      method: "POST",
      body: JSON.stringify({ pauseUntil }),
      headers: { "Content-Type": "application/json" },
    });
    const updated = await res.json();
    onPaused(updated.subscription);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Pause Subscription</h2>
        <label className="block mb-2">Pause until date:</label>
        <input type="date" value={pauseUntil} onChange={(e) => setPauseUntil(e.target.value)} className="border px-2 py-1 rounded w-full mb-4" />
        <div className="flex justify-end gap-2">
          <button onClick={onClose} className="px-4 py-2 cursor-pointer">
            Cancel
          </button>
          <button onClick={handlePause} className="bg-yellow-500 text-white px-4 py-2 rounded cursor-pointer" disabled={!pauseUntil}>
            Pause
          </button>
        </div>
      </div>
    </div>
  );
}
