import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
import Form from "./scenes/form";
import FAQ from "./scenes/faq";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import League from "./scenes/leagues";
import TestTable from "./scenes/bar";

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
                <Route path="/" element={<Dashboard />} />
                <Route path="/team" element={<Team />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/invoices" element={<Invoices />} />
                <Route path="/form" element={<Form />} />
                <Route path="/bar" element={<TestTable />} />
                {/* <Route path="/pie" element={<Pie />} /> */}
                {/* <Route path="/line" element={<Line />} /> */}
                <Route path="/faq" element={<FAQ />} />
                {/* <Route path="/calendar" element={<Calendar />} /> */}
                {/* <Route path="/geography" element={<Geography />} /> */}
                <Route path="/leagues" element={<League />} />
              </Routes>
            </main>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
  );
}

export default App;
