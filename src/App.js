import "./sass/main.scss";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header.js";
import Home from "./pages/Home.js";
import CreateReport from "./pages/CreateReport.js";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="main">
        <Routes>
          <Route index element={<Home />} />
          <Route path="createreport" element={<CreateReport />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
