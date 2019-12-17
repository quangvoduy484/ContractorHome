import React from 'react'
import { Component } from 'react';
import * as Action from '../../_actions/user.action'
import { connect } from  'react-redux'
class Login extends Component
{
    constructor(props)
    {
        super(props);
        this.state = { username: '',password:'' ,submit:false};
    }    

    handOnchange = event => {
        const {name,value} = event;
        this.setState({[name]:value });
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({ submit:true});
        let user = {
            username:this.state.username,
            passsword: this.state.password
        }
        if(this.submit && user.username && user.state.password )
            this.props.login(user);

    }

    render()
    {
        const {username,password} = this.state;
        return (
            <div>
                 <form name="form" onSubmit={this.handleSubmit}>
                 <input  type="text" className="form-control" placeholder="Username" value={username} onChange={this.handOnchange} />
                 <input  type="password" className="form-control" placeholder="Password" value={password} onChange={this.handOnchange} />
                      <button >Login</button>
                 </form>
            </div>
        )
    }
}

const mapDispactchToProps = dispatch => {
    return { login : user => dispatch(Action.Login(user))}
}


export default connect(null,mapDispactchToProps)(Login)