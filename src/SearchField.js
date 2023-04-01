import { useState } from 'react';
import { TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import './styles.css'

function SearchField({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (

    <TextField id='search' placeholder="Search" variant="outlined" size="small" value={searchTerm}
      onChange={handleSearch}

      InputProps={{
        style: { borderRadius: "8px", marginTop: '9%', width: "105%", height: '65%' },

        //adding the search icon in the field

        startAdornment: (
          <SearchIcon color="disabled" />
        )
      }}
    />
  );
}

export default SearchField;
