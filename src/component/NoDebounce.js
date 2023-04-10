import { useEffect, useState } from "react";
import Countries from "./Countries";

export default function NoDebounce() {
  // debounce 가 적용되지 않은 예제입니다.
  const [search, setSearch] = useState("");
  const [results, setResults] = useState(null);

  useEffect(() => {
    const getCountries = async () => {
      return await fetch(`https://restcountries.com/v3.1/name/${search}`)
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

    if (search) getCountries();
  }, [search]);

  return (
    <div>
      <input
        onChange={(e) => setSearch(e.target.value)}
        placeholder="적어주삼"
      />
      {search ? <Countries countries={results} /> : ""}
    </div>
  );
}
