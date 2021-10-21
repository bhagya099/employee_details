export const Search = (props) => {
  const { search, setSearch } = props;
  return (
    <div className="SearchBar">
      <input
        type="text"
        placeholder="Enter A Skill eg. Python or Java"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        type="submit"
        className="SearchButton"
        // onClick={() => alert("Please fill the")}
      >
        SEARCH
      </button>
    </div>
  );
};
