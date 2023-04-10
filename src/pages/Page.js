import "../assets/css/list-n-key.css";

import { Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

import NavBar from "../component/NavBar";
import Basic from "../pages/Basic";
import UseEffectUseRefPage from "./UseEffectUseRefPage";
import UseContextPage from "./UseContextPage";
import UseMemoPage from "./UseMemoPage";
import Debounce from "./Debounce";

function Page() {
  const { dark } = useContext(ThemeContext);

  return (
    <div className="container">
      <h1 className={dark ? "dark-theme" : ""}>
        🙆🏻‍♀️ 코드와 비교해가며 테스트 해보세요
      </h1>
      <NavBar />

      <Routes>
        <Route path="/react-playground-result/" element={<Basic />} />
        <Route
          path="/react-playground-result/Hooks/useEffectNuseRef"
          element={<UseEffectUseRefPage />}
        />
        <Route
          path="/react-playground-result/Hooks/useContext"
          element={<UseContextPage />}
        />

        <Route
          path="/react-playground-result/Hooks/useMemo"
          element={<UseMemoPage />}
        />

        <Route
          path="/react-playground-result/Hard/debounce"
          element={<Debounce />}
        />
      </Routes>
    </div>
  );
}

export default Page;
