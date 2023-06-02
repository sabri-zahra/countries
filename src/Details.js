import { useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import Borders from "./Borders";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
// import Borders from "./Borders";
///start defining component Details////
const Details = function () {
  const [detailData, setDetailData] = useState(null);
  // const [countryData, setCountryData] = useState(null);
  // const [countryName, setCountryName] = useState(null);
  const location = useLocation();
  console.log(location);
  ////////
  // const detailsWindow = function (e) {
  //   console.log(e.target.value);
  // };
  // useEffect(() => {
  //   fetch(" https://restcountries.com/v3.1/all")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setCountryData(data);
  //       setCountryName(countryData?.map((item) => item.cca3));
  //     });
  // }, []);
  /////////
  const borderCountry = function () {
    return;
    <Borders elem={location.state} />;
  };
  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${location.state}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setDetailData(data);
        // setBordersData(data.borders);
      });
  }, [location.state]);
  console.log(detailData);
  // let country = country[0];
  // const currencyKey = Object.keys(country.currencies)[0];
  // let nativeName = Object.keys(country.name.nativeName);
  // nativeName = nativeName[nativeName.length - 1];

  // let langs = Object.keys(country.languages).map(
  //   (key) => country.languages[key]
  // );
  // langs = langs.join(" , ");

  return (
    <>
      <Link to="/">
        <button type="button" name="back" className="detailsButton">
          <FontAwesomeIcon icon={faArrowLeft} /> Back
        </button>
      </Link>

      {detailData &&
        detailData?.map((item) => {
          return (
            <div>
              <Col className="my-4 ">
                <img alt={item.flags.alt} src={item.flags.png}></img>
              </Col>
              <div>
                <Col className="p-5 col-md-6 col-12">
                  <h3>{item.name.common}</h3>
                  <ul>
                    <li>
                      Native Name:{" "}
                      <span>
                        {/* ////please work here */}
                        {Object.keys(item.name.nativeName)}
                      </span>
                    </li>
                    <li>
                      Population: <span>{item.population}</span>
                    </li>
                    <li>
                      Region: <span>{item.region}</span>
                    </li>
                    <li>
                      Sub Region: <span>{item.subregion}</span>
                    </li>
                    <li>
                      Capital: <span>{item.capital}</span>
                    </li>
                  </ul>
                  <div>
                    <ul>
                      <li>
                        Top Level Domain: <span>{item.altSpellings[0]}</span>
                      </li>
                      <li>
                        currencies:{" "}
                        <span>{Object.keys(item.currencies)[0]}</span>
                      </li>
                      <li>
                        Languages:{" "}
                        <span>
                          {Object.values(item.languages).map((elem) => {
                            return (
                              <span>
                                {elem}
                                {","}{" "}
                              </span>
                            );
                          })}
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="bordersButton">
                    Border Countries:{"  "}
                    {item.borders?.map((elem) => {
                      return (
                        <>
                          <Link state={elem} to={`/${elem}`}>
                            <button
                              type="submit"
                              className="detailsButton"
                              onchange={(e) => borderCountry(e.target.value)}
                            >
                              {elem}
                            </button>
                          </Link>
                        </>
                      );
                    })}
                    {!item.borders && " Border Coutries Is Not Exist..."}
                  </div>
                </Col>
              </div>
            </div>
          );
        })}
      {/* {bordersData &&
        bordersData?.map((item) => {
          console.log(item);
          return (
            <div>
            <ul>
              <li></li>
            </ul>
              <button type="button">{item}</button>
            </div>
          );
        })} */}
    </>
  );
};
export default Details;
