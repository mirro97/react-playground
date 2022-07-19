import { useState } from "react";
import "../assets/css/lift-state.css";

// 상위 컴포넌트
function LiftingState() {
  let [todo, setTodo] = useState([]);

  const addTodo = (newTodo) => {
    setTodo([...todo, newTodo]);
  };

  return (
    <div className="lifting-state">
      <NewMessageForm buttonClick={addTodo} />
      <ul>
        {todo.map((item, index) => (
          <SingleTodo key={index} content={item} />
        ))}
      </ul>
    </div>
  );
}

// 하위 컴포넌트
function NewMessageForm({ buttonClick }) {
  let [message, setMessage] = useState("");

  const inputTodo = (e) => {
    setMessage(e.target.value);
  };

  const todoRegist = () => {
    buttonClick(message);
  };

  return (
    <div className="input-container">
      <input onChange={inputTodo} />
      <button onClick={todoRegist}>등록하기</button>
    </div>
  );
}

function SingleTodo(props) {
  return <li>{props.content}</li>;
}

// function LiftingState() {
//   let [userA, setUserA] = useState(0);

//   let handleMoney = (event) => {
//     let data = event.target.value;
//     setUserA(data);
//   };

//   return (
//     <div>
//       <h2>환전하기</h2>
//       <input onChange={handleMoney} /> (만원)
//       <br />
//       <MoneyInput type="dollor" money={userA} />
//       <br />
//       <MoneyInput type="euro" money={userA} />
//     </div>
//   );
// }

// function toDollar(won) {
//   return won * 0.76;
// }

// function toEuro(won) {
//   return won * 0.75;
// }

// function MoneyInput(props) {
//   let result = "";
//   if (props.type === "dollor")
//     return (result = <span>{toDollar(props.money)} (달러)</span>);
//   else if (props.type === "euro");
//   return (result = <span>{toEuro(props.money)} (유로)</span>);
// }

export { LiftingState };
