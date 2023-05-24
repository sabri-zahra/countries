// import logo from "./logo.svg";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
// import MakeSearchInput from "./Header";
import IndexPage from "./darkMode";
import CatchCountriesApi from "./catchCountriesApi";
import Details from "./Details";
function App() {
  return (
    <>
      <BrowserRouter>
        <IndexPage />
        <Routes>
          <Route path="/" element={<CatchCountriesApi />} />
          <Route path="/:title" element={<Details />} />
        </Routes>
      </BrowserRouter>
      {/* <IndexPage /> */}
      {/* <MakeSearchInput /> */}
      {/* <CatchCountriesApi /> */}
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
