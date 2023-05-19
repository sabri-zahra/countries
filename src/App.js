// import logo from "./logo.svg";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import MakeSearchInput from "./Header";
import IndexPage from "./darkMode";
import CatchCountriesApi from "./catchCountriesApi";
function App() {
  return (
    <>
      <IndexPage />
      <MakeSearchInput />
      <CatchCountriesApi />
      {/* <Routes>
        {/* <IndexPage /> */}
      {/* <Route path="/dark" element={<IndexPage />} />
        <Route path="/search" element={<MakeSearchInput />} />;
        <Route path="/countries" element={<CatchCountriesApi />} />
      </Routes> */}
    </>
  );
}

export default App;
