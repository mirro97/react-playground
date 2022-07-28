import "./App.css";

import Page from "./pages/Page";

import { useState } from "react";

import { ThemeContext } from "./context/ThemeContext";
import { UserContext } from "./context/UserContext";

function App() {
  const [dark, setDark] = useState(false);
  const [userData, setUserData] = useState("");

  return (
    <div className={dark ? "dark-theme App" : "App"}>
      <UserContext.Provider value={{ userData, setUserData }}>
        {/* 
         <ThemeContext.Provider> 로 감싸준 모든 하위 컴포넌트들은 value 로 넣어준 dark 와 setDark에 접근할 수 있게 된다! 
         */}
        <ThemeContext.Provider value={{ dark, setDark }}>
          <Page />
        </ThemeContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
