import CustomAvatar from './Avatar/Avatar';
import SearchIcon from '@mui/icons-material/Search';
import './topBar.css'
import SearchBar from './SearchBar/SearchBar';

function TopBar() {
    return (
        <div className="topBar_container" >
           <SearchBar />
            <CustomAvatar />
        </div>
    )
}

export default TopBar;