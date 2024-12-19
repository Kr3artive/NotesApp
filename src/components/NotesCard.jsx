import { useContext } from "react";
import { NotesContext } from "../contexts/NotesContext";

const NotesCard = () => {
    const { notes, deleteNote } = useContext(NotesContext);

    return (
        <div className="bg-gray-100 p-4">
            <h1 className="text-3xl font-bold text-center text-blue-500 mb-6">All Notes</h1>
            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {notes.length > 0 ? (
                    notes.map((note) => (
                        <div
                            key={note.id}
                            className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-200"
                        >
                            <h2 className="text-xl font-semibold text-gray-800 mb-2">{note.title}</h2>
                            <p className="text-gray-600 mb-4">{note.content}</p>
                            <button
                                onClick={() => deleteNote(note.id)}
                                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-all duration-200"
                            >
                                Delete
                            </button>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-black col-span-full">
                        No notes available.
                    </p>
                )}
            </div>
        </div>
    );
};

export default NotesCard;
