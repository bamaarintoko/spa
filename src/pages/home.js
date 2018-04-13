import React from "react";
import ReactDOM from "react-dom";
import Particles_ from 'react-particles-js'
import { Navbar, NavItem, Icon } from 'react-materialize';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
// import styles from './wrap.css'
// import './a.css'
class PageHome extends React.Component {
	constructor(props) {
		super(props);
		this.scrollToTop = this.scrollToTop.bind(this);
	}
	scrollToTop() {
		scroll.scrollToTop();
	}
	componentDidMount() {

		Events.scrollEvent.register('begin', function () {
			console.log("begin", arguments);
		});

		Events.scrollEvent.register('end', function () {
			console.log("end", arguments);
		});

	}
	componentWillUnmount() {
		Events.scrollEvent.remove('begin');
		Events.scrollEvent.remove('end');
	}
	render() {
		return (
			<div>				
				<Navbar brand='malaskoding.com' right style={{ backgroundColor: '#212121', border: 0 }}>
					<Link style={{ display: 'inline-block',}} activeClass="active" to="firstInsideContainer" smooth={true} duration={250} containerId="containerElement" >Home</Link>
					<Link style={{ display: 'inline-block',}} activeClass="active" to="secondInsideContainer" smooth={true} duration={250} containerId="containerElement">Our Team</Link>
					<NavItem href='#'>Our Story</NavItem>
					<NavItem href='#'>About</NavItem>
				</Navbar>
				<Element id="containerElement" style={{
					position: 'relative',
					height: (window.innerHeight-64)+'px',
					width: '100%',
					overflow: 'scroll',
				}}>
					<Element name="firstInsideContainer" style={{
						height: '100vh',
						width: '100vw',
						backgroundColor:'#212121'
					}}>
					<Particles_
					style={{
						top: 0,
						left: 0,
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
						first element inside container
          			</Element>

					<Element name="secondInsideContainer" style={{
						height: '100vh',
						width: '100vw',
						backgroundColor:'blue'
					}}>
						second element inside container
          			</Element>
				</Element>
			</div>
		);
	}
}

export default PageHome;