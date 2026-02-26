export default function SearchField({handleInput, filterText}) {
    return (
        <input
            type="search"
            placeholder="Type to search..."
            value={filterText}
            onChange={handleInput}
            className="searchField"
        />
    )
}