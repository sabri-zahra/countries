import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// fontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
// import { useActionData, useLocation } from "react-router-dom";
// import { Link } from "react-router-dom";
import Api from "./API/Api";
import Country from "./PageCountry";

const Borders = function (elem) {
  const [result, setResult] = useState();
  let location = useLocation().state;
  const navigate = useNavigate();
  console.log(location);

  const request = async () => {
    const response = await Api("https://restcountries.com/v3.1/all/");
    const country = response.filter((item, index) => {
      return item.cca3 === elem;
    });
    console.log(country[0]);
    country = country[0];
    const currencyKey = Object.keys(country.currencies);
    let nativeName = Object.keys(country.name.nativeName);
    nativeName = nativeName[nativeName.length - 1];

    let langs = Object.keys(country.languages).map(
      (key) => country.languages[key]
    );
    langs = langs.join(" , ");

    setResult(
      <Country
        name={country.name.common}
        svg={country.flags.svg}
        alt={country.name.common}
        region={country.region}
        subregion={country.subregion}
        population={country.population}
        capital={country.capital}
        currency={currencyKey}
        nName={country.name.nativeName[nativeName].common}
        borders={country.borders}
        topLevelDomin={country.altSpellings[0]}
        lang={langs}
      />
    );
  };
  useEffect(() => {
    request();
  }, []);

  const goBack = () => {
    navigate(-1);
  };

  return (
    <Container>
      <Row>
        <Col className="my-5">
          <button
            onClick={goBack}
            // className={`px-4 py-1 btn-back ${
            //   ctx.theme ? " element-dark-mode" : ""
            // }`}
          >
            <FontAwesomeIcon icon={faArrowLeft} />
            <span className="mx-2">Back</span>
          </button>
        </Col>
      </Row>
      <Row>{result}</Row>
    </Container>
  );
};
export default Borders;
