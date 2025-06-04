import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import {
  FiUsers,
  FiFileText,
  FiMap,
  FiTruck,
  FiDroplet,
  FiTool,
  FiBarChart2,
  FiDollarSign,
  FiFolder,
  FiUser,
} from "react-icons/fi";

const user = JSON.parse(localStorage.getItem("user")) || { name: "User", role: "Manager" };

const navItems = [
  { label: "Rapports", icon: <FiBarChart2 /> },
  { label: "Bénéfices", icon: <FiDollarSign /> },
  { label: "Documents", icon: <FiFolder /> },
  { label: "Compte", icon: <FiUser /> },
];

const sidebarItems = [
  { label: "Clients", icon: <FiUsers />, path: "/dashboard/clients" },
  { label: "Factures", icon: <FiFileText />, path: "/dashboard/factures" },
  { label: "Missions", icon: <FiMap />, path: "/dashboard/missions" },
  { label: "Véhicules", icon: <FiTruck />, path: "/dashboard/vehicules" },
  { label: "Carburant", icon: <FiDroplet />, path: "/dashboard/carburant" },
  { label: "Réparations", icon: <FiTool />, path: "/dashboard/reparations" },
];

const Dashboard = () => {
  const location = useLocation();

  return (
    <div
      className="min-h-screen flex text-white font-[Cairo]"
      style={{
        backgroundImage: "url('/src/assets/bg1.png')",
        backgroundBlendMode: "luminosity",
        backgroundColor: "#0a0a1f",
      }}
    >
      {/* Sidebar */}
      <aside className="hidden md:flex flex-col w-60 border-r border-slate-700 p-4 space-y-4 backdrop-blur-md">
        {sidebarItems.map((item) => {
          const active = location.pathname.startsWith(item.path);
          return (
            <div
              key={item.label}
              className={`flex items-center gap-3 px-3 py-2 rounded transition-all duration-200 cursor-pointer
                ${active ? "text-white shadow-[0_0_20px_#6a5acd] border-b-2 border-gradient" : "text-gray-300 hover:text-white"}
              `}
              style={{
                borderBottom: active
                  ? "3px solid"
                  : "none",
                borderImage: active
                  ? "linear-gradient(90deg, #6a5acd, #8e44ad, #6dd5fa) 1"
                  : "none",
              }}
            >
              {item.icon}
              <span>{item.label}</span>
            </div>
          );
        })}
      </aside>

      {/* Content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <nav className="flex items-center justify-between px-6 py-4 border-b border-slate-800 backdrop-blur-md">
          <h2 className="text-lg font-semibold tracking-wide">
            Bonjour, {user.role} <span className="text-violet-400">{user.name}</span>
          </h2>

          <div className="flex items-center gap-6">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-2 px-3 py-1 border-[2px] rounded transition-all text-sm cursor-pointer text-gray-300 hover:text-white focus-within:text-white"
                tabIndex={0}
                style={{
                  borderImage: "linear-gradient(135deg, #6a5acd, #8e44ad, #6dd5fa) 1",
                  boxShadow: "0 0 10px rgba(138,43,226,0.3)",
                }}
                onFocus={(e) => (e.currentTarget.style.boxShadow = "0 0 20px rgba(138,43,226,0.8)")}
                onBlur={(e) => (e.currentTarget.style.boxShadow = "0 0 10px rgba(138,43,226,0.3)")}
              >
                {item.icon}
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </nav>

        {/* Page content */}
        <main className="flex-1 p-4 md:p-6 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
