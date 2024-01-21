import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import MicIcon from "@mui/icons-material/Mic";
import IconButton from "@mui/material/IconButton";

const AutocompleteComponent = () => {
  return (
    <>
      <Autocomplete
        freeSolo
        style={{ marginLeft: "50px", width: "400px" }}
        options={[]}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search Your Movie"
            margin="normal"
            variant="outlined"
          />
        )}
      />
      <IconButton color="secondary" aria-label="add an alarm">
        <MicIcon />
      </IconButton>
    </>
  );
};

export default AutocompleteComponent;
