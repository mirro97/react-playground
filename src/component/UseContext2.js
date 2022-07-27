import "../assets/css/use-context.css";

import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function UseContext2() {
  const { userData, setUserData } = useContext(UserContext);

  const Login = () => {
    setUserData("NYCHicken");
  };

  const Logout = () => {
    setUserData("");
  };

  return (
    <div>
      <div className="description context-example">
        {userData === "" ? "로그인해주세요" : <HelloUser userData={userData} />}{" "}
      </div>
      <div className="btn-wrap">
        <button onClick={Login}>LOGIN</button>
        <button onClick={Logout}>LOGOUT</button>
      </div>
    </div>
  );
}

function HelloUser(props) {
  return <>{props.userData}님 반갑습니다!</>;
}
