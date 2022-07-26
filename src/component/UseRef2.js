import { useState, useRef } from "react";

export default function UseRef2() {
  let [renderer, setRenderer] = useState(0);
  let countRef = useRef(0);
  let countState = 0; // 함수가 호출 될때 마다 countState 는 초기화 됨

  // 컴포넌트 재렌더링을 시켜주는 함수 -> 현재 컴포넌트에 선언된 변수의 값을 초기화 시켜주는 역할
  const doRendering = () => {
    setRenderer(++renderer);
  };

  const updateRef = () => {
    countRef.current = countRef.current + 1;
    console.log("Ref: ", countRef.current);
  };

  const updateState = () => {
    countState = countState + 1;
    console.log("State: ", countState);
  };

  const getResult = () => {
    console.log("📢 ref: ", countRef.current, ", state: ", countState);
  };

  return (
    <>
      <div>
        <span>state: {countState}</span>
        <span>ref: {countRef.current}</span>
      </div>
      <div className="btn-wrap">
        <button onClick={doRendering}>Render</button>
        <button onClick={updateRef}>Ref UP</button>
        <button onClick={updateState}>State UP</button>
        <button onClick={getResult}>Print Results</button>
      </div>

      <div className="description">
        <span>
          State 변수는 Render 클릭과 함께 컴포넌트 재렌더링이 되며 값이 초기화
          된다.
        </span>
        <span>
          반면, Ref 변수는 컴포넌트가 업데이트(재렌더링) 을 하더라도 값이 변하지
          않는다.
        </span>
        <span>
          Ref 는 컴포넌트의 모든 생의 주기를 함께하기 때문에 컴포넌트가 unmout
          될 때까지 값을 유지할 수 있다.
        </span>
      </div>
    </>
  );
}
