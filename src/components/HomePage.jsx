import NotesCard from "./NotesCard";
import { Link } from "react-router-dom";
import { useName } from "../contexts/NameContext";

const HomePage = () => {
  const { name } = useName();

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-blue-600 mb-2">Notes App</h1>
        <h2 className="text-xl text-black">Welcome, {name}!</h2>
      </div>
      <div className="mb-8">
        <NotesCard />
      </div>
      <div className="flex justify-center">
        <Link
          to="/addnote"
          className="bg-blue-500 text-white py-2 px-6 rounded-lg shadow-md hover:bg-blue-600 transition-all duration-200"
        >
          Add Notes
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
