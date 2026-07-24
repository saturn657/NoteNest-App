import { NotebookPen } from "lucide-react";
function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <div className="flex items-center gap-2">
            <NotebookPen className="h-7 w-7 text-indigo-600" />         
          <h1 className="text-2xl font-bold text-slate-800">
            NoteNest
          </h1>
        </div>

        <div className="flex gap-4">

          <button className="px-5 py-2 rounded-xl font-medium hover:bg-slate-100 transition">
            Login
          </button>

          <button className="px-5 py-2 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 transition">
            Sign Up
          </button>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;