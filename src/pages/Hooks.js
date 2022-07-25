import UseEffect from "../component/UseEffect";
import UseEffectWithCleanUp from "../component/UseEffectWithCleanUp";

export default function Hooks() {
  return (
    <div>
      <h2>useEffect</h2>
      <UseEffect />

      <h2>Clean Up</h2>
      <UseEffectWithCleanUp />
    </div>
  );
}
