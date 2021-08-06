import React from 'react'
import './App.css';
import Home from './Home';
import About from './About';
import Service from './Service';
import Contact from './Contact';
import Navbar from './Navbar';
import Blogs from './Blogs';
import Login from './Login'
import { Switch,Route,Redirect } from 'react-router';
import {CookiesProvider} from 'react-cookie'
function App() {
  
  return (
    <>
      <Navbar />
      <CookiesProvider>
      <Switch>
        <Route exact path='/' component = {Login} />
        <Route exact path='/Home' component = {Home} />
        <Route exact path='/About' component = {About} />
        <Route exact path='/Service' component = {Service} />
        <Route exact path='/Contact' component = {Contact} />
        <Route exact path='/Blogs' component = {Blogs}  />
        <Redirect to='/' />
      </Switch>
      </CookiesProvider>
    </>
  );
}

export default App;
