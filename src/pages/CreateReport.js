import { useState } from "react";

import Wizzard from "../components/Wizzard.js";
import Form from "../components/Form.js";

export default function Candidate() {
  const [formData, setFormData] = useState({
    candidate: "",
    company: "",
    interviewDate: "",
    phase: "",
    status: "",
    notes: "",
  });
  const [page, setPage] = useState(1);

  function nextPage(e) {
    setPage(prevPage => prevPage + 1);
  }
  function prevPage(e) {
    setPage(prevPage => prevPage - 1);
  }

  return (
    <div className="container">
      <Wizzard page={page} />

      <Form page={page} formData={formData} setFormData={setFormData} />

      <div className="navigation">
        {page > 1 && (
          <button
            className={`btn btn--prev ${page <= 1 ? "btn--disabled" : ""}`}
            onClick={prevPage}
          >
            Back
          </button>
        )}

        {page < 3 && (
          <button
            className={`btn btn--next ${
              formData.candidate === "" ? "btn--disabled" : ""
            }`}
            onClick={nextPage}
          >
            Next
          </button>
        )}
        {page === 3 && (
          <button
            type="submit"
            className="btn btn--submit"
            form="report__form"
            // disabled
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
}
