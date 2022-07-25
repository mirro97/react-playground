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
      <NavBar />

      <Routes>
        <Route path="/" element={<Basic />} />
        <Route path="/Hooks" element={<Hooks />} />
      </Routes>
    </div>
  );
}

export default App;
