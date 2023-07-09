import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";

import { CitySercice } from "../services/city.service";

const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState("");

  const loadOptions = async (inputValue) => {
    try {
      const data = await CitySercice.getCity(inputValue);
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  return (
    <AsyncPaginate
      placeholder="Поиск города"
      debounceTimeout={1000}
      value={search}
      onChange={handleChange}
      loadOptions={loadOptions}
    />
  );
};

export default Search;
