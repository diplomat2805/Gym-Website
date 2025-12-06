import { NavLink, Outlet } from "react-router-dom";
import { Dumbbell, Users, ClipboardList, MessageSquare, LogOut } from "lucide-react";
import { clearAdminToken } from "../../utils/adminAuth";

export default function AdminLayout() {

  const logout = () => {
    clearAdminToken();
    window.location.href = "/admin/login";
  };

  const navLinkStyle = ({ isActive }: any) =>
    `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition ${
      isActive
        ? "bg-[#FFD400] text-black shadow-md"
        : "text-gray-700 hover:bg-gray-100"
    }`;

  return (
    <div className="w-full min-h-screen flex bg-[#FAFAFA] text-black">

      {/* =================== LEFT SIDEBAR =================== */}
      <aside className="w-64 h-screen border-r border-gray-200 bg-white p-6 flex flex-col gap-8">

        {/* Logo + Title */}
        <div className="flex items-center gap-3">
          <div className="bg-[#FFD400] p-2 rounded-lg shadow-sm">
            <Dumbbell className="text-black w-7 h-7" />
          </div>
          <div>
            <h1 className="text-xl font-bold">FitCamp Admin</h1>
            <p className="text-xs text-gray-500">Gym Dashboard Center</p>
          </div>
        </div>

        {/* NAVIGATION */}
        <nav className="flex flex-col gap-1 flex-1">
          <NavLink to="/admin" end className={navLinkStyle}>
            <ClipboardList size={18}/> Dashboard
          </NavLink>

          <NavLink to="/admin/memberships" className={navLinkStyle}>
            <Users size={18}/> Membership Leads
          </NavLink>

          <NavLink to="/admin/messages" className={navLinkStyle}>
            <MessageSquare size={18}/> Contact Messages
          </NavLink>
        </nav>

        {/* Logout Button */}
        <button
          onClick={logout}
          className="flex items-center gap-2 text-sm text-gray-600 hover:text-red-500"
        >
          <LogOut size={16}/> Logout
        </button>

      </aside>


      {/* ================== MAIN PAGE CONTENT ================== */}
      <main className="flex-1 px-12 py-10 bg-[#F7F7F7]">

        <div className="max-w-6xl mx-auto">
          <Outlet />   {/* Pages appear here */}
        </div>

      </main>
    </div>
  );
}
