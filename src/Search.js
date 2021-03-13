import React, { useState } from "react";


const Search = (props) => {
  const [city, setCity] = useState("");
  
  const handleSearchInputChanges = (e) => {
    setCity(e.target.value);
  }

  const resetInputField = () => {
    setCity("")
  }

  const callSearchFunction = (e) => {
    e.preventDefault();
    props.search(city);
    resetInputField();
  }

  return (
      <form className="search">
        <input
          value={city}
          onChange={handleSearchInputChanges}
          type="text"
          placeholder="Type Canada's city name here..."
        />
        <input type="submit"
        onClick={callSearchFunction}  
        value="SEARCH" />
      </form>
    );
}

export default Search;