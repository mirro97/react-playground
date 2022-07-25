import UseEffect from "../component/UseEffect";
import UseEffectWithCleanUp from "../component/UseEffectWithCleanUp";
import UseRef from "../component/UseRef";

export default function Hooks() {
  return (
    <div>
      <div className="example-section">
        <h2>useEffect</h2>
        <UseEffect />
      </div>

      <div className="example-section">
        <h2>useEffect - Clean Up</h2>
        <UseEffectWithCleanUp />
      </div>

      <div className="example-section">
        <h2>useRef</h2>
        <UseRef />
      </div>
    </div>
  );
}
