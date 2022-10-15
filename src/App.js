import "./App.css";
import React, { useState } from "react";

import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import About from "./components/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const [colorTheme, setcolorTheme] = useState("primary");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#2c3136";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Dark mode has been disabled", "success");
    }
  };

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          mode={mode}
          toggleMode={toggleMode}
          setColorTheme={setcolorTheme}
          colorTheme={colorTheme}
        />
        <Alert alert={alert} />
        <Routes>
          <Route
            exact
            path="/first-app"
            element={
              <TextForm
                mode={mode}
                showAlert={showAlert}
                colorTheme={colorTheme}
              />
            }
          />
          <Route exact path="/first-app/about" element={<About />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
