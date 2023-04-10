import { useEffect, useState } from "react";
import useDebounce from "../hooks/useDebounce";
import Countries from "./Countries";

export default function YesDebounce() {
  // debounce 를 적용시킨 예제입니다.
  const [search, setSearch] = useState("");
  const [results, setResults] = useState(null);

  const debounceValue = useDebounce(search);

  useEffect(() => {
    const getCountries = async () => {
      return await fetch(`https://restcountries.com/v3.1/name/${debounceValue}`)
        .then((res) => {
          if (!res.ok) {
            return new Promise.reject("No Result");
          }
          return res.json();
        })
        .then((list) => {
          setResults(list);
        })
        .catch((err) => console.error(err));
    };

    if (debounceValue) getCountries();
  }, [debounceValue]);

  return (
    <div className="input-wrap">
      <input
        onChange={(e) => setSearch(e.target.value)}
        placeholder="적어주삼"
      />
      {search ? <Countries countries={results} /> : ""}
    </div>
  );
}
