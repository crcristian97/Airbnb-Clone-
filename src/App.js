import React from 'react';
import './App.css';
import Header from './Header';
import SearchPage from './SearchPage';
import Footer from './Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import  Home  from './Home';

function App() {
  return (
    <div className="app">
      <Router>
       <Header />
        <Switch>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
          <Footer />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
