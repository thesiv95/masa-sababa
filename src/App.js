import React from 'react';
import "./styles/style.sass";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";

// TODO: database
function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
