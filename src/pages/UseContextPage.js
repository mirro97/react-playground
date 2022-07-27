import UseContext from "../component/UseContext";
import UseContext2 from "../component/UseContext2";

export default function UseContext_Page() {
  return (
    <div>
      <div className="example-section">
        <span className="alert-msg">
          해당 예제의 useContext 전역설정은 /src/context/ThemeContext.js 에
          선언되었습니다.
        </span>
        <span className="alert-msg">
          useContext 실습을 위한 최상단 컴포넌트는 App.js 파일을 확인해주세요.
        </span>
        <h2>useContext (1)</h2>

        <UseContext />
      </div>

      <div className="example-section">
        <span className="alert-msg">
          해당 예제의 useContext 전역설정은 /src/context/UserContext.js 에
          선언되었습니다.
        </span>

        <h2>useContext (2)</h2>

        <UseContext2 />
      </div>
    </div>
  );
}
