import { NotebookPen } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-slate-900 py-14">

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row">

        <div className="flex items-center gap-3">

          <NotebookPen className="text-indigo-400"/>

          <h2 className="text-xl font-bold text-white">

            NoteNest

          </h2>

        </div>

        <p className="text-slate-400">

          © 2026 NoteNest. Built with React & Node.js

        </p>

      </div>

    </footer>
  );
}

export default Footer;