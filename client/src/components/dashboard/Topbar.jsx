import {
  Search,
  Bell,
  Plus
} from "lucide-react";

function Topbar() {
  return (
    <header className="flex items-center justify-between border-b border-slate-200 bg-white px-8 py-5">

      <div className="relative w-105">

        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
        />

        <input
          type="text"
          placeholder="Search your notes..."
          className="w-full rounded-xl border border-slate-300 py-3 pl-11 pr-4 outline-none transition focus:border-indigo-500"
        />

      </div>

      <div className="flex items-center gap-5">

        <button className="flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 font-semibold text-white transition hover:bg-indigo-700">

          <Plus size={18}/>

          New Note

        </button>

        <button className="rounded-full bg-slate-100 p-3 transition hover:bg-slate-200">

          <Bell size={20}/>

        </button>

        <div className="flex items-center gap-3">

          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-indigo-600 font-bold text-white">

            M

          </div>

          <div>

            <h3 className="font-semibold">
              Mohit
            </h3>

            <p className="text-sm text-slate-500">
              Student
            </p>

          </div>

        </div>

      </div>

    </header>
  );
}

export default Topbar;