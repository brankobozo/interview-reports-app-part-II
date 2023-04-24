import { useState, useEffect } from "react";

import Spinner from "../components/Spinner.js";
import Error from "../components/Error.js";
import Card from "./Card.js";

export default function Company({ handleSelect }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState();
  const [companies, setCompanies] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3333/api/companies")
      .then(res => res.json())
      .then(companies => {
        setIsLoaded(true);
        setCompanies(companies);
        setFilteredResults(companies);
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
    setCompanies(newState);
  }

  const cards = companies.map(company => {
    return (
      <Card
        card={company}
        key={company.id}
        handleClick={handleSelect}
        fromWhere="company"
      />
    );
  });

  return (
    <>
      {!isLoaded && <Spinner />}
      {isLoaded && error === 0 && <Error error={error} />}
      {isLoaded && !error && (
        <div>
          <input
            type="search"
            placeholder="Search"
            value={searchInput}
            onChange={searchItems}
            className="main__search"
          />
          <ul className="cards">{cards}</ul>
        </div>
      )}
    </>
  );
}
