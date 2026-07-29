import { useState } from "react";
import Sidebar from "../components/dashboard/Sidebar";
import Topbar from "../components/dashboard/Topbar";
import WelcomeBanner from "../components/dashboard/WelcomeBanner";
import DashboardStats from "../components/dashboard/DashboardStats";
import NotesGrid from "../components/dashboard/NotesGrid";
import AddNoteModal from "../components/dashboard/AddNoteModal";

function Dashboard() {
  const [openModal, setOpenModal] = useState(false);
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: "React Fundamentals",
      description: "Components, Props and JSX.",
    },
    {
      id: 2,
      title: "DSA Arrays",
      description: "Sliding Window and Prefix Sum.",
    },
    {
      id: 3,
      title: "Operating System",
      description: "CPU Scheduling Algorithms.",
    },
    {
      id: 4,
      title: "DBMS",
      description: "Normalization and Transactions.",
    },
  ]);

  return (
    <div className="flex min-h-screen bg-slate-100">
      <Sidebar />

      <div className="flex-1">
        <Topbar onAddNote={() => setOpenModal(true)} />

        <main className="p-8">
          <WelcomeBanner />

          <DashboardStats />

          <NotesGrid notes={notes} />
        </main>
      </div>

      <AddNoteModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        setNotes={setNotes}
      />
    </div>
  );
}

export default Dashboard;
