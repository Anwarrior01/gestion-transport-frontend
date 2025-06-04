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
  FiSun,
  FiMoon,
} from "react-icons/fi";
import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const user = JSON.parse(localStorage.getItem("user")) || { name: "User", role: "Manager" };

const navItems = [
  { label: "Rapports", icon: <FiBarChart2 />, color: "#6dd5fa" },
  { label: "Bénéfices", icon: <FiDollarSign />, color: "#b28dff" },
  { label: "Documents", icon: <FiFolder />, color: "#8e44ad" },
  { label: "Compte", icon: <FiUser />, color: "#ff69b4" },
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
  const [darkMode, setDarkMode] = useState(true);

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
      <aside
        className="hidden md:flex flex-col w-60 border-r-[3px] backdrop-blur-md"
        style={{
          borderImage: "linear-gradient(135deg, #6a5acd, #8e44ad, #6dd5fa) 1",
        }}
      >
        <div className="p-4 text-xl font-bold border-b-[3px]" style={{
          borderImage: "linear-gradient(135deg, #6a5acd, #8e44ad, #6dd5fa) 1"
        }}>
          Tanani Trans
        </div>
        <nav className="flex flex-col divide-y divide-[#8e44ad40]">
          {sidebarItems.map((item) => {
            const active = location.pathname.startsWith(item.path);
            return (
              <div
                key={item.label}
                className={`flex items-center gap-3 px-4 py-3 text-sm font-medium transition-all cursor-pointer
                  ${active ? "text-white shadow-[0_0_10px_rgba(106,90,205,0.7)] bg-[#1a1a3c]" : "text-gray-300 hover:text-white hover:bg-[#111130]"}
                `}
              >
                <span className="text-base text-[#6dd5fa]">{item.icon}</span>
                {item.label}
              </div>
            );
          })}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <nav className="flex items-center justify-between px-4 sm:px-6 py-3 border-b-[3px] backdrop-blur-md bg-[#0a0a1f]/80 relative"
          style={{ borderImage: "linear-gradient(135deg, #6a5acd, #8e44ad, #6dd5fa) 1" }}>
          <h2 className="text-base sm:text-xl font-semibold tracking-wide">
            Bonjour <span className="text-violet-400 font-bold">{user.role} {user.name}</span>
          </h2>

          <div className="hidden md:flex items-center gap-2 sm:gap-4">
            {navItems.map((item) => (
              <motion.div
                key={item.label}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-3 py-1 cursor-pointer transition-all border-[2px]"
                style={{
                  borderImage: "linear-gradient(135deg, #6a5acd, #8e44ad, #6dd5fa) 1",
                  borderRadius: "6px",
                  color: item.color,
                }}
              >
                <span className="text-white">{item.icon}</span>
                <span className="text-white text-sm">{item.label}</span>
              </motion.div>
            ))}

            {/* Theme Switcher */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="text-white text-lg p-2 rounded-full hover:scale-110 transition"
            >
              {darkMode ? <FiMoon className="text-yellow-300" /> : <FiSun className="text-blue-300" />}
            </button>
          </div>

          {/* Mobile Menu Placeholder */}
          <div className="md:hidden">
            <button className="text-white p-2 rounded-md border-[2px]"
              style={{ borderImage: "linear-gradient(135deg, #6a5acd, #8e44ad, #6dd5fa) 1" }}>
              ☰
            </button>
          </div>
        </nav>

        {/* Page Content */}
        <main className="flex-1 p-4 md:p-6 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
