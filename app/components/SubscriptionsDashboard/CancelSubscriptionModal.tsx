import {
  PropsCancel
} from "../../types/Subscriptions";

export default function CancelSubscriptionModal({ subscription, onClose, onCancelled }: PropsCancel) {
  const handleCancel = async () => {
    // Call API to cancel
    await fetch(`/api/cancel-subscription/${subscription.id}`, { method: "POST" });
    onCancelled(subscription.id);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Cancel Subscription</h2>
        <p>
          Are you sure you want to cancel <b>{subscription.planName}</b>?
        </p>
        <div className="flex justify-end gap-2 mt-4">
          <button onClick={onClose} className="px-4 py-2 cursor-pointer">
            Back
          </button>
          <button onClick={handleCancel} className="bg-red-500 text-white px-4 py-2 rounded cursor-pointer">
            Yes, Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
