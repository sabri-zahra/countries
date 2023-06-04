import { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import "./CountryInfo.css";
import Borders from "./Borders";
// import { ThemeContext } from "./API/themeContext";

export default function Country({
  name,
  svg,
  alt,
  borders,
  region,
  subregion,
  population,
  capital,
  currency,
  nName,
  topLevelDomin,
  lang,
}) {
  // const ctx = useContext(ThemeContext);
  const [borderData, setBorderData] = useState(null);
  const borderHandle = function (e) {
    console.log(e.target.value);
    setBorderData(<Borders elem={e.target.value} />);
    return { borderData };
  };

  return (
    <>
      <Col className="my-4 ">
        <img src={svg} alt={alt} className="col-12" />
      </Col>

      <Col className="p-5 col-md-6 col-12">
        <h2 className="titr">
          <span>{name}</span>
        </h2>
        <section className="d-flex justify-content-between flex-md-row flex-column">
          <ul className="my-4 text-capitalize p-0">
            <li>
              <span>Native Name: </span>
              {nName}
            </li>
            <li>
              <span>population: </span>
              {population}
            </li>
            <li>
              <span>Region: </span>
              {region}
            </li>
            <li>
              <span>Sub Region: </span>
              {subregion}
            </li>
            <li>
              <span>Capital: </span>
              {capital}
            </li>
          </ul>
          <ul className="my-4 text-capitalize p-0">
            <li>
              <span>Top Level Domin: </span>
              {topLevelDomin}
            </li>
            <li>
              <span>currencies: </span>
              {currency}
            </li>
            <li>
              <span>Languegs:</span> {lang}
            </li>
          </ul>
        </section>
        <section className="d-flex justify-content-start flex-wrap align-items-center">
          <span className="border-Coutries me-3">Border Coutries:</span>
          {borders?.map((item, index) => {
            return (
              <Link state={item} to={`/${item}`}>
                <button
                  className="bordersBtn"
                  onClick={(e) => borderHandle(e)}
                  // className={`bordersBtn ${
                  //   ctx.theme ? " element-dark-mode" : ""
                  // }`}
                  key={index}
                  value={item}
                >
                  {item}
                </button>
              </Link>
            );
          })}
          {!borders && " Border Countries Is Not Exist..."}
        </section>
      </Col>
    </>
  );
}
