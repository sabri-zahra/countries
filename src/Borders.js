import { useEffect, useState } from "react";
// import { useActionData, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import Api from "./API/Api";

const Borders = function ({ elem }) {
  const [detailData, setDetailData] = useState(null);
  const request = async () => {
    const response = await Api("https://restcountries.com/v3.1/all/");
    setDetailData = response.filter((item, index) => {
      return item.name.common === elem;
    });
    return (
      <>
        <p>Hello Country</p>
        {detailData &&
          detailData?.map((item) => {
            return (
              <Link state={item.name.common} to={`/${item.name.common}`}>
                <button
                  className="detailsButton"
                  onchange={(e) => console.log(e.target.value)}
                >
                  {item.name.common}
                </button>{" "}
              </Link>
            );
          })}
      </>
    );
  };
};
export default Borders;
