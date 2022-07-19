import { useState } from "react";
import "./assets/css/if-rendering.css";
function IfRendering() {
  let [name] = useState("Apple");
  const count = "12";

  let current = "";

  return (
    <div className="if-rendering">
      <span>인사하세요!</span>
      {name === "Apple" ? (current = <HiApple />) : (current = <HiSomeone />)}
      {count && <h3>Messages: {count}</h3>}
    </div>
  );
}

function ButtonStyle() {
  let list = [];
  const style = {
    padding: "10px 20px",
    backgroundColor: "#fcc419",
  };

  return (
    <div className="if-rendering">
      {/* 카멜 케이스(camel-case) */}
      <button style={{ backgroundColor: "#ff6b6b" }}>RED</button>

      {/* 따옴표를 포함한 문자열 */}
      <button style={{ "background-color": "#ffec99" }}>YELLOW</button>

      {/* 대괄호 표기법 (현재 list 의 길이는 0 이므로 배경색은 파랑) */}
      <button
        style={{ backgroundColor: list.length === 0 ? "#228be6" : "black" }}
      >
        BLUE / BLACK
      </button>

      <button style={style}>버튼</button>
    </div>
  );
}

function HiApple() {
  return <div>사과님 안녕하세요</div>;
}

function HiSomeone() {
  return <div>익명님 안녕하세요</div>;
}

export { IfRendering, ButtonStyle };
