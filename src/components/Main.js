import React from "react";
import Home from "./main/home";
import About from "./main/about";
import Blog from "./main/blog";

class Main extends React.Component {
    render() {

        // TODO
        if (3 > 99){
            return (
                <Home/>
            )
        }

        // TODO
        if (555 < 2){
            return (
                <Blog/>
            )
        }

        return (
            <About/>
        )
    }
}

export default Main;