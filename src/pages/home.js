import React from "react";
import ReactDOM from "react-dom";
import Particles_ from 'react-particles-js'
import { Navbar, NavItem, Icon } from 'react-materialize';
// import styles from './wrap.css'
// import './a.css'
class PageHome extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div style={{
				height: "100vh",
				width: '100vw'
			}}>
				<div style={{
					backgroundColor: '#212121', height: '100vh',
					width: '100%'
				}}>

					<Particles_
						style={{
							position: "fixed",
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
						
					<Navbar brand='' right style={{ backgroundColor: '#212121', border: 0, position:'absolute' }}>
						<NavItem>Home</NavItem>
						<NavItem >Our Team</NavItem>
						<NavItem href='#'>Our Story</NavItem>
						<NavItem href='google.com'>About</NavItem>
					</Navbar>
					<div style={{position:'absolute', bottom:0}}>
							<h2>aaaaaaa</h2>
						</div>
				</div>
			</div>
		);
	}
}

export default PageHome;