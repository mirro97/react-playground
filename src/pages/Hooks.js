import UseEffect from "../component/UseEffect";
import UseEffectWithCleanUp from "../component/UseEffectWithCleanUp";
import UseRef from "../component/UseRef";
import UseRef2 from "../component/UseRef2";
import UseRef3 from "../component/UseRef3";
import UseRefDom from "../component/UseRefDom";

export default function Hooks() {
  return (
    <div>
      <div className="example-section">
        <span className="alert-msg">콘솔을 같이 확인하세요</span>
        <span className="sub-title"> #변수 관리</span>
        <h2>useEffect</h2>

        <UseEffect />
      </div>

      <div className="example-section">
        <span className="alert-msg">콘솔을 같이 확인하세요</span>
        <h2>useEffect - Clean Up</h2>

        <UseEffectWithCleanUp />
      </div>

      <div className="example-section">
        <span className="alert-msg">콘솔을 같이 확인하세요</span>
        <span className="sub-title"> #변수 관리</span>
        <h2>useRef (1)</h2>
        <UseRef />
      </div>

      <div className="example-section">
        <span className="alert-msg">콘솔을 같이 확인하세요</span>
        <span className="sub-title"> #변수 관리</span>
        <h2>useRef (2)</h2>

        <UseRef2 />
      </div>

      <div className="example-section">
        <span className="alert-msg">콘솔을 같이 확인하세요</span>
        <span className="sub-title"> #변수 관리</span>
        <h2>useRef (3)</h2>

        <UseRef3 />
      </div>

      <div className="example-section">
        <span className="sub-title"> #dom 접근</span>
        <h2>useRef (4)</h2>

        <UseRefDom />
      </div>
    </div>
  );
}
