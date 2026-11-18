import NoteCard from "./NoteCard";

function NotesGrid({ notes, searchTerm }) {
  if (notes.length === 0) {
    const hasSearch = searchTerm.trim().length > 0;

    return (
      <div
        role="status"
        className="rounded-3xl border border-dashed border-slate-300 bg-white p-10 text-center"
      >
        <h2 className="text-xl font-semibold text-slate-800">
          {hasSearch ? "No notes found" : "No notes yet"}
        </h2>

        <p className="mt-2 text-slate-500">
          {hasSearch
            ? `No notes match "${searchTerm.trim()}". Try another keyword.`
            : "Create your first note to see it here."}
        </p>
      </div>
    );
  }

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
