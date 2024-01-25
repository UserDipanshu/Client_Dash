import { useState, useEffect } from "react";
import Navigation from "./Navigation/Navigation";
import Title from "./Title/Title";
import "./sideBar.css";

function SideBar() {
	const[expanded, setExpanded] = useState(true);

	useEffect(() => {
		const updateWindowDimensions = () => {
			setExpanded(document.documentElement.clientWidth > 1140);
		};

		window.addEventListener("resize", updateWindowDimensions);
		updateWindowDimensions(); 
	}, []);

	return (
		<div className={`sidebar_container ${expanded ? 'expand' : 'shrinked'}`}>
			<Title expanded={expanded} />
			{/* <CompNavigation /> */}
			<Navigation expanded={expanded} />
		</div>
	);
}

export default SideBar;
