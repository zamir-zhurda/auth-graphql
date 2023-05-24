import React, {Component} from "react";
import AuthForm from "./AuthForm";
import { graphql } from 'react-apollo';
import signup from "../mutations/signup";
import fetchCurrentUser from "../queries/fetchCurrentUser";
import { hashHistory } from "react-router";


class SignUpForm extends Component {
    constructor(props){
        super(props);

        this.state = { errors : [] };
    }

    componentWillUpdate(nextProps){
        // this.props  //the old, current set of props
        // nextProps // the next set of props that will be in place on our component when it will rerender next time
        console.log("this.props: ", this.props);
        console.log("nextProps: ", nextProps);

        if(!this.props.data.user && nextProps.data.user){
            //redirect to dashboard
            hashHistory.push('/dashboard');
        }
    }

    onSubmit({ email, password }){
        this.props.mutate({
            variables: { email, password },
            refetchQueries: [{ query: fetchCurrentUser }]
        }).catch( response => { 
            const errors = response.graphQLErrors.map(error => error.message);
            this.setState({ errors })            
         });
    }

    render() {
        return (
            <div>
                <h3>Sign Up</h3>
                <AuthForm 
                errors={ this.state.errors }
                onSubmit={this.onSubmit.bind(this)} />
            </div>
        );
    }
}
export default  graphql(fetchCurrentUser) (
    graphql(signup) (SignUpForm) 
);