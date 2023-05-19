import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function CatchCountriesApi() {
  const [countryData, setCountryData] = useState(null);

  useEffect(() => {
    fetch(" https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCountryData(data);
      });
  }, []);
  return (
    <div className="cards">
      {countryData &&
        countryData?.map((item, index) => {
          return (
            <>
              <div className="card">
                <img
                  key={index}
                  alt={item.flags.alt}
                  src={item.flags.png}
                ></img>
                <h4>{item.name.common}</h4>
                <ul>
                  <li>
                    Population: <span>{item.population}</span>
                  </li>
                  <li>
                    Region: <span>{item.continents}</span>
                  </li>
                  <li>
                    Capital: <span>{item.capital}</span>
                  </li>
                </ul>
              </div>
            </>
          );
        })}
    </div>
  );
}
export default CatchCountriesApi;
