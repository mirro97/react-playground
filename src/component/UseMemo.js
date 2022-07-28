import { useMemo, useState } from "react";

import "../assets/css/use-memo.css";

const calculateApple = (number) => {
  console.log("🍎");
  return number + 1;
};

const calculateBanana = (number) => {
  console.log("🍌");
  return number + 1;
};

export default function UseMemo() {
  // 값이 바뀔 때 마다 컴포넌트가 다시 렌더링 되며 값이 초기화 된다.
  // 하나의 값을 변경해도 같이 선언된 다른 함수도 재호출되기 떄문에
  // 비효율적으로 함수를 호출하게 된다.
  const [apple, setApple] = useState(1);
  const [banana, setBanana] = useState(1);

  // const addApple = calculateApple(apple);
  const addApple = useMemo(() => {
    return calculateApple(apple);
  }, [apple]);

  const addBanana = calculateBanana(banana);

  return (
    <>
      <div className="input-wrap">
        <span>🍎</span>
        <input
          type="number"
          value={apple}
          onChange={(e) => setApple(parseInt(e.target.value))}
        />
        <span> + 1 = {addApple}</span>
      </div>
      <div className="input-wrap">
        <span>🍌</span>
        <input
          type="number"
          value={banana}
          onChange={(e) => setBanana(parseInt(e.target.value))}
        />
        <span> + 1 = {addBanana}</span>
      </div>
    </>
  );
}
