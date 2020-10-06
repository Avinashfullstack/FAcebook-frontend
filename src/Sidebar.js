import React from 'react'
import SidebarRow from './SidebarRow'
import './Sidebar.css';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital'
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags'
import PeopleIcon from '@material-ui/icons/People'
import StorefrontIcon from '@material-ui/icons/Storefront'
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary'
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined'
import ChatIcon from '@material-ui/icons/Chat';

function Sidebar() {
	return <div className="sidebar">
        <SidebarRow src ="https://avatars3.githubusercontent.com/u/52810549?s=400&u=1b08809f711decc10cd524783b4c3db6411ffd86&v=4"  title ="Avinash"/>
         <SidebarRow Icon ={LocalHospitalIcon}
        title="covid-19 information center" />
        <SidebarRow Icon ={EmojiFlagsIcon}  title ="Pages"/>
        <SidebarRow Icon ={PeopleIcon}  title ="Friends"/>
        <SidebarRow Icon ={ChatIcon}  title ="Messenger"/>
        <SidebarRow Icon ={StorefrontIcon}  title ="Marketplace"/>
        <SidebarRow Icon ={VideoLibraryIcon}  title ="Videos"/>
        <SidebarRow Icon ={ExpandMoreOutlinedIcon   }  title ="Marketplace"/> 

    </div>;
}

export default Sidebar;
