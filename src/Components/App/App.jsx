import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,

} from "react-router-dom";
import { Component } from "react";
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import { Provider } from "react-redux";
import { store } from "../../store";

import UserCategoriesContainer from "../../Containers/Categories/UserCategoriesContainer";
import UserHomePage from "../../Containers/UserHomePage/UserHomePage";
import UserShowLamps from "../../Containers/UserShowLamps/UserShowLamps";
import UserCartContainer from "../../Containers/UserCartContainer/UserCartContainer";
import UserRegistration from "../../Containers/UserRegistration/UserRegistration";
import { NotFound } from "../NotFound/NotFound";





class App extends Component {
    render() {

        return (
            <>
                <Provider store={store}>
                    <Router>
                        <UserCategoriesContainer />
                        <Switch >
                            <Route path="/home">
                                <UserHomePage />
                            </Route>
                            <Route path="/interior-ceiling">
                                <UserShowLamps path={'interior-ceiling'} />
                            </Route>
                            <Route path="/floor-lamps">
                                <UserShowLamps path={'floor-lamps'} />
                            </Route>
                            <Route path="/exterior-ceiling">
                                <UserShowLamps path={'exterior-ceiling'} />
                            </Route>
                            <Route path="/table-lamps">
                                <UserShowLamps path={'table-lamps'} />
                            </Route>
                            <Route path="/card-list">
                                <UserCartContainer path={'card-list'} />
                            </Route>
                            <Route path="/user-profile">
                                <UserRegistration path={'user-profile'} />
                            </Route>
                            <Route path="/not-found">
                                <NotFound />
                            </Route>
                            <Route path="/">
                                <Redirect to="/not-found" />
                            </Route>
                        </Switch>
                    </Router>
                </Provider>
            </>
        )
    }
}

export default App;