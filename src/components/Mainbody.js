import React from 'react'; 
import  Contact from './Contact';
import  Home from './Home';
import  About from './About';
import { Editor } from './Editor';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
const Mainbody = () =>{

    return(
    <BrowserRouter> 
      <Route exact path="/" component ={Home} />
      <Route path="/home" component ={Home} />
      <Route path="/contact" component ={Contact} />
      <Route path="/about" component ={About} />
      <Route path="/playground" component ={Editor} />
    </BrowserRouter>
    );
}
export default Mainbody;