import SatelliteAltIcon from '@mui/icons-material/SatelliteAlt';
import "./title.css"

function Title() {
    return (
        <div className="title_container">
            <SatelliteAltIcon sx={{mr:"10px", fontSize: "25px", color: "#775da6b0"}}/>
            <span className="title_text">Rhombus
            </span>
        </div>
    )
}

export default Title