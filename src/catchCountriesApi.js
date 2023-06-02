import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function CatchCountriesApi() {
  const [countryData, setCountryData] = useState(null);
  const [filteredData, setFilteredData] = useState(null);

  const filterByRegion = function (e) {
    console.log(e.target.value);
    // countryData?.filter((item) => item.region === e.target.value);
    setFilteredData(
      countryData?.filter((item) => item.region === e.target.value)
    );
  };
  const filteredByName = function (e) {
    console.log(e.target.value);
    setFilteredData(
      countryData?.filter((item) =>
        item.name.common.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

  useEffect(() => {
    fetch(" https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCountryData(data);
        setFilteredData(data);
      });
  }, []);
  return (
    <>
      <div className="search">
        {/* <i class="fa-solid fa-magnifying-glass" style="color: #bdc6d6;"></i> */}
        <input
          type="search"
          id="search"
          placeholder=" Search for a Country ..."
          onChange={(e) => filteredByName(e)}
        ></input>
        <select
          class="region"
          name="region-area"
          onChange={(e) => filterByRegion(e)}
        >
          <option value="">Filter by Region</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
      <div className="cards">
        {filteredData &&
          filteredData?.map((item, index) => {
            return (
              <Link state={item.name.common} to={`/${item.name.common}`}>
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
              </Link>
            );
          })}
      </div>
    </>
  );
}
export default CatchCountriesApi;
