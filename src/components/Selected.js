export default function Selected({ formData }) {
  return (
    <div className="form__selected">
      <p>
        Candidate: <span className="card__name">{formData.candidate}</span>
      </p>
      <p>
        Company: <span className="card__name">{formData.company}</span>
      </p>
    </div>
  );
}
