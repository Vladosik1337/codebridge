import { FormControl, InputAdornment, OutlinedInput } from '@mui/material';
import React from 'react';
import { FaSearch } from 'react-icons/fa';
import './SearchQuery.scss';

interface Props {
  params: string;
  setParams: (params: string) => void;
}

export function SearchQuery({ params, setParams }: Props) {
  const handleFilter = (event: { target: { value: string } }) => {
    setParams(event.target.value);
  };

  return (
    <div className="filter">
      <label htmlFor="outlined-basic" className="filter__label">
        Filter by keywords
      </label>

      <FormControl sx={{ width: '600px' }} className="filter__input">
        <OutlinedInput
          value={params}
          onChange={handleFilter}
          id="outlined-basic"
          startAdornment={
            <InputAdornment position="start">
              <FaSearch />
            </InputAdornment>
          }
        />
      </FormControl>
    </div>
  );
}
