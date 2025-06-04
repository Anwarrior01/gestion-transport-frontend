// components/Sidebar.jsx
import React from "react";
import { FiUsers, FiFileText, FiTruck, FiSettings, FiBarChart2 } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const links = [
  { to: "/dashboard/clients", icon: <FiUsers />, label: "Clients" },
  { to: "/dashboard/factures", icon: <FiFileText />, label: "Factures" },
  { to: "/dashboard/missions", icon: <FiTruck />, label: "Missions" },
  { to: "/dashboard/stats", icon: <FiBarChart2 />, label: "Rapports" },
  { to: "/dashboard/settings", icon: <FiSettings />, label: "Paramètres" },
];

const Sidebar = () => {
  return (
    <aside className="w-[230px] bg-[#0b0b24] border-r-[3px]" style={{
      borderImage: "linear-gradient(135deg, #6a5acd, #8e44ad, #6dd5fa) 1"
    }}>
      <div className="p-4 text-xl font-bold border-b" style={{
        borderImage: "linear-gradient(135deg, #6a5acd, #8e44ad, #6dd5fa) 1", borderBottomWidth: "3px"
      }}>
        Tanani Trans
      </div>
      <nav className="flex flex-col">
        {links.map((link) => (
          <NavLink
            to={link.to}
            key={link.to}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 text-sm font-medium transition-all ${
                isActive
                  ? "text-white bg-[#1a1a3c] shadow-[0_0_10px_rgba(106,90,205,0.7)]"
                  : "text-gray-300 hover:text-white hover:bg-[#111130]"
              }`
            }
          >
            {link.icon}
            {link.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
