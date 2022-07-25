import { useState, useEffect } from "react";

import "../assets/css/use-effect.css";
export default function UseEffect() {
  let [count, setCount] = useState(0);
  let [text, setText] = useState("");

  const countUpdate = () => {
    setCount(++count);
  };

  const inputText = (e) => {
    setText(e.target.value);
  };

  // 렌더링 될 때 마다 매번 실행(마운트)
  useEffect(() => {
    console.log("🍎 렌더링 - deps 없음");
  });

  // 화면에 처음 렌더링 될 때 실행(마운트) / count 값이 업데이트 될 때 마다 실행
  // text 업데이트 무시!
  useEffect(() => {
    console.log("🍐 렌더링 - deps: count");
  }, [count]);

  // 화면에 처음 렌더링 될 때 실행(마운트) / text 값이 업데이트 될 때 마다 실행
  // count 업데이트 무시!
  useEffect(() => {
    console.log("🍌 렌더링 - deps: text");
  }, [text]);

  // 처음 화면에 렌더링 될 때만 실행
  useEffect(() => {
    console.log("🍆 렌더링 - deps: [] 빈 배열");
  }, []);

  return (
    <>
      <div className="wrap">
        <span>count: {count}</span>
        <button onClick={countUpdate}>UPDATE</button>
      </div>
      <div className="wrap">
        <input type="text" onChange={inputText} />
        <span>작성한 값: {text}</span>
      </div>
    </>
  );
}
