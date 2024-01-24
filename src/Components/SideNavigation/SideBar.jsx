import Navigation from "./Navigation/Navigation"
import Title from "./Title/Title"
import "./sideBar.css"

function SideBar() {
    return (
        <div className="sidebar_container">
            <Title />
        <Navigation />
        </div>
    )
}


export default SideBar