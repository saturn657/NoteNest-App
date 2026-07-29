import { useState } from "react";
import Sidebar from "../components/dashboard/Sidebar";
import Topbar from "../components/dashboard/Topbar";
import WelcomeBanner from "../components/dashboard/WelcomeBanner";
import DashboardStats from "../components/dashboard/DashboardStats";
import NotesGrid from "../components/dashboard/NotesGrid";
import AddNoteModal from "../components/dashboard/AddNoteModal";

function Dashboard() {

  const [openModal,setOpenModal]=useState(false);

  return (
    <div className="flex min-h-screen bg-slate-100">

      <Sidebar />

      <div className="flex-1">

        <Topbar onAddNote={()=>setOpenModal(true)} />

        <main className="p-8">

          <WelcomeBanner />

          <DashboardStats />

          <NotesGrid />

        </main>

      </div>

      <AddNoteModal
        open={openModal}
        onClose={()=>setOpenModal(false)}
      />

    </div>
  );
}

export default Dashboard;