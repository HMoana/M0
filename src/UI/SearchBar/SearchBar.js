// IMPORTS
import React, { useState } from "react";
import { Fragment } from "react";

// REACT ICONS
import { AiFillCloseCircle } from "react-icons/ai";

// PAGES & COMPONENTS
import classes from "./SearchBar.module.scss";

function SearchBar({ placeholder, data }) {
  // USE STATE TO HOLD FILTERED DATA
  const [filteredData, setFilteredData] = useState([]);
  // USE STATE FOR WHICH DATA TRYING TO SEARCH
  const [wordEntered, setWordEntered] = useState("");
  // STYLED COMPONENT FOR ICON
  const styles = {
    "margin-top": "60px",
    width: "40px",
    height: "40px",
  };

  // FUNCTION TO HANDLE ANY CHANGES IN SEARCH BAR INPUT
  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    // FILTER THROUGH DATA TO FIND MATCH TO WHATS BEING SEARCHED
    const newFilter = data.filter((value) => {
      return value.profile.toLowerCase().includes(searchWord.toLowerCase());
    });
    // CONDITIONAL TO ERASE SEARCHED PROFILES, ONCE SEARCH BAR INPUT IS ERASED
    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };
  // FUNCTION TO CLEAR SEARCH BAR INPUT & FILTER
  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  return (
    <Fragment>
      <div className={classes.searchBar__inputs}>
        <input
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
        />

        <div className={classes.searchBar__icon}>
          {/* CONDITIONAL TO SHOW SEARCH BUTTON OR CLOSE ICON */}
          {filteredData.length === 0 ? (
            <button>Search</button>
          ) : (
            <AiFillCloseCircle
              className={classes.clearBtn}
              style={styles}
              onClick={clearInput}
            />
          )}
        </div>
      </div>
      {/* WILL SHOW WHEN SEARCH BAR NOT EMPTY */}
      {filteredData.length !== 0 && (
        <div className={classes.searchBar__dataResult}>
          {filteredData.slice(0, 6).map((value, key) => {
            return (
              <div key={value.id}>
                <a
                  className={classes.searchBar__dataItem}
                  href={value.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <p>{value.profile}</p>
                </a>
              </div>
            );
          })}
        </div>
      )}
    </Fragment>
  );
}

export default SearchBar;
