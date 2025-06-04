import React from "react";

const Header = ({ user }) => {
  return (
    <header className="w-full py-4 px-6 border-b border-[#1f1f3a] shadow-md shadow-purple-900/30 bg-[#121230]">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Tableau de bord</h2>
        <div className="text-sm text-gray-300">
          Connecté en tant que <span className="font-bold text-white">{user.role}</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
