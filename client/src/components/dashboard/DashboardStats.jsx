import { NotebookPen, Star, Archive } from "lucide-react";

const stats = [
  {
    icon: NotebookPen,
    title: "Total Notes",
    value: "24"
  },
  {
    icon: Star,
    title: "Favorites",
    value: "8"
  },
  {
    icon: Archive,
    title: "Archived",
    value: "3"
  }
];

function DashboardStats() {

  return (

    <div className="mb-8 grid gap-6 md:grid-cols-3">

      {stats.map((item,index)=>{

        const Icon=item.icon;

        return(

          <div
            key={index}
            className="rounded-3xl bg-white p-6 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
          >

            <div className="flex items-center justify-between">

              <div>

                <p className="text-slate-500">

                  {item.title}

                </p>

                <h2 className="mt-2 text-4xl font-bold">

                  {item.value}

                </h2>

              </div>

              <div className="rounded-2xl bg-indigo-100 p-4">

                <Icon className="text-indigo-600"/>

              </div>

            </div>

          </div>

        );

      })}

    </div>

  );

}

export default DashboardStats;