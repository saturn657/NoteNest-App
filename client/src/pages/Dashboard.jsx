import Sidebar from "../components/dashboard/Sidebar";
import Topbar from "../components/dashboard/Topbar";
import WelcomeBanner from "../components/dashboard/WelcomeBanner";
import DashboardStats from "../components/dashboard/DashboardStats";
import NotesGrid from "../components/dashboard/NotesGrid";

function Dashboard() {
  return (
    <div className="flex min-h-screen bg-slate-100">
      <Sidebar />

      <div className="flex-1">
        <Topbar />

        <main className="p-8">
          <WelcomeBanner />
          <DashboardStats />
          <NotesGrid />
        </main>
      </div>
    </div>
  );
}

export default Dashboard;