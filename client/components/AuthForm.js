import React, { Component } from "react";


class AuthForm extends Component {

    constructor(props){
        super(props);

        this.state = { email : '', password: ''}
    }

    onSubmit(event){
        event.preventDefault();

        //calling the onSubmit function of the parent element
        this.props.onSubmit(this.state);
    }

    render() {
        const { errors } = this.props;
        return (
            <div className="row">
                <form onSubmit={this.onSubmit.bind(this)} className="col s6" >
                    <div className="input-field">                        
                        <input 
                         placeholder="Email"
                         value={this.state.email} 
                         onChange={e => this.setState({ email: e.target.value })}
                        />
                    </div>
                    <div className="input-field">
                        <label>Password</label>
                        <input 
                         placeholder="Password"
                         type="password"                         
                         value={this.state.password}
                         onChange={e => this.setState({ password: e.target.value })}
                        />
                    </div>

                    <div className="errors">
                     { errors && errors.map(error => <div key={error}>{error}</div>)}
                    </div>                

                    <button className="btn">Submit</button>
                </form>
            </div>
        );
    }
}

export default AuthForm;