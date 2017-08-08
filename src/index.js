import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './Styles/index.css';
//import App from './Components/App';
import registerServiceWorker from './registerServiceWorker';


import BaseLayout from './Components/baseLayout';
import Home from './Components/Home';
import Camping from './Components/camping';
import Hiking from './Components/hiking';
import Fishing from './Components/fishing';
// import About from './components/About';
// import Contact from './components/Contact';


ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route path="/camping" component={Camping} />
        <Route exact path="/" component={Home} />
        <Route path="/fishing" component={Fishing} />
        <Route path="/Hiking" component={Hiking} />
        {/* <Route path="/Hiking" component={Hiking} />
        <Route path="/Fishing" component={Fishing} />
        <Route path="/About" component={About} />
        <Route path="/Contact" component={Contact} /> */}
      </Switch>
    </BaseLayout>
  </BrowserRouter>

  , document.getElementById('root'));
registerServiceWorker();
