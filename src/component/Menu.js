import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function menu(props) {
    return (
        <div class="sidebar-menu">
            <header class="logo">
                <a href="#" class="sidebar-icon"> <span class="fa fa-bars"></span></a><a href="index.html"><span id="logo"><h1>Pippi</h1></span></a> 
            </header>
            <div style={{borderTop:'1px solid rgba(69, 74, 84, 0.7)'}}></div>
            <div class="down">	
                <a href="index.html"><img src="images/umi_shio.jpg" width="80"/></a>
                <a href="index.html"><span class=" name-caret">Sashimi</span></a>
                <p>Pippi Dashboard</p>
                <ul>
                    <li><Link class="tooltips" to="/"><span>Profile</span><i class="lnr lnr-user"></i></Link></li>
                    <li><a class="tooltips" href="index.html"><span>Settings</span><i class="lnr lnr-cog"></i></a></li>
                    <li><a class="tooltips" href="index.html"><span>Log out</span><i class="lnr lnr-power-switch"></i></a></li>
                </ul>
            </div>
            <div class="menu">
                <ul id="menu" >
                    <li><Link to="/"><i class="fa fa-tachometer"></i> <span>Dashboard</span></Link></li>
                    <li><Link to="/pippiSay"><i class="lnr lnr-book"></i> <span>Pippi Say</span></Link></li>
                    <li><Link to="/pippiLive"><i class="lnr lnr-book"></i> <span>Pippi Ngingetin Live</span></Link></li>
                    <li><Link to="/pippiCollab"><i class="lnr lnr-book"></i> <span>Pippi Ngingetin Collab</span></Link></li>
                </ul>
            </div>
        </div>
    );
}

export default menu;