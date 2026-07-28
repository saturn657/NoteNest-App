import NoteCard from "./NoteCard";

const notes = [
  {
    id: 1,
    title: "React Fundamentals",
    description: "Components, Props and JSX."
  },
  {
    id: 2,
    title: "DSA Arrays",
    description: "Sliding Window and Prefix Sum."
  },
  {
    id: 3,
    title: "Operating System",
    description: "CPU Scheduling Algorithms."
  },
  {
    id: 4,
    title: "DBMS",
    description: "Normalization and Transactions."
  }
];

function NotesGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {notes.map((note) => (
        <NoteCard
          key={note.id}
          title={note.title}
          description={note.description}
        />
      ))}
    </div>
  );
}

export default NotesGrid;