import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filterSlice";
import Style from "./Searchbox.module.css";

export default function SearchBox() {
  const dispatch = useDispatch();
  const filterName = useSelector(selectNameFilter);
  const [searchValue, setSearchValue] = useState(filterName || "");

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={Style.searchContainer}>
      <p>Find contacts by name</p>
      <input
        type="search"
        placeholder="Search"
        value={searchValue}
        onChange={handleSearch}
      />
    </div>
  );
}
