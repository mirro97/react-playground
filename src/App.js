import "./App.css";
import { useState } from "react";
import { IfRendering, ButtonStyle } from "./IfRendering";

function App() {
  let [modal, setModal] = useState(false);
  return (
    <div className="App">
      <span>모달을 열까요?</span>
      <button
        onClick={() => {
          setModal(!modal);
        }}
      >
        클릭
      </button>

      {modal === true && <Modal />}

      <IfRendering />
      <ButtonStyle />
    </div>
  );
}

function Modal() {
  return <div>이것은 모달입니다.</div>;
}

export default App;
