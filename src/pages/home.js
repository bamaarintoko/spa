import React from "react";
import ReactDOM from "react-dom";
import Particles_ from 'react-particles-js'
import { Navbar, NavItem, Icon } from 'react-materialize'
// import styles from './wrap.css'
// import './a.css'
class PageHome extends React.Component {
    render() {
        return (
            <div style={{height: '100vh',
            width: '100vw',backgroundColor:'#212121'}}>

                <Particles_
					style={{
						width: '100%', position: "fixed",
						top: 0,
						left: 0,
						width: "100%",
						height: "100%"
					}}
					params={{
						particles: {
							number: {
								value: 100
							},
							line_linked: {
								shadow: {
									enable: false,
									color: "#E65100",
									blur: 5
								}
							},
							color: {
								value: '#FF6D00'
							},
							size: {
								value: 4,
								anim: {
									enable: true
								}

							},
							shape: {
								type: 'triangle'
							}
						}
					}} />
                <Navbar brand='malaskoding.com' right style={{ backgroundColor: '#212121', border: 0 }}>
                    <NavItem href='#'>Home</NavItem>
                    <NavItem href='#'>Our Team</NavItem>
                    <NavItem href='#'>Our Story</NavItem>
                    <NavItem href='#'>About</NavItem>
                </Navbar>
            </div>
        );
    }
}

export default PageHome;