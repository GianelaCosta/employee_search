import SearchResultsItem from "../SearchResultsItem/index";
import "./style.css";

export default function SearchResults({ results, isSearching }) {
    return (
        <div className="search-results-container">
            {!results.length && isSearching && <p>No results found</p>}
            {results?.map((value) =>
                <SearchResultsItem key={value.id} {...value} />)}
        </div>
    );
}
