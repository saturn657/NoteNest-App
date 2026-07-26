import { NotebookPen } from "lucide-react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-lg">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        <div className="flex items-center gap-3">
          <NotebookPen className="h-8 w-8 text-indigo-600" />
          <h1 className="text-2xl font-bold text-slate-800">
            NoteNest
          </h1>
        </div>

        <nav className="hidden items-center gap-8 md:flex">

          <a href="#features" className="font-medium text-slate-600 hover:text-indigo-600">
            Features
          </a>

          <a href="#how-it-works" className="font-medium text-slate-600 hover:text-indigo-600">
            How It Works
          </a>

          <Link
            to="/login"
            className="font-medium text-slate-700 hover:text-indigo-600"
          >
            Login
          </Link>

          <Link
            to="/signup"
            className="rounded-xl bg-indigo-600 px-5 py-2 font-medium text-white transition hover:bg-indigo-700"
          >
            Get Started
          </Link>

        </nav>

      </div>
    </header>
  );
}

export default Navbar;