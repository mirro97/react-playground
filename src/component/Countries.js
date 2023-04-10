import React from "react";
import "../assets/css/debounce.css";

export default function Countries(countries) {
  return (
    <ul className="country-wrap">
      {countries?.countries?.map((data) => {
        return (
          <li className="country" key={data?.area}>
            <div>
              <img src={data?.flags?.png} alt={data?.flags?.alt} />
            </div>
            {data?.name?.common} ({data?.translations?.kor?.common})
          </li>
        );
      })}
    </ul>
  );
}
