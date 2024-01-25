import SatelliteAltIcon from "@mui/icons-material/SatelliteAlt";
import "./title.css";

function Title({ expanded }) {
	return (
		<div className='title_container'>
			<SatelliteAltIcon
				sx={{ mr: "10px", fontSize: "25px", color: "#775da6b0" }}
			/>
			{expanded ? <span className='title_text'>Rhombus</span> : null}
		</div>
	);
}

export default Title;
