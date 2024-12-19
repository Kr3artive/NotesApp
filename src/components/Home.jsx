import { Link } from "react-router-dom";
import { useName } from "../contexts/NameContext";

const Home = () => {
  const { name, setName } = useName();

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-100 to-blue-200">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-black mb-6">
          Please Enter Your Name
        </h1>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black mb-6"
        />
        <Link
          to="/welcome"
          className="block w-full bg-blue-500 text-white text-center py-2 px-4 rounded-lg hover:bg-blue-600 transition-all duration-200"
        >
          Continue
        </Link>
      </div>
    </div>
  );
};

export default Home;
