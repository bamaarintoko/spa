import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { Navbar, NavItem, Icon } from 'react-materialize';
function mapStateToProps(state) {
    return {

    };
}

export class Header extends Component {
    render() {
        return (
            <Navbar brand='' right style={{ backgroundColor: '#212121', border: 0, position: 'absolute' }}>
                <NavItem>Home</NavItem>
                <NavItem >Our Team</NavItem>
                <NavItem href='#'>Our Story</NavItem>
                <NavItem href='google.com'>About</NavItem>
            </Navbar>
        );
    }
}

