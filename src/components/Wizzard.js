export default function Wizzard({ page }) {
  return (
    <section className="progress">
      <div
        className="progress__line"
        style={
          page === 2 ? { width: "50%" } : page === 3 ? { width: "100%" } : {}
        }
      ></div>

      <div
        className={`progress__step progress__step--1 ${
          page === 1 ? "active" : "completed"
        }`}
      >
        <p className="progress__dot">1</p>
        <p className="progress__title">Select candidate</p>
      </div>
      <div
        className={`progress__step progress__step--2 ${
          page === 2 ? "active" : page === 3 ? "completed" : ""
        }`}
      >
        <p className="progress__dot">2</p>
        <p className="progress__title">Select company</p>
      </div>
      <div
        className={`progress__step progress__step--3 ${
          page === 3 ? "active" : ""
        }`}
      >
        <p className="progress__dot">3</p>
        <p className="progress__title">Fill report data</p>
      </div>
    </section>
  );
}
