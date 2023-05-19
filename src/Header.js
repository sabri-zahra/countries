import CatchCountriesApi from "./catchCountriesApi";
import FilterPage from "./searchSec";

function MakeSearchInput() {
  return (
    <div className="search">
      <input
        type="search"
        id="search"
        placeholder=" Search for a Country ..."
      ></input>
      <select class="region" name="region-area">
        <option value="">Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="America">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
}
export default MakeSearchInput;
