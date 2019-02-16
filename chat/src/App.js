import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import ProjectDetails from './components/projects/ProjectDetails'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import CreateProject from './components/projects/CreateProject'
import Userinfo from './components/dashboard/Userinfo'
import Frontpage from './components/auth/Frontpage'
import About from './components/dashboard/About'
class App extends Component {
  render() {
    return (
      <BrowserRouter>
      {/* <div className="only-front-page">
        <Switch>
        <Route path='/frontpage' component={Frontpage} />
        </Switch>
      </div> */}
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/'component={Dashboard} />
            <Route path='/project/:id' component={ProjectDetails} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/create' component={CreateProject} />
            <Route path='/userinfo' component={Userinfo} />
            <Route path='/frontpage' component={Frontpage} />
            <Route path='/about' component={About} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
