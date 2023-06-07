import Button from "@mui/material/Button";
import React from "react";
// import "./App.css";
import logo from "./logo.svg";
import PersistentDrawerLeft from "./sidebarold";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Branches from "./screens/Branches";
import Units from "./screens/Units";
import Societe from "./screens/Company";

import { useState } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Branch from "./screens/Branch";
import Signup from "./screens/signup";
import Login from "./screens/Login";
import Reset from "./screens/resetPassword";
import Admins from "./screens/Admins";
import Admin from "./screens/Admin";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/admins/:id" element={<Admin />} />
              <Route path="/admins" element={<Admins />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/reset" element={<Reset />} />
              <Route path="/company" element={<Societe />} />
              <Route path="/branches/:id" element={<Branch />} />
              <Route path="/branches" element={<Branches />} />
              <Route path="/units" element={<Units />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
