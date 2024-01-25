import AcUnitIcon from '@mui/icons-material/AcUnit';
import FeedIcon from '@mui/icons-material/Feed';
import SimCardIcon from '@mui/icons-material/SimCard';
import DataUsageIcon from '@mui/icons-material/DataUsage';
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import "./navigation.css"
import { useState } from 'react';


const navItems=[
    {title: 'Overview', image: <AutoAwesomeMotionIcon sx={{fontSize:"35px", mt: "7px"}}/> },
    {title: 'Companies', image: <SimCardIcon sx={{fontSize:"33px", mt: "7px"}}/> },
    {title: 'Deals', image: <DataUsageIcon sx={{fontSize:"33px", mt: "7px"}}/> },
    {title: 'Feed', image: <FeedIcon sx={{fontSize:"33px", mt: "7px"}}/> },
    {title: 'Stats', image: <AccountBalanceWalletIcon sx={{fontSize:"33px", mt: "7px"}}/> },
    {title: 'Reports', image: <AcUnitIcon sx={{fontSize:"33px", mt: "7px"}}/> },
    
];


function Navigation( {expanded} ) {
    const [activeTabIndex, setActiveTabIndex]  = useState(0)

    function handlePageChange(ind) {
        setActiveTabIndex(ind)
    }

    return (
			<div className='navigation_container'>
				{navItems.map((items, ind) => (
					<div
						className={`nav_item_cont ${
							activeTabIndex === ind ? "active" : ""
						}`}
						key={ind + items.title}
						onClick={() => handlePageChange(ind)}
					>
						<div
							className={`nav_item_img ${
								activeTabIndex === ind ? "active" : ""
							}`}
						>
							{items.image}
						</div>
						{ expanded ? 
							<div
								className={`nav_item_text ${
									activeTabIndex === ind ? "active" : ""
								}`}
							>
								{items.title}
							</div>
                            :
                            null
						}
					</div>
				))}
			</div>
		);
}

export default Navigation