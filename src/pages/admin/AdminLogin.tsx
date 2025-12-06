import { useState } from "react";
import axios from "axios";
import { saveAdminToken } from "../../utils/adminAuth";
import { useNavigate } from "react-router-dom";
import { Dumbbell } from "lucide-react";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/admin/login", {
        email,
        password,
      });
      // Handle successful login
      saveAdminToken(res.data.token);
      navigate("/admin");
    } catch {
      // Handle login error
      setError("Invalid email or password ❌");
    }
  };

  return (
    // Background is a clean, very light gray
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      
      {/* CARD: Small, centered, and clean. Used max-w-sm to avoid stretching the full width. */}
      <div className="bg-white shadow-2xl border border-gray-100 rounded-3xl p-8 sm:p-10 w-full max-w-sm">

        {/* BRAND HEADER: Centered logo and text */}
        <div className="flex flex-col items-center text-center mb-10">
          {/* Logo element with bright yellow background */}
          <div className="bg-[#FFD400] p-3 rounded-xl shadow-lg flex items-center justify-center">
            <Dumbbell className="w-8 h-8 text-black" />
          </div>
          {/* Header text */}
          <h1 className="text-3xl font-extrabold mt-4 text-gray-900 tracking-tight">
            Fit Camp Admin
          </h1>
          <p className="text-md text-gray-500 mt-1">Owner Access Panel</p>
        </div>

        {/* FORM: Spacing adjusted for a cleaner stack */}
        <form onSubmit={handleSubmit} className="space-y-6">

          {/* EMAIL FIELD */}
          <div>
            <label className="text-gray-800 text-sm font-semibold mb-2 block">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              // Clean input styling with yellow focus ring
              className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 outline-none transition duration-200 ease-in-out focus:shadow-md focus:border-[#FFD400] focus:ring-2 focus:ring-[#FFD400]/50"
              placeholder="Enter your administrative email"
            />
          </div>

          {/* PASSWORD FIELD */}
          <div>
            <label className="text-gray-800 text-sm font-semibold mb-2 block">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              // Clean input styling with yellow focus ring
              className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 outline-none transition duration-200 ease-in-out focus:shadow-md focus:border-[#FFD400] focus:ring-2 focus:ring-[#FFD400]/50"
              placeholder="Enter your password"
            />
          </div>

          {/* ERROR MESSAGE */}
          {error && (
            <div className="pt-2"> 
                <p className="text-red-600 text-sm font-medium text-center">{error}</p>
            </div>
          )}

          {/* LOGIN BUTTON: Bold yellow, full width of the card, with some top margin for separation */}
          <div className="pt-4"> 
            <button
              type="submit"
              className="w-full bg-[#FFD400] text-black font-extrabold py-3.5 rounded-xl text-lg uppercase tracking-wider hover:bg-[#E5C200] transition duration-300 ease-in-out shadow-lg shadow-yellow-300/60 transform hover:scale-[1.01]"
            >
              Login →
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}