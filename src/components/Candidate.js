import { useState, useEffect } from "react";

import Spinner from "../components/Spinner.js";
import Error from "../components/Error.js";
import Card from "./Card.js";

export default function Candidate({ handleSelect }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState();
  const [candidates, setCandidates] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3333/api/candidates")
      .then(res => res.json())
      .then(candidates => {
        setIsLoaded(true);
        setCandidates(candidates);
        setFilteredResults(candidates);
      })
      .catch(e => {
        setIsLoaded(true);
        setError(
          `Error occured in fetching data. Please check your connection!`
        );
      });
  }, []);

  function searchItems(e) {
    const query = e.target.value;
    setSearchInput(query);

    const newState = filteredResults.filter(result => {
      return result.name.toLowerCase().indexOf(query) !== -1;
    });
    setCandidates(newState);
  }

  const cards = candidates.map(candidate => {
    return (
      <Card
        card={candidate}
        key={candidate.id}
        handleClick={handleSelect}
        fromWhere="candidate"
      />
    );
  });

  return (
    <>
      {!isLoaded && <Spinner />}
      {isLoaded && error === 0 && <Error error={error} />}
      {isLoaded && !error && (
        <>
          <input
            type="search"
            placeholder="Search"
            value={searchInput}
            onChange={searchItems}
            className="main__search"
          />
          <ul className="cards">{cards}</ul>
        </>
      )}
    </>
  );
}
