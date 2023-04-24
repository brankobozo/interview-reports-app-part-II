import { useState, useEffect } from "react";

import Spinner from "../components/Spinner.js";
import Report from "../components/Report.js";
import Error from "../components/Error.js";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState();

  const [reports, setReports] = useState([]);

  const [searchInput, setSearchInput] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3333/api/reports")
      .then(res => res.json())
      .then(reports => {
        setIsLoaded(true);
        setReports(reports);
        setFilteredResults(reports);
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

    const filteredReports = filteredResults.filter(report => {
      const searchName = report.candidateName.toLowerCase();
      const searchCompany = report.companyName.toLowerCase();

      return (
        searchName.indexOf(query.toLowerCase()) !== -1 ||
        searchCompany.indexOf(query.toLowerCase()) !== -1
      );
    });

    setReports(filteredReports);
  }

  function deleteReport(e) {
    const id = +e.target.closest(".report__item").id;
    const newState = reports.filter(report => report.id !== id);
    setReports(newState);
    setFilteredResults(newState);
  }

  const reportsList = reports.map(report => (
    <Report reports={report} key={report.id} handleDelete={deleteReport} />
  ));

  return (
    <div className="container">
      <input
        type="search"
        placeholder="Search"
        value={searchInput}
        onChange={searchItems}
        className="main__search"
      />

      {!isLoaded && <Spinner />}
      {isLoaded && reportsList.length === 0 && <Error error={error} />}
      {isLoaded && reportsList.length !== 0 && (
        <ul className="report__list">{reportsList}</ul>
      )}
    </div>
  );
}
