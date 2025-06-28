import MetricCard from "../../../components/Metric/MetricCard";
import { getAdminMetrics } from "../../../services/admin";
import { checkLoginAdmin } from "../../../utils/AuthAdmin";
import { redirect } from "next/navigation";

export default async function AdminDashboard(Props: { searchParams?: Promise<{ start?: string; end?: string }> }) {
  // Cek login dan role admin
  const user = await checkLoginAdmin();
  if (!user || user.role !== "admin") {
    redirect("/get-started");
  }

  const searchParams = await Props.searchParams;
  // Default: 30 hari terakhir
  const end = searchParams?.end || new Date().toISOString().slice(0, 10);
  const start = searchParams?.start || new Date(new Date().setDate(new Date().getDate() - 30)).toISOString().slice(0, 10);

  // SSR: ambil data metrik dari database
  const metrics = await getAdminMetrics(start, end);

  return (
    <section className="p-8">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <form className="flex gap-2 mb-6">
        <input type="date" name="start" defaultValue={start} className="border rounded px-2 py-1" />
        <span>-</span>
        <input type="date" name="end" defaultValue={end} className="border rounded px-2 py-1" />
        <button type="submit" className="bg-blue-600 text-white px-4 py-1 rounded">
          Filter
        </button>
      </form>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard title="New Subscriptions" value={metrics.newSubscriptions} />
        <MetricCard title="MRR" value={`Rp${metrics.mrr.toLocaleString()}`} />
        <MetricCard title="Reactivations" value={metrics.reactivations} />
        <MetricCard title="Subscription Growth" value={metrics.subscriptionGrowth} />
      </div>
    </section>
  );
}
