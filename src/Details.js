import { useEffect, useState } from "react";
import { useActionData, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

///start defining component Details////
const Details = function () {
  const [detailData, setDetailData] = useState(null);
  const [countryData, setCountryData] = useState(null);
  const [countryName, setCountryName] = useState(null);
  const location = useLocation();
  console.log(location);
  ////////
  // const detailsWindow = function (e) {
  //   console.log(e.target.value);
  // };
  useEffect(() => {
    fetch(" https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        setCountryData(data);
        setCountryName(countryData?.map((item) => item.cca));
      });
  }, []);
  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${location.state}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setDetailData(data);
        // setBordersData(data.borders);
      });
  }, [location.state]);

  return (
    <>
      <Link to="/">
        <button type="button" name="back" className="detailsButton">
          Back
        </button>
      </Link>
      <div>
        {detailData &&
          detailData?.map((item) => {
            return (
              <div className="contentsDetails">
                <img alt={item.flags.alt} src={item.flags.png}></img>
                <div>
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
                        Top Level Domain: <span>{item.tld}</span>
                      </li>
                      <li>
                        currencies:{" "}
                        <span>
                          {Object.keys(item.currencies).map((item) => {
                            return (
                              <span>
                                {item}
                                {","}{" "}
                              </span>
                            );
                          })}
                        </span>
                      </li>
                      <li>
                        Languages:{" "}
                        <span>
                          {Object.values(item.languages).map((item) => {
                            return (
                              <span>
                                {item}
                                {","}{" "}
                              </span>
                            );
                          })}
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="bordersButton">
                    Border Countries:{" "}
                    {item.borders?.map((elem) => {
                      return (
                        <Link state={elem} to={`/${elem}`}>
                          <button
                            className="detailsButton"
                            onchange={(e) => console.log(e.target.value)}
                          >
                            {elem}
                          </button>{" "}
                        </Link>
                      );
                    })}
                  </div>
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
      </div>
    </>
  );
};
export default Details;
