import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// context
import { UserContex } from "./UserContext";
import logo from "./logo.svg";
import "./App.css";
import Dashboard from "./routes/dashboard/Dashboard";

function App() {
  const [value, setValue] = useState(true);
  return (
    <UserContex.Provider value={{ value, setValue }}>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" exact element={<Dashboard />} />
          </Routes>
        </div>
      </Router>
    </UserContex.Provider>
  );
}

export default App;
