import { useEffect, useRef } from "react";

export default function UseRefDom() {
  const inputRef = useRef(); // 초기값은 빈값을 준다 -> 어짜피 input 으로 채워줄 값임

  useEffect(() => {
    inputRef.current.focus(); // 화면이 렌더링 되고 input 에 focus 주기
  }, []);

  const login = () => {
    if (inputRef.current.value === "") alert("😎 아이디를 입력해주세요");
    else alert(`${inputRef.current.value} 님 반갑습니다!`);
    inputRef.current.focus(); // 로그인 완료 후 다시 input 에 focus 주기
  };

  return (
    <div className="input-wrap">
      <input type="text" ref={inputRef} placeholder="아이디를 입력하세요" />
      <button onClick={login}>Login</button>
    </div>
  );
}
