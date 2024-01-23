import Avatar from '@mui/material/Avatar';
import "./avatar.css"

function CustomAvatar() {
    return (
        <div className='userInfo_container'>
        <Avatar />
        <span className='username'>Dips Dev</span>
        </div>
    )
}

export default CustomAvatar;