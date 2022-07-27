import { Link } from "react-router-dom";

import "../assets/css/nav-bar.css";
export default function NavBar() {
  return (
    <ul className="nav-bar">
      <li>
        <Link to="/react-playground-result/">Basic</Link>
      </li>
      <li>
        <Link to="/react-playground-result/Hooks">Hook</Link>
        {}
      </li>
    </ul>
  );
}
