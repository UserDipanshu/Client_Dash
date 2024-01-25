import SideBar from "./Components/SideNavigation/SideBar";
import Main from "./Components/Main/Main";
import "./app.css";

function App() {
	return (
		<div className='app_container'>
			<SideBar />
			<Main />
		</div>
	);
}

export default App;
