import React from "react";
import {Route, Switch} from 'react-router-dom';
import Home from "./main/Home";
import About from "./main/About";
import Blog from "./main/Blog";
import FullArticle from "./main/Blog/FullArticle";
import ProfileReg from "./ProfileReg";
import LogIn from "./main/LogIn";
import NotFound404 from "./main/NotFound404";


class Main extends React.Component {
    render() {

        return (
            <main className='main'>
                <div className="main_fetcherror">
                </div>
                <Switch>
                    <Route path='/' exact component={Home}/>
                    <Route path='/about' component={About}/>
                    <Route path='/blog' component={Blog}/>
                    <Route path='/profile' component={ProfileReg}/>
                    <Route path='/login' component={LogIn}/>
                    <Route path='/fullarticle' component={FullArticle} />
                    
                    <Route component={NotFound404}/>
                </Switch>
            </main>
        )
    }
}
// Route Render - to share props through the router

export default Main;