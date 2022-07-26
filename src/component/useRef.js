import { useState, useRef } from "react";

import "../assets/css/use-effect.css";

export default function UseRef() {
  let [count, setCount] = useState(0);
  let countRef = useRef(0);

  const increaseCount = () => {
    setCount(++count);
    console.log("🌝 state: ", count);
  };

  const increaseRef = () => {
    countRef.current = ++countRef.current;
    console.log("🌚  ref: ", countRef.current);
  };

  return (
    <>
      <div className="description">
        REF UP 버튼만 눌렀을때는 화면상의 ref의 값은 변하지 않는다. <br />
        하지만 STATE UP 버튼을 눌러 해당 컴포넌트를 업데이트 하게되면 ref 값도
        재렌더링 되어 값이 나타나게 된다.
      </div>
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
