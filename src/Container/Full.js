import React, { Component } from 'react';
import { Header } from '../Components/Header/Header';

import {Route, Switch} from 'react-router-dom'
import PageHome from '../pages/home';

class Full extends Component {
    render() {
        return (
            <div className="app">
                <Header/>
                <div>
                    <Switch>
                        <Route path={"/"} name="Home" component={PageHome}/>
                    </Switch>
                </div>
            </div>
        );
    }
}

export default Full