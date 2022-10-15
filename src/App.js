import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Nav from './Compo/Nav';
import Home from './Compo/Home';
import  Cards  from './Compo/Cards'
// import Choose from './Compo/Choose';
import  CardGroups  from './Compo/CardGroups';
import Carousel from './Compo/Carousel';
import Form from './Compo/Form';
import Footer from './Compo/Footer';
function App() {
  return (
    <div className="App">
    {/* <Nav/> */}

    <Home/>
<br></br>
    <Cards/>
    {/* <Choose/> */}
    <br></br>

    <CardGroups/>
    <br></br>
    <Carousel/>
    <br></br>
    <Form/>
    <Footer/>
    </div>
  );
}

export default App;
