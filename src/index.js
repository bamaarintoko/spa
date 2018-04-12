import React from "react";
import ReactDOM from "react-dom";
import Particles from 'react-particles-js'
// import './a.css'
class App extends React.Component {
	render() {
		return (
			<div style={{ backgroundColor: '#212121' }}>
				<Particles
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
								value:5
							}
						}
					}} />
			</div>
		);
	}
}
ReactDOM.render(<App />, document.getElementById("root"));