import { useState } from "react";

function IfRendering() {
  let [name, setName] = useState("Apple");
  const count = "";

  let current = "";

  return (
    <div>
      <span>인사하세요!</span>
      {name === "Apple" ? (current = <HiApple />) : (current = <HiSomeone />)}
      {count && <h1>Messages: {count}</h1>}
    </div>
  );
}

function ButtonStyle() {
  let list = [];
  const style = {
    padding: "10px 20px",
    backgroundColor: "orange",
  };

  return (
    <div>
      {/* 카멜 케이스(camel-case) */}
      <button style={{ backgroundColor: "red" }}>RED</button>

      {/* 따옴표를 포함한 문자열 */}
      <button style={{ "background-color": "yellow" }}>YELLOW</button>

      {/* 대괄호 표기법 (현재 list 의 길이는 0 이므로 배경색은 파랑) */}
      <button style={{ backgroundColor: list.length === 0 ? "blue" : "black" }}>
        BLUE / BLACK
      </button>

      <button style={style}>버튼</button>
    </div>
  );
}

// function IfRendering() {
//   let [name, setName] = useState("Apple");

//   let current = "";

//   if (name === "Apple") {
//     current = <HiApple />;
//   } else {
//     current = <HiSomeone />;
//   }

//   return (
//     <div>
//       <span>인사하세요!</span>
//       {current}
//     </div>
// }
//   );

function HiApple() {
  return <div>사과님 안녕하세요</div>;
}

function HiSomeone() {
  return <div>익명님 안녕하세요</div>;
}

export { IfRendering, ButtonStyle };
