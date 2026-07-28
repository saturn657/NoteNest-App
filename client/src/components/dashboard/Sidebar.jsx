import {
  NotebookPen,
  Star,
  Archive,
  Trash2,
  Settings,
  LogOut
} from "lucide-react";

function Sidebar() {
  const menu = [
    { icon: NotebookPen, title: "All Notes", active: true },
    { icon: Star, title: "Favorites" },
    { icon: Archive, title: "Archived" },
    { icon: Trash2, title: "Trash" },
    { icon: Settings, title: "Settings" },
  ];

  return (
    <aside className="flex h-screen w-72 flex-col border-r border-slate-200 bg-white">

      <div className="border-b border-slate-200 p-6">

        <h1 className="text-3xl font-extrabold text-indigo-600">
          NoteNest
        </h1>

        <p className="mt-1 text-sm text-slate-500">
          Organize your ideas
        </p>

      </div>

      <nav className="flex-1 p-4">

        {menu.map((item,index)=>{

          const Icon=item.icon;

          return(

            <button
              key={index}
              className={`mb-2 flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left transition ${
                item.active
                  ? "bg-indigo-600 text-white"
                  : "text-slate-600 hover:bg-slate-100"
              }`}
            >

              <Icon size={20}/>

              {item.title}

            </button>

          );

        })}

      </nav>

      <div className="border-t border-slate-200 p-4">

        <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-red-500 transition hover:bg-red-50">

          <LogOut size={20}/>

          Logout

        </button>

      </div>

    </aside>
  );
}

export default Sidebar;