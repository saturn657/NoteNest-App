import NoteCard from "./NoteCard";

function NotesGrid({ notes }) {
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
