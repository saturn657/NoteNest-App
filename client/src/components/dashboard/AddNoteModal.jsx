import { X } from "lucide-react";
import Input from "../ui/Input";
import Button from "../ui/Button";

function AddNoteModal({ open, onClose }) {

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">

      <div className="w-full max-w-xl rounded-3xl bg-white p-8 shadow-2xl">

        <div className="mb-6 flex items-center justify-between">

          <h2 className="text-2xl font-bold">
            Create New Note
          </h2>

          <button
            onClick={onClose}
            className="rounded-lg p-2 hover:bg-slate-100"
          >
            <X size={22}/>
          </button>

        </div>

        <Input
          label="Title"
          placeholder="Enter note title"
        />

        <div className="mb-6">

          <label className="mb-2 block font-medium">
            Description
          </label>

          <textarea
            rows="7"
            placeholder="Write your note..."
            className="w-full rounded-xl border border-slate-300 p-4 outline-none focus:border-indigo-500"
          />

        </div>

        <div className="flex justify-end gap-3">

          <button
            onClick={onClose}
            className="rounded-xl border border-slate-300 px-5 py-3 hover:bg-slate-100"
          >
            Cancel
          </button>

          <Button>

            Save Note

          </Button>

        </div>

      </div>

    </div>
  );
}

export default AddNoteModal;