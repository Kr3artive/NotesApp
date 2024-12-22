import { useForm } from "react-hook-form";
import { useUser } from "../contexts/UserDetails";

const WelcomePage = () => {
  const { name, setName, email, setEmail, occupation, setOccupation } =
    useUser();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setName(data.name);
    setEmail(data.email);
    setOccupation(data.occupation);
    alert("Form submitted successfully!");
  };

  return (
    <div className="flex p-2 justify-center items-center min-h-screen bg-gradient-to-r from-blue-100 to-blue-300">
      <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-black mb-6">
          Please Input Your Details
        </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-black font-medium">
              Name
            </label>
            <input
              type="text"
              defaultValue={name}
              {...register("name", {
                required: "Name cannot be empty.",
                minLength: {
                  value: 3,
                  message: "Name must be at least 3 characters long.",
                },
              })}
              placeholder="Enter your name"
              className={`w-full px-4 py-2 border ${
                errors.name ? "border-red-500" : "border-black"
              } rounded-lg focus:outline-none focus:ring-2 ${
                errors.name ? "focus:ring-red-500" : "focus:ring-blue-500"
              }`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium">
              Email
            </label>
            <input
              type="email"
              defaultValue={email}
              {...register("email", {
                required: "Email cannot be empty.",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address.",
                },
              })}
              placeholder="Enter your email"
              className={`w-full px-4 py-2 border ${
                errors.email ? "border-red-500" : "border-black"
              } rounded-lg focus:outline-none focus:ring-2 ${
                errors.email ? "focus:ring-red-500" : "focus:ring-blue-500"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="occupation"
              className="block text-black font-medium"
            >
              Occupation
            </label>
            <input
              type="text"
              defaultValue={occupation}
              {...register("occupation", {
                required: "Occupation cannot be empty.",
              })}
              placeholder="Enter your occupation"
              className={`w-full px-4 py-2 border ${
                errors.occupation ? "border-red-500" : "border-black"
              } rounded-lg focus:outline-none focus:ring-2 ${
                errors.occupation ? "focus:ring-red-500" : "focus:ring-blue-500"
              }`}
            />
            {errors.occupation && (
              <p className="text-red-500 text-sm mt-1">
                {errors.occupation.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-all duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default WelcomePage;
