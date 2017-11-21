import React, { Component } from 'react';
import Header from './components/Header';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './components/Home';
import Data from './components/Data';
import DB from './components/DB';
import Test from './components/Test';
import StarWars from './components/StarWars';
import Pokemon from './components/Pokemon';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header>React Study</Header>
        
        <Switch>
          <Route exact path="/" render={props => <Home {...props} msg="Welcome home" />}/>
          <Route path="/data" render={props => <Data {...props} msg="Check out my data" />}/>
          <Route path="/db" render={props => <DB {...props} msg="DB" />}/>
          <Route path="/test" render={props => <Test {...props} msg="Testing, testing, 1, 2, 3..." />}/>
          <Route path="/starwars" render={props=> <StarWars {...props} msg="A long time ago ..." />}/>
          <Route path="/pokemon" render={props => <Pokemon {...props} msg="Gotta catch 'em all!" />}/>
          <Redirect from="*" to="/" />
        </Switch>
      </div>
    );
  }
}

export default App;