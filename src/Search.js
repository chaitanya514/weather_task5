import React, { useState } from "react";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));


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


      <TextField
        error
        value={city}
        id="filled-error-helper-text"
        helperText="Incorrect entry."
        variant="filled"
        label=  "Search City Here"
        onChange={handleSearchInputChanges}

      />
      <input type="submit"
        onClick={callSearchFunction}
        value="SEARCH" />
    </form>
  );
}

export default Search;