import UseMemo from "../component/UseMemo";
import UseMemo2 from "../component/UseMemo2";

export default function UseMemoPage() {
  return (
    <div>
      <div className="example-section">
        <span className="alert-msg">콘솔을 같이 확인하세요</span>
        <h2>useMemo(1)</h2>

        <UseMemo />
      </div>

      <div className="example-section">
        <span className="alert-msg">콘솔을 같이 확인하세요</span>
        <h2>useMemo(2)</h2>

        <UseMemo2 />
      </div>
    </div>
  );
}
