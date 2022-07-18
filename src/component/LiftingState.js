import { useState } from "react";

function LiftingState() {
  let [userA, setUserA] = useState(0);

  let handleMoney = (event) => {
    let data = event.target.value;
    setUserA(data);
  };

  return (
    <div>
      <h2>환전하기</h2>
      <input onChange={handleMoney} /> (만원)
      <br />
      <MoneyInput type="dollor" money={userA} />
      <br />
      <MoneyInput type="euro" money={userA} />
    </div>
  );
}

function toDollar(won) {
  return won * 0.76;
}

function toEuro(won) {
  return won * 0.75;
}

function MoneyInput(props) {
  let result = "";
  if (props.type === "dollor")
    return (result = <span>{toDollar(props.money)} (달러)</span>);
  else if (props.type === "euro");
  return (result = <span>{toEuro(props.money)} (유로)</span>);
}

export { LiftingState };
