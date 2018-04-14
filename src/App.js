import React, { Component } from 'react';
// import { connect } from 'react-redux';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom'
import Full from './Container/Full';
function mapStateToProps(state) {
    return {

    };
}

class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path={"/"} name="Home" component={Full}/>
                </Switch>
            </Router>
        );
    }
}
export default App;