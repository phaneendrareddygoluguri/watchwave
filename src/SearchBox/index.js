import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { WidthFull } from "@mui/icons-material";

const AutocompleteComponent = () => {
  const options = ["Option 1", "Option 2", "Option 3"];

  return (
    <>
      <Autocomplete
        freeSolo
        style={{ Width: "100px" }}
        options={options}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search Your Movie"
            margin="normal"
            variant="outlined"
          />
        )}
      />
    </>
  );
};

export default AutocompleteComponent;
