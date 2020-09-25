import React from 'react';

function menu(props) {
    return (
        <div class="sidebar-menu">
            <header class="logo">
                <a href="#" class="sidebar-icon"> <span class="fa fa-bars"></span></a><a href="index.html"><span id="logo"><h1>Augment</h1></span></a> 
            </header>
            <div style={{borderTop:'1px solid rgba(69, 74, 84, 0.7)'}}></div>
            <div class="down">	
                <a href="index.html"><img src="images/admin.jpg"/></a>
                <a href="index.html"><span class=" name-caret">Jasmin Leo</span></a>
                <p>System Administrator in Company</p>
                <ul>
                    <li><a class="tooltips" href="index.html"><span>Profile</span><i class="lnr lnr-user"></i></a></li>
                    <li><a class="tooltips" href="index.html"><span>Settings</span><i class="lnr lnr-cog"></i></a></li>
                    <li><a class="tooltips" href="index.html"><span>Log out</span><i class="lnr lnr-power-switch"></i></a></li>
                </ul>
            </div>
            <div class="menu">
                <ul id="menu" >
                    <li><a href="index.html"><i class="fa fa-tachometer"></i> <span>Dashboard</span></a></li>
                    <li id="menu-academico" ><a href="#"><i class="fa fa-table"></i> <span> Tabs &amp; Panels</span> <span class="fa fa-angle-right" style={{float: 'right'}}></span></a>
                        <ul id="menu-academico-sub" >
                            <li id="menu-academico-avaliacoes" ><a href="tabs.html"> Tabs &amp; Panels</a></li>
                            <li id="menu-academico-boletim" ><a href="widget.html">Widgets</a></li>
                            <li id="menu-academico-avaliacoes" ><a href="calender.html">Calendar</a></li>
                        </ul>
                    </li>
                    <li id="menu-academico" ><a href="#"><i class="fa fa-file-text-o"></i> <span>Ui Elements</span> <span class="fa fa-angle-right" style={{float: 'right'}}></span></a>
                        <ul id="menu-academico-sub" >
                            <li id="menu-academico-avaliacoes" ><a href="forms.html">Forms</a></li>
                            <li id="menu-academico-boletim" ><a href="validation.html">Validation Forms</a></li>
                            <li id="menu-academico-boletim" ><a href="table.html">Tables</a></li>
                            <li id="menu-academico-boletim" ><a href="Buttons.html">Buttons</a></li>
                        </ul>
                    </li>
                    <li><a href="typography.html"><i class="lnr lnr-pencil"></i> <span>Typography</span></a></li>
                    <li id="menu-academico" ><a href="#"><i class="lnr lnr-book"></i> <span>Pages</span> <span class="fa fa-angle-right" style={{float: 'right'}}></span></a>
                        <ul id="menu-academico-sub" >
                            <li id="menu-academico-avaliacoes" ><a href="Login.html">Login</a></li>
                            <li id="menu-academico-boletim" ><a href="register.html">Register</a></li>
                            <li id="menu-academico-boletim" ><a href="404.html">404</a></li>
                            <li id="menu-academico-boletim" ><a href="sign.html">Sign up</a></li>
                            <li id="menu-academico-boletim" ><a href="profile.html">Profile</a></li>
                        </ul>
                    </li>
                    <li><a href="#"><i class="lnr lnr-envelope"></i> <span>Mail Box</span><span class="fa fa-angle-right" style={{float: 'right'}}></span></a>
                        <ul>
                            <li><a href="inbox.html"><i class="fa fa-inbox"></i> Inbox</a></li>
                            <li><a href="inbox.html"><i class="fa fa-pencil-square-o"></i> Compose Mail</a></li>
                            <li><a href="editor.html"><span class="lnr lnr-highlight"></span> Editors Page</a></li>
                        </ul>
                    </li>
                    <li id="menu-academico" ><a href="#"><i class="lnr lnr-layers"></i> <span>Components</span> <span class="fa fa-angle-right" style={{float: 'right'}}></span></a>
                        <ul id="menu-academico-sub" >
                            <li id="menu-academico-avaliacoes" ><a href="grids.html">Grids</a></li>
                            <li id="menu-academico-boletim" ><a href="media.html">Media Objects</a></li>
                        </ul>
                    </li>
                    <li><a href="chart.html"><i class="lnr lnr-chart-bars"></i> <span>Charts</span> <span class="fa fa-angle-right" style={{float: 'right'}}></span></a>
                        <ul>
                            <li><a href="map.html"><i class="lnr lnr-map"></i> Maps</a></li>
                            <li><a href="graph.html"><i class="lnr lnr-apartment"></i> Graph Visualization</a></li>
                        </ul>
                    </li>
                    <li id="menu-comunicacao" ><a href="#"><i class="fa fa-smile-o"></i> <span>More</span><span class="fa fa-angle-double-right" style={{float: 'right'}}></span></a>
                        <ul id="menu-comunicacao-sub" >
                            <li id="menu-mensagens" style={{width:120}}><a href="project.html">Projects <i class="fa fa-angle-right" style={{float: 'right', marginRight: -8, marginTop: 2}}></i></a>
                                <ul id="menu-mensagens-sub" >
                                    <li id="menu-mensagens-enviadas" style={{width:130}}><a href="ribbon.html">Ribbons</a></li>
                                    <li id="menu-mensagens-recebidas"  style={{width:130}}><a href="blank.html">Blank</a></li>
                                </ul>
                            </li>
                            <li id="menu-arquivos" ><a href="500.html">500</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default menu;