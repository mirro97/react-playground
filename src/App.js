import "./App.css";
import "./assets/css/list-n-key.css";

import {} from "react-router";

import { Routes, Route } from "react-router-dom";

import NavBar from "./component/NavBar";
import Basic from "./pages/Basic";
import Hooks from "./pages/Hooks";

function App() {
  return (
    <div className="App">
      <h1> 🙆🏻‍♀️ 코드와 비교해가며 테스트 해보세요</h1>
      <NavBar />

      <Routes>
        <Route path="/" element={<Basic />} />
        <Route path="/Hooks" element={<Hooks />} />
      </Routes>
    </div>
  );
}

export default App;
