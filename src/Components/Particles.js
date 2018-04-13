import React from "react";
import ReactDOM from "react-dom";
import Particles_ from 'react-particles-js'
// import './a.css'
class Particles extends React.Component {
	render() {
		return (
			<div style={{ backgroundColor: '#212121' }}>
				<Particles_
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
							color:{
								value:'#FF6D00'
							},
							size:{
								value:4,
								anim:{
									enable:true
								}
								
							},
							shape:{
								type:'triangle'
							}
						}
					}} />
			</div>
		);
	}
}

export default Particles;