import React from 'react'
import { Component } from 'react';
import * as Action from '../../_Actions/user.action';
import { connect } from  'react-redux'
class Login extends Component
{
    constructor(props)
    {
        super(props);
        this.state = { email: '',password:'' ,submit:false};
    }    

    handOnchange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({[name]:value });
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({ submit:true});
        let user = {
            email:this.state.email,
            passsword: this.state.password
        }
        if(this.submit && user.email && user.passsword )
            this.props.login(user);

    }

    render()
    {
        const {email,password} = this.state;
        return (
            <div>
                 <form name="form" onSubmit={this.handleSubmit}>
                    <input  type="text" className="form-control" name="email" placeholder="Email" value={email} onChange={this.handOnchange} />
                    <input  type="password" className="form-control" name ="password" placeholder="Password" value={password} onChange={this.handOnchange} />
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