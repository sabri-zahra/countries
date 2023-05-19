import axios from "axios";
import { useState } from "react";
const BaseUrl = " https://restcountries.com/v3.1/all";
const getOneCountry = async (id) => {
  const result = await axios.get(`${BaseUrl}/${id}`);
  return result.data;
};

const SearchSec = function () {
  const [searchInput, setSearchInput] = useState("");

  function handleChange(event) {
    console.log(event);
    // if (!(event.target.value.slice(-1) === "*")) {
    //   setCity(event.target.value);
    // }
    setSearchInput(event.target.value);
  }
  return <h1>searchInput</h1>;
};
export { getOneCountry, SearchSec };
