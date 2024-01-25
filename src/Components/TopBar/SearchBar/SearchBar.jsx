import SearchIcon from "@mui/icons-material/Search";
import "./searchBar.css";

function SearchBar() {
	return (
		<div className="searchBarContainer">
			<input type='text' id='searchBar' placeholder='Search...' />
			<button className="searchButton">
				<SearchIcon />
			</button>
		</div>
	);
}

export default SearchBar;
