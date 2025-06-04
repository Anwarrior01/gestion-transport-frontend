/* eslint-disable no-unused-vars */
import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FiUser, FiLock } from "react-icons/fi";
import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [capsLockOn, setCapsLockOn] = useState(false);
  const navigate = useNavigate();


 const handleSubmit = async (e) => {
  e.preventDefault();
  const usernameRegex = /^[A-Za-z]+$/;

  if (!username || !password) {
    setError("Nom d'utilisateur et mot de passe sont obligatoires.");
    return;
  }
  if (!usernameRegex.test(username)) {
    setError("Le nom d'utilisateur doit contenir uniquement des lettres.");
    return;
  }

  try {
    const response = await axios.post("http://localhost:8000/api/login", {
      username,
      password,
    });

    const { token, user } = response.data;

    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));

    // ✅ توجيه المستخدم بعد تسجيل الدخول
    console.log("Login successful", user);
    navigate("/dashboard");

  } catch (err) {
    setError("Nom d'utilisateur ou mot de passe incorrect.");
  }
};


  const handleCapsLock = (e) => {
    setCapsLockOn(e.getModifierState && e.getModifierState("CapsLock"));
  };

  const handleClearErrors = () => {
    if (error) setError("");
  };

  return (
    <div
      className="relative h-screen w-full bg-cover bg-center bg-no-repeat px-4 sm:px-8 font-[Cairo] text-white"
      style={{
        backgroundImage: "url('/src/assets/bg1.png')",
        backgroundBlendMode: "luminosity",
        backgroundColor: "#0a0a1f",
      }}
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 animate-[floatStars_40s_linear_infinite] bg-[radial-gradient(circle,#ff4d4d_1px,transparent_1px),radial-gradient(circle,#6a5acd_1px,transparent_1px),radial-gradient(circle,#00bfff_1px,transparent_1px),radial-gradient(circle,#ff69b4_1px,transparent_1px)] bg-[size:30px_30px] opacity-70 mix-blend-screen" />
        <style>{`
          @keyframes floatStars {
            0% { background-position: 0 0, 0 0, 0 0, 0 0; }
            100% { background-position: 500px 500px, 600px 600px, 700px 700px, 800px 800px; }
          }
        `}</style>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 mx-auto flex h-full max-w-md flex-col items-center justify-center"
      >
        <img src="/src/assets/logo-big.png" alt="Logo" className="mb-4 h-auto object-contain" />

        <form
          onSubmit={handleSubmit}
          className="w-full border-[3px] p-8 backdrop-blur-md transition-all duration-300 shadow-[0_0_25px_rgba(138,43,226,0.6)] hover:shadow-[0_0_35px_rgba(138,43,226,0.9)]"
          style={{
            borderImage: "linear-gradient(135deg, #6a5acd, #8e44ad, #6dd5fa) 1",
          }}
        >
          <div className="flex justify-center items-center gap-2 mb-4">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
              <defs>
                <linearGradient id="lockGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#6a5acd" />
                  <stop offset="50%" stopColor="#8e44ad" />
                  <stop offset="100%" stopColor="#6dd5fa" />
                </linearGradient>
              </defs>
              <path
                d="M17 10H7V7C7 4.8 8.8 3 11 3s4 1.8 4 4v3ZM5 10c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-8c0-1.1-.9-2-2-2H5Z"
                stroke="url(#lockGradient)"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <h2 className="text-3xl font-bold text-white tracking-wide">Connexion</h2>
          </div>

          {error && (
            <p className="mb-4 rounded-md border-l-4 border-red-500 bg-red-900/40 px-4 py-2 text-sm text-red-300 shadow-[0_0_14px_rgba(255,0,0,0.6)]">
              {error}
            </p>
          )}

          <div className="mb-5">
            <label htmlFor="username" className="mb-2 block text-sm font-medium text-gray-300">
              Nom d’utilisateur
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <FiUser />
              </span>
              <input
                id="username"
                type="text"
                autoComplete="off"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                  handleClearErrors();
                }}
                className="w-full border-[2px] bg-[#1a1a2e] px-10 py-2 text-white transition-all duration-300 placeholder:text-gray-400 focus:outline-none focus:ring-2"
                style={{
                  borderImage: "linear-gradient(135deg, #6a5acd, #8e44ad, #6dd5fa) 1",
                  boxShadow: "0 0 14px rgba(106, 90, 205, 0.5)",
                }}
                placeholder="Nom d’utilisateur"
                onFocus={(e) => (e.target.style.boxShadow = "0 0 24px rgba(106, 90, 205, 1)")}
                onBlur={(e) => (e.target.style.boxShadow = "0 0 14px rgba(106, 90, 205, 0.5)")}
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
                autoComplete="off"
                value={password}
                onKeyUp={handleCapsLock}
                onChange={(e) => {
                  setPassword(e.target.value);
                  handleClearErrors();
                }}
                className="w-full border-[2px] bg-[#1a1a2e] px-10 py-2 text-white transition-all duration-300 placeholder:text-gray-400 focus:outline-none focus:ring-2"
                style={{
                  borderImage: "linear-gradient(135deg, #6a5acd, #8e44ad, #6dd5fa) 1",
                  boxShadow: "0 0 14px rgba(106, 90, 205, 0.5)",
                }}
                placeholder="Mot de passe"
                onFocus={(e) => {
                  handleCapsLock(e);
                  e.target.style.boxShadow = "0 0 24px rgba(106, 90, 205, 1)";
                }}
                onBlur={(e) => (e.target.style.boxShadow = "0 0 14px rgba(106, 90, 205, 0.5)")}
              />
            </div>
            {capsLockOn && (
              <p className="mt-2 text-xs text-red-300 drop-shadow-[0_0_10px_rgba(255,0,0,0.6)]">
                Le verrouillage des majuscules est activé.
              </p>
            )}
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.96 }}
            type="submit"
            className="w-full border-[2px] px-6 py-2 font-semibold transition-all duration-300"
            style={{
              borderImage: "linear-gradient(135deg, #6a5acd, #8e44ad, #6dd5fa) 1",
              color: "#b28dff",
              borderRadius: "0px",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#6a5acd";
              e.currentTarget.style.color = "#ffffff";
              e.currentTarget.style.boxShadow = "0 0 20px rgba(106, 90, 205, 0.6)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = "#b28dff";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            Se connecter
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default Login;
