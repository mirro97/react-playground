import { useState, useRef, useEffect } from "react";

export default function UseRef2() {
  let [count, setCount] = useState(1);

  let [renderCountUseState, setRenderCountUseState] = useState(1);

  let renderCount = useRef(1);

  //   렌더링 횟수를 state 로 계산하는 경우
  //   useEffect(() => {
  //     setRenderCountUseState(++renderCountUseState);
  //     console.log("현재 컴포넌트가 렌더링 된 횟수: ", renderCountUseState);
  //   });

  //   렌더링 횟수를 Ref 로 계산하는 경우
  useEffect(() => {
    renderCount.current = ++renderCount.current;
    console.log("현재 컴포넌트가 렌더링 된 횟수: ", renderCount.current);
  });

  return (
    <>
      <div>
        <span>Count: {count}</span>

        <div className="btn-wrap">
          <button
            onClick={() => {
              setCount(++count);
            }}
          >
            Count UP
          </button>
        </div>
      </div>
      <div className="description">
        <span>
          렌더링 된 횟수를 State 로 계산하게 된다면 무한 루프에 빠지게 된다.
        </span>
        <span>
          렌더링 이후 state로 선언한 count를 증가시키면서 다시 렌더링이
          발생하고, 그에 대한 렌더링이 또 발생하기 때문이다.
        </span>
        <span>
          Ref는 re-rendering 을 발생시키지 않기 때문에 이런 무한루프를 해결할 수
          있다.
        </span>
      </div>
    </>
  );
}
