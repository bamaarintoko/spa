import React from "react";
import ReactDOM from "react-dom";
import Particles from '../Components/Particles'
import {Navbar, NavItem, Icon} from 'react-materialize'
// import styles from './wrap.css'
// import './a.css'
class PageHome extends React.Component {
	render() {
		return (
			<Particles>
                <Navbar brand='logo' right>
                    <NavItem href='get-started.html'><Icon>search</Icon></NavItem>
                    <NavItem href='get-started.html'><Icon>view_module</Icon></NavItem>
                    <NavItem href='get-started.html'><Icon>refresh</Icon></NavItem>
                    <NavItem href='get-started.html'><Icon>more_vert</Icon></NavItem>
                </Navbar>
            </Particles>
		);
	}
}

export default PageHome;