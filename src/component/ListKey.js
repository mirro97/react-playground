import { useState } from "react";
import "../assets/css/list-n-key.css";

function ListNoKey() {
  let list1 = ["a", "b", "c", "d"];
  let [color, setColor] = useState("");

  return (
    <div className="listkey-section">
      <h3>no key</h3>
      <ul>
        {list1.map((item, index) => {
          return (
            <li>
              <button
                style={{ "background-color": color }}
                onClick={() => {
                  if (color === "") setColor("green");
                  else setColor("");
                }}
              >
                {item}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function ListKey() {
  let list2 = ["e", "f", "g", "h"];

  let [color] = useState("");
  return (
    <div className="listkey-section">
      <h3>no key</h3>
      <ul>
        {list2.map((item, index) => {
          return (
            <li>
              <button
                style={{ backgroundColor: color }}
                key={index.toString()}
                onClick={(e) => {
                  console.log(e);
                }}
              >
                {item}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export { ListNoKey, ListKey };
