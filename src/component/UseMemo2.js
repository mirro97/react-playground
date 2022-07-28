import { useMemo, useState } from "react";

import "../assets/css/use-memo.css";

export default function UseMemo2() {
  const [orange, setOrange] = useState(0);
  const [taste, setTaste] = useState("");

  const onChangeHandler = (e) => {
    if (e.target.id === "orange") setOrange(e.target.value);
    else setTaste(e.target.value);
  };

  // useMemo 사용해보기!
  const getOrange = useMemo(() => {
    console.log("🍊");
    return <span>number of oranges: {orange}</span>;
  }, [orange]);

  const getTaste = useMemo(() => {
    console.log("💁🏻‍♀️");
    return <span>your taste: {taste}</span>;
  }, [taste]);

  return (
    <>
      <div className="input-wrap">
        <h3>🍊 HOW MANY ORANGES DO YOU HAVE?</h3>
        <input
          id="orange"
          type="number"
          value={orange}
          onChange={onChangeHandler}
        />
      </div>
      <div className="input-wrap">
        <h3>🍒 WHAT IS YUOR FAVORITE FRUIT? 🍒</h3>
        <input type="text" value={taste} onChange={onChangeHandler} />
      </div>

      <div className="description">
        {getOrange}
        {getTaste}
      </div>

      <div className="description">
        <span>
          orange 와 taste 중 하나만 변경하더라도 두 함수가 모두 실행된다.
        </span>
        <span>
          하지만 useMemo를 사용하면 의존성 배열에 넘겨준 값이 변경되었을 때만
          메모이제이션 된 값을 다시 계산한다.
        </span>
      </div>
    </>
  );
}
