import NoDebounce from "../component/NoDebounce";
import UseDebounce from "../component/YesDebounce";

export default function Debounce() {
  return (
    <div>
      <div className="example-section">
        <span className="alert-msg">
          input 에 직접 입력하고 결과를 비교해보세요
        </span>
        <h2>Debounce - 적용 안함</h2>

        <NoDebounce />
      </div>

      <div className="example-section">
        <span className="alert-msg">
          input 에 직접 입력하고 결과를 비교해보세요
        </span>
        <h2>Debounce - 적용함</h2>

        <UseDebounce />

        <div className="description">
          <span>
            입력에 대한 모든 이벤트를 발생시키지 않고, <br />
            짧은 시간 내의 연속된 함수 혹은 이벤트 호출시, 일정한 딜레이 이후에
            한번만 처리하는 패턴입니다.
          </span>

          <span>자동저장, 검색 결과 적용 등에 사용합니다.</span>
        </div>

        <div className="description">
          <span className="think">
            - 전반적인 성능이 향상됩니다. <br /> - API / 서비스에 사용시
            비용절약에 도움이 됩니다.
          </span>
        </div>
      </div>
    </div>
  );
}
