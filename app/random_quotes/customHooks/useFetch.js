import { useState, useEffect } from "react";

const useFetch = () => {
  const [quotes, setQuotes] = useState(null);

  useEffect(() => {
    async function fetchData() {
      await fetch(
        "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
      )
        .then((x) => x.json())
        .then((data) => setQuotes(data?.quotes))
        .catch((err) => console.log(err));
    }

    fetchData();
  }, []);

  return {
    quotes,
  };
};

export default useFetch;
