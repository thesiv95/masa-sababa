import React from 'react';
import "./styles/style.sass";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";


function App() {
  return (
    <React.Fragment>
      <Header/>
      <Main/>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
