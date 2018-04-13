import React from "react";
import ReactDOM from "react-dom";
import Particles_ from 'react-particles-js'
import { Navbar, NavItem, Icon } from 'react-materialize'
import './wrap.css'
class Particles extends React.Component {
	render() {
		return (
			<div style={{
				width: '100vw',backgroundColor:'#000000'}}>


				<Particles_
					style={{
						width: '100%', position: "fixed",
						top: 0,
						left: 0,
						width: "100%"
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
				
			</div>
		);
	}
}

export default Particles;