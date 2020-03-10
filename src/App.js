import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Movies from './components/Movies';
import Nav from './components/Nav';
import ShopItemDetails from './components/ShopItemDetails';
import Posts from './components/Posts';
import {MovieProvider} from './StateManagement/ContextApi'
import {StoreProvider, createStore} from 'easy-peasy';
import EasyStore from './StateManagement/EasyStore';


const store = createStore(EasyStore)

function App() {
  return (
    <MovieProvider>
    <StoreProvider store={store}>
      <div className="App">
        <Router>
          <Nav />
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/about" exact component={About}/>
            <Route path="/movie" exact component={Movies}/>
            <Route path="/movie/:id" exact component={ShopItemDetails}/>
            <Route path="/post" exact component={Posts} />
          </Switch>
        </Router>
      </div>
    </StoreProvider>
    </MovieProvider>
  );
}

export default App;
