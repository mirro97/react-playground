import { useMemo, useState } from "react";

import "../assets/css/use-memo.css";

const calculateApple = (number) => {
  console.log("π");
  return number + 1;
};

const calculateBanana = (number) => {
  console.log("π");
  return number + 1;
};

export default function UseMemo() {
  // κ°μ΄ λ°λ λ λ§λ€ μ»΄ν¬λνΈκ° λ€μ λ λλ§ λλ©° κ°μ΄ μ΄κΈ°ν λλ€.
  // νλμ κ°μ λ³κ²½ν΄λ κ°μ΄ μ μΈλ λ€λ₯Έ ν¨μλ μ¬νΈμΆλκΈ° λλ¬Έμ
  // λΉν¨μ¨μ μΌλ‘ ν¨μλ₯Ό νΈμΆνκ² λλ€.
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
        <span>π</span>
        <input
          type="number"
          value={apple}
          onChange={(e) => setApple(parseInt(e.target.value))}
        />
        <span> + 1 = {addApple}</span>
      </div>
      <div className="input-wrap">
        <span>π</span>
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
