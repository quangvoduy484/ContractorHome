import React from 'react'
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import  HomePage  from '../components/Hompage/hompage';
import  LoginPage  from '../components/Login/Login';
import { history } from '../_config/history.config';
import { PrivateRoute } from '../_ShareComponents/PrivateRoute';
class App extends React.Component {
    constructor(props) {
        super(props);
        
        history.listen((location, action) => {
           console.log(1);
        });
    }

    render() {
        return (
            <div className="jumbotron">
                <div className="container">
                    <div className="col-sm-8 col-sm-offset-2">
                        <Router  history={history} >
                            <Switch>
                                <PrivateRoute exact path="/" component={HomePage} />
                                <Route path="/login" component={LoginPage} />
                                <Redirect from="*" to="/" />
                            </Switch>
                        </Router>
                    </div>
                </div>
            </div>
        );
    }
}


export default App;