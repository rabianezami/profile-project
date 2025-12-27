export default function StatCard({ title, bigValue, footerText, icon }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-4 shadow-xl">
      <div className="flex items-center justify-between">
        <p className="text-xs tracking-widest text-slate-400">{title}</p>
        {icon && <span>{icon}</span>}
      </div>

      {bigValue && (
        <div className="mt-3 text-[40px] font-black text-indigo-400">
          {bigValue}
        </div>
      )}

      <p className="mt-2 text-sm text-slate-400">{footerText}</p>
    </div>
  );
}
