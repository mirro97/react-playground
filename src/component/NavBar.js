import { Link, useLocation } from "react-router-dom";

import "../assets/css/nav-bar.css";
export default function NavBar() {
  let location = useLocation();
  return (
    <nav>
      <ul className="nav-bar">
        <li>
          <Link to="/react-playground-result/">Basic</Link>
        </li>
        <li>
          <Link to="/react-playground-result/Hooks/useEffectNuseRef">Hook</Link>
        </li>
        <li className="hard">
          <Link to="/react-playground-result/Hard/Debounce">Hard</Link>
        </li>
      </ul>
      {location.pathname.indexOf("Hooks") !== -1 && <SubNav />}
    </nav>
  );
}

function SubNav() {
  return (
    <ul className="sub-nav">
      <li>
        <Link to="/react-playground-result/Hooks/useEffectNuseRef">
          useEffect & useRef
        </Link>
      </li>
      <li>
        <Link to="/react-playground-result/Hooks/useContext">useContext</Link>
      </li>
      <li>
        <Link to="/react-playground-result/Hooks/useMemo">useMemo</Link>
      </li>
    </ul>
  );
}
