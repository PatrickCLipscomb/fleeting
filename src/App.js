import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom'
import Footer from './components/Footer'
import AirProviders from './components/AirProviders'
import ProviderOptions from './components/ProviderOptions'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app-body">
        <div className="nav-bar">
          <div className="header-content">
            <Link to="/"><h1>DEMO</h1></Link>
            <span>Log In</span>
          </div>
        </div>
        <main>
        <Switch>
          <Route exact path="/air" component={AirProviders} />
          <Route exact path="/ocean" component={AirProviders} />
          <Route exact path="/customBroker" component={AirProviders} />
          <Route exact path="/" component={ProviderOptions} />
        </Switch>
        </main>
        <Footer />
      </div>
    )
  }
}

export default App
