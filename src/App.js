import Landing from './components/landing-page/Landing'
import CustomNav from './components/CustomNav'
import Footer from './components/Footer'
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import About from './components/About';
import Services from './components/Services';

function App() { 
  return (
    <React.Fragment>
      <CustomNav />
      <Switch>
        <Route path="/" component={Landing} exact />
        <Route path="/about" component={About} exact />
        <Route path="/service-shipping" component={Services} exact />
      </Switch>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
