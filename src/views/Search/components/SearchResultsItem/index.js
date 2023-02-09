import "./style.css";

export default function SearchResultsItem({ name, email }) {
    return (
        <div className="search-results-item">
            <p>{name}</p>
            <p>{email}</p>
        </div>
    );
}