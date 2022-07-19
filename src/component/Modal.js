import { useState } from "react";
import "../assets/css/modal.css";

export function ModalSection() {
  let [modal, setModal] = useState(false);

  return (
    <div className="modal-section">
      <span>모달을 열까요?</span>
      <button
        onClick={() => {
          setModal(!modal);
        }}
      >
        클릭
      </button>
      {modal === true && <Modal />}
    </div>
  );
}

function Modal() {
  return <div className="modal">이것은 모달입니다.</div>;
}
