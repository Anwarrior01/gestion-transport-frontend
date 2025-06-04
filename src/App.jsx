import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Clients from "./pages/Clients"; // نبدأو بيه
import React from "react"
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Navigate to="/dashboard/clients" replace />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="clients" element={<Clients />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
