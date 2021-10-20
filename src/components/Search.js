export const Search = (props) => {
  const { search, setSearch } = props;
  return (
    <div className="SearchBar">
      <input
        type="text"
        placeholder="Enter A skill"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit" className="SearchButton">
        SEARCH
      </button>
    </div>
  );
};
