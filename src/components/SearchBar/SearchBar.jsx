import { Search as SearchIcon } from "react-bootstrap-icons";
import s from "./style.module.css";
import { useState } from "react";
const SearchBar = ({ onSubmit }) => {
  const [value, setValue] = useState("");
  const submit = (e) => {
    if (e.key === "Enter" && e.target.value.trim() !== "") {
      onSubmit(e.target.value);
      setValue("");
    }
    console.log(e.target.value);
  };

  function handleChange(e) {
    setValue(e.target.value);
  }

  return (
    <>
      <SearchIcon className={s.icon} size={27} />
      <input
        onKeyUp={submit}
        type="text"
        onChange={handleChange}
        value={value}
        className={s.input}
        placeholder={"Search a tv show you may like"}
      />
    </>
  );
};

export default SearchBar;
