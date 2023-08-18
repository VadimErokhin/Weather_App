import { useMemo, useState } from "react";
import "./App.css";
import Forecast from "./components/Forecast/Forecast";
import Sidebar from "./components/Sidebar/Sidebar";
import "swiper/css";

function App() {
  const [theme, setTheme] = useState("light");

  const themeClass = useMemo(() => {
    if (theme === "dark") {
      return "isDark";
    }
    return "";
  }, [theme]);

  return (
    <div className={`App ${themeClass}`}>
      <Sidebar currentTheme={theme} setTheme={setTheme} />
      <Forecast />
    </div>
  );
}

export default App;
