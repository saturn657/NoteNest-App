import { Clock3 } from "lucide-react";

function NoteCard({ title, description }) {
  return (
    <div className="group rounded-3xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

      <h2 className="text-xl font-bold text-slate-900">

        {title}

      </h2>

      <p className="mt-4 leading-7 text-slate-600">

        {description}

      </p>

      <div className="mt-6 flex items-center justify-between">

        <div className="flex items-center gap-2 text-sm text-slate-500">

          <Clock3 size={16}/>

          Today

        </div>

        <button className="rounded-lg bg-indigo-50 px-3 py-2 text-indigo-600 transition hover:bg-indigo-100">

          Open

        </button>

      </div>

    </div>
  );
}

export default NoteCard;