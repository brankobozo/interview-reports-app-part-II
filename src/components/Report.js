import { useState } from "react";

import Modal from "./Modal.js";

export default function Report(props) {
  const [showModal, setShowModal] = useState(false);

  const report = props.reports;

  const interviewDate = new Date(report.interviewDate);
  const interviewYear = interviewDate.getFullYear();
  const interviewMonth = interviewDate.getMonth() + 1;
  const interviewDay = interviewDate.getDate();

  function renderModal(e) {
    setShowModal(true);
  }

  function closeModal(e) {
    setShowModal(false);
  }

  return (
    <li className="report__item" id={report.id}>
      <div className="report__detail">
        <p className="report__text">{report.companyName}</p>
        <p className="report__title">Company</p>
      </div>

      <div className="report__detail">
        <p className="report__text">{report.candidateName}</p>
        <p className="report__title">Candidate</p>
      </div>

      <div className="report__detail">
        <p className="report__text">{`${interviewDay}.${interviewMonth}.${interviewYear}`}</p>
        <p className="report__title">Interview Date</p>
      </div>

      <div className="report__detail">
        <p className="report__text">{report.status}</p>
        <p className="report__title">Status</p>
      </div>

      <div className="report__detail">
        <button className="btn btn--view" onClick={renderModal}>
          View
        </button>
        <button className="btn btn--view" onClick={props.handleDelete}>
          X
        </button>
      </div>

      {showModal && <Modal report={report} handleClose={closeModal} />}
    </li>
  );
}
