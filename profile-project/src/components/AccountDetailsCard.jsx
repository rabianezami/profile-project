import Row from "./Row";

export default function AccountDetailsCard({details}) {
    <div className="rounded-xl border border=white/10 bg-white/5 p-4">
        <h2 className="mb-4 text-xl text-white font-bold">
            Account Details
        </h2>

        <div className="flex flex-col gap-3">
            <Row label={Role} value={details.Role} />
            <Row 
              label="Status"
              value={
                <span className="inline-block px-3 py-1 rounded-full bg-green-500/20 border border-green-500/40 text-green-400 font-extrabold">
                    {details.Status}
                </span>
              }
            />
            <Row 
            label="Verification"
            value={
                <span className="text-purple-400 font-black">
                   ✔ Verified
                </span>
              }
            />
        </div>
    </div>
}