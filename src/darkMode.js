import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
// import i from "react-bootstrap/i";
const IndexPage = () => {
  const [darkTheme, setDarkTheme] = useState(undefined);

  const handleToggle = (event) => {
    setDarkTheme(event.target.checked);
  };

  useEffect(() => {
    const root = window.document.documentElement;
    const initialColorValue = root.style.getPropertyValue(
      "--initial-color-mode"
    );
    console.log("init", initialColorValue);

    setDarkTheme(initialColorValue === "dark");
  }, []);
  useEffect(() => {
    if (darkTheme !== undefined) {
      if (darkTheme) {
        document.documentElement.setAttribute("data-theme", "dark");
        window.localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.removeAttribute("data-theme");
        window.localStorage.setItem("theme", "light");
      }
    }
  }, [darkTheme]);

  return (
    <div className="header">
      <h2>Where in the world?</h2>
      {darkTheme !== undefined && (
        <label>
          <FontAwesomeIcon icon={faMoon} />
          <input
            type="checkbox"
            checked={darkTheme}
            onChange={handleToggle}
          />{" "}
          Dark Mode
        </label>
      )}
    </div>
  );
};

export default IndexPage;
