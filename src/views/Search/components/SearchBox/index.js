import { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import "./style.css";

export default function SearchBox({ onSearch, onClose, isSearching }) {
    const [searchText, setSearchText] = useState("");

    const handleSearchClick = () => {
        setSearchText("");
        onClose();
    }

    return (
        <div className="search-box">
            <h2 className="search-box-title">Employee Search</h2>
            <div className="search-box-buttons">
                <TextField
                    id="search-term"
                    label="Name or phone number"
                    variant="outlined"
                    value={searchText}
                    onChange={({ target: { value } }) => setSearchText(value)}
                    className="search-box-input" />
                <Button
                    variant="contained"
                    onClick={() => onSearch(searchText)}
                    disabled={!searchText.length}>
                    Search
                </Button>
                {isSearching && <Button variant="outlined" onClick={handleSearchClick} disabled={!searchText.length}>Close</Button>}
            </div>
        </div>
    );
}
