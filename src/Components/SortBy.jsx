export const SortBy = ({
  setSortBy,
  selectedValue,
  setOrderBy,
  chosenValue,
}) => {
  const handleChangeS = (e) => {
    setSortBy(e.target.value);
  };
  const handleChangeO = (e) => {
    setOrderBy(e.target.value);
  };

  return (
    <div className="tc pb3 f6 f5-ns">
      <label className="label">
        Sort by:
        <select
          className="optionBox"
          value={selectedValue}
          onChange={handleChangeS}
        >
          <option value="created_at">Date</option>
          <option value="votes">Votes</option>
        </select>
      </label>
      <label className="label">
        Order by:
        <select
          className="optionBox"
          value={chosenValue}
          onChange={handleChangeO}
        >
          <option value="desc">Descending</option>
          <option value="asc">Ascending</option>
        </select>
      </label>
    </div>
  );
};
