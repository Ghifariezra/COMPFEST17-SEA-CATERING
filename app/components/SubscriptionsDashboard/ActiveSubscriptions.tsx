import {
  PropsActive
} from "../../types/Subscriptions";

export default function ActiveSubscriptions({ subscriptions, onPause, onCancel }: PropsActive) {
  if (subscriptions.length === 0) return <p>No active subscriptions.</p>;

  return (
    <div className="space-y-4">
      {subscriptions.map((sub) => (
        <div key={sub.id} className="border rounded-lg p-4 flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <div className="font-bold">{sub.planName || "-"}</div>
            <div className="text-sm text-gray-600">
              Meal Types: {Array.isArray(sub.mealTypes) && sub.mealTypes.length > 0 ? sub.mealTypes.join(", ") : "-"}
              <br />
              Delivery: {sub.deliveryDays || "-"}
              <br />
              Total: Rp{sub.totalPrice?.toLocaleString("id-ID") ?? "0"}
              <br />
              Status: <span className={`font-semibold ${sub.status === "active" ? "text-green-600" : sub.status === "paused" ? "text-yellow-600" : "text-red-600"}`}>{sub.status || "-"}</span>
            </div>
          </div>
          {sub.status === "active" && (
            <div className="flex gap-2 mt-4 md:mt-0">
              <button className="bg-yellow-500 text-white px-4 py-2 rounded cursor-pointer" onClick={() => onPause(sub)}>
                Pause
              </button>
              <button className="bg-red-500 text-white px-4 py-2 rounded cursor-pointer" onClick={() => onCancel(sub)}>
                Cancel
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
