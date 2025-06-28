type Props = { title: string; value: number | string };
export default function MetricCard({ title, value }: Props) {
  return (
    <div className="bg-white shadow rounded p-4 flex flex-col items-center">
      <div className="text-lg font-semibold">{title}</div>
      <div className="text-3xl font-bold my-2">{value}</div>
    </div>
  );
}
