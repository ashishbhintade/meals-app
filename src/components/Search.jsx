import { useState } from "react";
import { useGlobalContext } from "../context";

const Search = () => {
  const [text, setText] = useState("");

  const { setSearchTerm } = useGlobalContext();

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text) {
      setSearchTerm(text);
    }
  };
  return (
    <header className="search-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Type Favorite Meal"
          value={text}
          onChange={handleChange}
          className="form-input"
        />
        <button type="submit" className="btn">
          Search
        </button>
        <button type="button" className="btn btn-hipster">
          Surprise Me!
        </button>
      </form>
    </header>
  );
};

export default Search;
