import React from "react";
import {Redirect, Route} from 'react-router-dom';
import Home from "./main/Home";
import About from "./main/About";
import Blog from "./main/Blog";
import FullArticle from "./main/Blog/FullArticle";
import Profile from "./Profile";


//import NotFound404 from "./main/NotFound404";


class Main extends React.Component {
    render() {
        return (
            <main className='main'>
                <Route path='/'>
                    {/*need redirect to avoid a bug with switching classes (home link ALWAYS had active class if path was '/')*/}
                    <Redirect to={{
                        pathname: '/home'
                    }}/>
                </Route>
                <Route path='/home' component={Home}/>
                <Route path='/about' component={About}/>
                <Route path='/blog' component={Blog}/>
                <Route path='/profile' component={Profile}/>
                <Route path='/fullarticle' component={FullArticle}/>
            </main>
        )
    }
}


export default Main;