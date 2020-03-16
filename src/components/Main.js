import React from "react";
import {Route} from 'react-router-dom';
import Home from "./main/Home";
import About from "./main/About";
import Blog from "./main/Blog";
import FullArticle from "./main/Blog/FullArticle";
import Profile from "./Profile";
import NotFound404 from "./main/NotFound404";


class Main extends React.Component {
    render() {
        let d = new Date();
        return (
            <main className='main'>
                <Route path='/' exact component={Home}/>
                <Route path='/about' component={About}/>
                <Route path='/blog' component={Blog}/>
                <Route path='/profile' component={Profile}/>
                <Route path='/fullarticle' render={() =>
                    <FullArticle author={'Moshe Dayan'} day={d.getDate()} month={d.getMonth()} year={d.getFullYear()} />
                }/>
                <Route path='*' component={NotFound404}/>
            </main>
        )
    }
}
// Route Render - to share props through the router

export default Main;