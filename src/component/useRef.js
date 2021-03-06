import { useState, useRef } from "react";

import "../assets/css/use-effect.css";

export default function UseRef() {
  let [count, setCount] = useState(0);
  let countRef = useRef(0);

  const increaseCount = () => {
    setCount(++count);
    console.log("π state: ", count);
  };

  const increaseRef = () => {
    countRef.current = ++countRef.current;
    console.log("π  ref: ", countRef.current);
  };

  return (
    <>
      <div className="description">
        REF UP λ²νΌλ§ λλ μλλ νλ©΄μμ refμ κ°μ λ³νμ§ μλλ€. <br />
        νμ§λ§ STATE UP λ²νΌμ λλ¬ ν΄λΉ μ»΄ν¬λνΈλ₯Ό μλ°μ΄νΈ νκ²λλ©΄ ref κ°λ
        μ¬λ λλ§ λμ΄ κ°μ΄ λνλκ² λλ€.
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
            Refλ κ°μ΄ λ³κ²½λμ΄λ re-render λμ§ μκ³ , re-render λμ΄λ ref κ°μ
            μ μ§λλ€.
          </span>
          <span>
            &#123; current: value &#125; μ ννλ‘ μ μ₯λκ³ , μΈμ λ  μμ 
            κ°λ₯νλ€!
          </span>
        </div>
      </div>
    </>
  );
}
