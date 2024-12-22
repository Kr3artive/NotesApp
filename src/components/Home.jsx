import { Link } from "react-router-dom";
import { useName } from "../contexts/NameContext";
import { useState } from "react";

const Home = () => {
  const { name, setName } = useName();
  const [error, setError] = useState("");

  const validateName = (value) => {
    if (value.trim().length === 0) {
      setError("Name cannot be empty.");
      return false;
    }
    if (value.length < 3) {
      setError("Name must be at least 3 characters long.");
      return false;
    }
    setError("");
    return true;
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setName(value);
    validateName(value);
  };

  return (
    <div className="flex p-2 justify-center items-center min-h-screen bg-gradient-to-r from-blue-100 to-blue-200">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-black mb-6">
          Please Enter Your Name
        </h1>
        <input
          type="text"
          value={name}
          onChange={handleChange}
          placeholder="Your name"
          className={`w-full px-4 py-2 border ${
            error ? "border-red-500" : "border-gray-300"
          } rounded-lg focus:outline-none focus:ring-2 ${
            error ? "focus:ring-red-500" : "focus:ring-black"
          } mb-2`}
        />
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <Link
          to="/welcome"
          className={`block w-full bg-blue-500 text-white text-center py-2 px-4 rounded-lg transition-all duration-200 ${
            error || name.trim().length === 0
              ? "opacity-50 pointer-events-none"
              : "hover:bg-blue-600"
          }`}
        >
          Continue
        </Link>
      </div>
    </div>
  );
};

export default Home;
