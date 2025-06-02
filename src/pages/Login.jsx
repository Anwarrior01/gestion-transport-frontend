
import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FiUser, FiLock } from "react-icons/fi";
import React from "react"
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <div className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-[#0a0a1f] via-[#0f0f2a] to-[#000000] text-white font-[Cairo]">
      {/* 🌌 Background stars & waves */}
      <div className="absolute inset-0 z-0 animate-pulse bg-[radial-gradient(circle,_#2a2a5a_1px,_transparent_1px)] bg-[size:30px_30px] opacity-30" />

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 mx-auto flex h-full max-w-md items-center justify-center"
      >
        <form
          onSubmit={handleSubmit}
          className="w-full rounded-2xl border-2 border-[#6a5acd] p-8 shadow-2xl backdrop-blur-md transition-all duration-300 hover:shadow-purple-700/50 dark:border-[#9b59b6] dark:bg-white/5"
        >
          <h2 className="mb-6 text-center text-2xl font-bold text-white">Connexion</h2>

          <div className="mb-4">
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-300">
              Adresse email
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <FiUser />
              </span>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-md bg-[#1a1a2e] px-10 py-2 text-white ring-1 ring-purple-700/30 transition-all duration-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Adresse email"
                required
              />
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="mb-2 block text-sm font-medium text-gray-300">
              Mot de passe
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <FiLock />
              </span>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-md bg-[#1a1a2e] px-10 py-2 text-white ring-1 ring-purple-700/30 transition-all duration-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Mot de passe"
                required
              />
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full rounded-full border border-purple-500 px-6 py-2 text-white transition-all duration-300 hover:bg-purple-700 hover:text-white focus:outline-none"
          >
            Se connecter
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default Login;
