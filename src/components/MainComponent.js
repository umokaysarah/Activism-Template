import React, { Component } from 'react';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import Advocate from './AdvocateComponent';
import Educate from './EducateComponent';
import Support from './SupportComponent';
import { Switch, Route, Redirect } from 'react-router-dom';


class Main extends Component{

      render() {


        const HomePage = () => {
          return(
              <Home 
              />
          );
        }
        return (
          <div>
            <Header />
            <Switch>
              <Route path='/home' component={HomePage} />
              <Route path='/educate' component={Educate} />
              <Route path='/support' component={Support} />
              <Route path='/advocate' component={Advocate} />
              <Redirect to="/home" />
            </Switch>
          </div>
        );
      }

}
export default Main;