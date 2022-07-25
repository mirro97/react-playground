import { useState, useRef } from "react";

import "../assets/css/use-effect.css";

export default function UseRef() {
  let [count, setCount] = useState(0);
  let countRef = useRef(0);

  const increaseCount = () => {
    console.log("뭔가 하는중 - state" + count);
    setCount(++count);
  };

  const increaseRef = () => {
    console.log("뭔가 하는중 - ref");
    countRef.current = countRef.current + 1;
  };

  return (
    <>
      <div className="wrap">
        <span>state: {count}</span>
        <button onClick={increaseCount}>STATE UP</button>
      </div>

      <div className="wrap">
        <span>ref: {countRef.current}</span>
        <button onClick={increaseRef}>REF UP</button>

        <div className="description">
          <span>
            Ref는 값이 변경되어도 re-render 되지 않고, re-render 되어도 ref 값은
            유지된다.
          </span>
          <span>
            &#123; current: value &#125; 의 형태로 저장되고, 언제든 수정
            가능하다!
          </span>
        </div>
      </div>
    </>
  );
}
