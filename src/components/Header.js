import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__title">
          <h1>
            Reports <br />
            Administration
          </h1>
          <Link to="/" className="btn">
            Reports
          </Link>
          <Link to="/createreport" className="btn">
            Create
          </Link>
        </div>
      </div>
    </header>
  );
}
