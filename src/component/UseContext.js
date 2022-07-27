import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function UseContext() {
  const { dark, setDark } = useContext(ThemeContext);

  const changeTheme = () => {
    setDark(!dark);
  };

  return (
    <div>
      <div className="btn-wrap">
        <button onClick={changeTheme}>Dark</button>
      </div>

      <div className="description">
        <span>
          이 예제에서 Dark 모드로 바꾸고자 하는 컴포넌트는 Page(제목 색깔), Nav
          이다.
        </span>
        <span>겸사겸사 배경 색깔도 ...</span>
      </div>
      <div className="description">
        <span>
          useContext 를 사용하면 상위 컴포넌트의 데이터를 전역으로 사용할수 있게
          된다.
        </span>
        <span>
          Dark 모드의 경우 최상단에 Dark 모드의 여부를 선언한 뒤, 현재
          UseContext 컴포넌트에서 값을 바꿔주는 것이다.
        </span>
        <span>
          최상단부터 최하단까지 props를 사용하지 않고 데이터 전달이 가능해
          굉장히 유용하지만
        </span>
        <span className="think">
          컴포넌트 재사용성이 떨어지는 점에서 잘 생각하고 사용해야하는 부분이다.
        </span>
      </div>
    </div>
  );
}
