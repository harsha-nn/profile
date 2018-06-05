import React, { Component } from 'react';
import './App.css';
import 'tachyons';
import Navigation from './components/Navigation';
import '@material-ui/core';
import { Button } from '@material-ui/core';
import Port from './components/Port';
import Db from './components/Db';
import About from './components/About';
import Contact from './components/Contact';
import Sw from './components/Sw';

class App extends Component {
  constructor(){
    super()
    this.state ={
      route:'home'
    }
  }
  onRouteChange= (route) => {
    console.log(route);
    switch(route){
      case 'Db': this.setState({route:'Db'}); console.log(this.state.route);break;
      case "Sw": this.setState({route:'Sw'}); console.log(this.state.route);break;
      case "Port": this.setState({route:'Port'}); console.log(this.state.route);break;
      case 'About': this.setState({route:'About'});console.log(this.state.route); break;
      case 'Contact': this.setState({route:'Contact'});console.log(this.state.route); break;
      default: this.setState({route:'home'}); console.log(this.state.route);
    }
  }
  loadPage = (page) => {
    switch(page){
      case 'Db': return <Db />;break;
      case "Sw": return <Sw />; break;
      case "Port": return <Port />; break;
      case 'About': return <About />; break;
      case 'Contact': return <Contact />; break;
      default:  {this.setState({route:'home'})}; break;
    }
  }
  render() {
    return (
      <div className="App">
        <header>
          <Navigation onRouteChange={this.onRouteChange}/>         
        </header>
        { this.state.route !== 'home'? this.loadPage(this.state.route)
          :<p >
              <Button variant="contained" color="primary" />
              This is Body
           </p> 
          }        
      </div>
    );
  }
}

export default App;
