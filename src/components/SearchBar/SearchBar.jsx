import { Search as SearchIcon } from "react-bootstrap-icons";
import s from "./style.module.css";
const SearchBar = ({ onSubmit }) => {
  const submit = (e) => {
    if (e.key === "Enter" && e.target.value.trim() !== "") {
      onSubmit(e.target.value);
    }
    console.log(e.target.value);
  };
  return (
    <>
      <SearchIcon className={s.icon} size={27} />
      <input
        onKeyUp={submit}
        type="text"
        className={s.input}
        placeholder={"Search a tv show you may like"}
      />
    </>
  );
};

export default SearchBar;
