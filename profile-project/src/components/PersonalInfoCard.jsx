import Row from "./Row";

export default function PersonalInfoCard({ info }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-4 shadow-xl">
      <h2 className="mb-4 text-xl text-white font-bold">
        Personal Information
      </h2>

      <div className="flex flex-col gap-3">
        {Object.keys(info).map((label) => (
          <Row key={label} label={label} value={info[label]} />
        ))}
      </div>
    </div>
  );
}
