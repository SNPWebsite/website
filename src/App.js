import React from 'react';
import { Router, Route, Switch } from "react-router-dom";
import logo from './logo.svg';
import {createBrowserHistory} from 'history';
import Home from './webpages/Home/JS/home';
import Books from './webpages/Books/JS/books';
import Teachings from './webpages/Teachings/JS/teachings';
import './App.css';
import About_Us from './webpages/About_Us/JS/About_Us';
import Events from './webpages/Events/JS/Events';
import About_Us_Guru_More from './webpages/About_Us/JS/About_Us_Guru_More';
import {_Guru_Card, _Guru_Institution} from './data/About_Us_Card';
const history = createBrowserHistory();

function App() {
  return (
    <div>
      <Router history={history}>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/books" component={Books} />
            <Route exact path="/teachings" component={Teachings}/>
            <Route exact path="/events" component={Events}/>
            <Route exact path="/more_about_guru" render={props => <About_Us_Guru_More title={_Guru_Card[0].guru_name} quote={_Guru_Card[0].guru_quote} desc={_Guru_Card[0].guru_long_desc} img={_Guru_Card[0].guru_img}/>}/>
            <Route exact path="/more_about_institution" render={props => <About_Us_Guru_More title={_Guru_Institution[0].institution_name} quote={_Guru_Institution[0].institution_quote} desc={_Guru_Institution[0].institution_long_desc} img={_Guru_Institution[0].institution_img}/>}/>
            <Route exact path="/about" component={About_Us}/>
          </Switch>
        </div>
      
      </Router>
    </div>
  );
}

export default App;
