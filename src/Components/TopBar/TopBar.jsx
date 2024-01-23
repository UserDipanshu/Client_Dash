import CustomAvatar from './Avatar/Avatar';
import SearchIcon from '@mui/icons-material/Search';
import './topBar.css'

function TopBar() {
    return (
        <div className="topBar_container" >
            <input type="text" id="searchBar" placeholder='Search...'/>
            <CustomAvatar />
        </div>
    )
}

export default TopBar;