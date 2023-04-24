export default function Modal(props) {
  const { report } = props;

  const interviewDate = new Date(report.interviewDate);
  const interviewYear = interviewDate.getFullYear();
  const interviewMonth = interviewDate.getMonth() + 1;
  const interviewDay = interviewDate.getDate();

  return (
    <div className="overlay" onClick={props.handleClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <div className="modal__content">
          <div className="modal__header">
            <h4>{report.candidateName}</h4>
            <button className="btn btn--close" onClick={props.handleClose}>
              X
            </button>
          </div>

          <div className="modal__body">
            <div className="modal__report">
              <p>
                <span className="card__content--title">Company: </span>
                {report.companyName}
              </p>
              <p>
                <span className="card__content--title">Interview Date: </span>
                {`${interviewDay}.${interviewMonth}.${interviewYear}`}
              </p>
              <p>
                <span className="card__content--title">Phase: </span>
                {report.phase}
              </p>
              <p>
                <span className="card__content--title">Status: </span>
                {report.status}
              </p>
            </div>
            <div className="modal__notes">
              <p>{report.note}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
