import React from "react";
import {BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch} from 'react-router-dom';
import Home from "./main/home";
import About from "./main/about";
import Blog from "./main/blog";
import NotFound404 from "./main/notfound404";

class Main extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/about' component={About}/>
                <Route path='/blog' component={Blog}/>
                <Route path='*' component={NotFound404}/>
            </Switch>
        )
    }
}


export default Main;