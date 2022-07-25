import { Link } from "react-router-dom";

import "../assets/css/nav-bar.css";
export default function NavBar() {
  return (
    <ul className="nav-bar">
      <li>
        <Link to="/">Basic</Link>
      </li>
      <li>
        <Link to="/Hooks">Hook</Link>
      </li>
    </ul>
  );
}
