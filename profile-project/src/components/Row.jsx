export default function Row({ label, value }) {
  return (
    <div className="flex justify-between gap-4 py-2 border-b border-white/10 last:border-none">
      <span className="text-sm text-slate-400">{label}</span>
      <span className="text-sm font-bold text-right">{value}</span>
    </div>
  );
}
