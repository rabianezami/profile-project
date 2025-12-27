export default function TopHeader({ name, username, avatarImage }) {
  return (
    <header className="rounded-[20px] border border-white/10 bg-gradient-to-b from-slate-800 to-slate-900 p-10">
      <div className="flex items-center gap-9">
        <div className="w-[150px] h-[150px] rounded-full p-1.5 bg-[#5b5cff] flex items-center justify-center">
          <div className="w-full h-full rounded-full bg-white overflow-hidden">
            <img
              src={avatarImage}
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div>
          <h1 className="text-[56px] font-black leading-tight text-white max-[900px]:text-[26px]">
            {name}
          </h1>
          <p className="mt-2 text-[22px] font-bold text-[#5b5cff]">
            {username}
          </p>

          <div className="mt-4 flex gap-4">
            <button className="px-6 py-3 rounded-full bg-[#5b5cff] text-white font-extrabold">
              Edit Profile
            </button>
            <button className="px-6 py-3 rounded-full bg-indigo-100 text-indigo-600 font-extrabold">
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
