import { useNavigate } from "react-router-dom";

import Selected from "../components/Selected.js";
import Candidate from "./Candidate.js";
import Company from "./Company.js";
import SubmitReport from "./SubmitReport.js";

export default function Form({ formData, setFormData, page }) {
  const navigate = useNavigate();

  function handleSelect(e) {
    const { name, value } = e.target;
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const msg = `
    We will submit this report and redirect you to home page:
      Candidate: ${formData.candidate}
      Company: ${formData.company}
      Phase: ${formData.phase}
      Status: ${formData.status}
      Date: ${formData.interviewDate}
      ${formData.notes}
    `;
    alert(msg);
    navigate("/", { replace: true });
  }

  function PageToDisplay() {
    switch (page) {
      case 1:
        return (
          <Candidate
            formData={formData}
            setFormData={setFormData}
            handleSelect={handleSelect}
          />
        );
        break;
      case 2:
        return (
          <Company
            formData={formData}
            setFormData={setFormData}
            handleSelect={handleSelect}
          />
        );
        break;
      default:
        return <SubmitReport formData={formData} handleSelect={handleSelect} />;
    }
  }

  return (
    <form className="form" id="report__form" onSubmit={handleSubmit}>
      <Selected formData={formData} />
      {PageToDisplay()}
    </form>
  );
}
