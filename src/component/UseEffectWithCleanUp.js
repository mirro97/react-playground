import { useState, useEffect } from "react";

export default function UseEffectWithCleanUp() {
  const [readyTimer, setReadyTimer] = useState(false);

  return (
    <div>
      <button
        onClick={() => {
          setReadyTimer(!readyTimer);
        }}
      >
        스위치
      </button>

      {readyTimer && <Timer />}
    </div>
  );
}

function Timer(props) {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("⏰ 1초");
    }, 1000);

    // clean up
    return () => {
      clearInterval(timer);
      console.log("📢 타이머가 종료되었습니다.");
    };
  }, []);

  return (
    <div>
      <span>📢 타이머 시작합니다. 콘솔을 보세요</span>
    </div>
  );
}
