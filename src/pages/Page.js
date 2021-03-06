import "../assets/css/list-n-key.css";

import { Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

import NavBar from "../component/NavBar";
import Basic from "../pages/Basic";
import UseEffectUseRefPage from "./UseEffectUseRefPage";
import UseContextPage from "./UseContextPage";
import UseMemoPage from "./UseMemoPage";

function Page() {
  const { dark } = useContext(ThemeContext);

  return (
    <div className="container">
      <h1 className={dark ? "dark-theme" : ""}>
        ππ»ββοΈ μ½λμ λΉκ΅ν΄κ°λ©° νμ€νΈ ν΄λ³΄μΈμ
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
        >
          useMemo
        </Route>
      </Routes>
    </div>
  );
}

export default Page;
