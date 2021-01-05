import React, { Component } from 'react'
import { User } from '../requests'

export class SignUpPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            userParams: {
                first_name: '',
                last_name: '',
                email: '',
                password: '',
                password_confirmation: ''
            }
        }
    }
    handleSubmit(){
        User.create(this.state.user);

    }

    
    render() {
        const { first_name, last_name, email, password, password_confirmation } = this.state.user;
        return (
            <div>
               <h1>Sign Up</h1>
               
               <form onsubmit ={this.handleSubmit}>
                   <div>
                   <label htmlFor ='first_name'>First Name</label>
                   <input type='text' id='first_name' name='first_name' value = {first_name}></input>
                   </div>
                   <div>
                   <label htmlFor ='last_name'>Last Name</label>
                   <input type='text' id='last_name' name='last_name' value = {last_name}></input>
                   </div>
                   <div>
                   <label htmlFor ='email'>Email</label>
                   <input type='email' id='email' name='email' value = {email}></input>
                   </div>
                   <div>
                   <label htmlFor ='password'>Password</label>
                   <input type='password' id='password' name='password'value = {password}></input>
                   </div>
                   <div>
                   <label htmlFor ='password_confirmation'>Password_confirmation'</label>
                   <input type='password_confirmation' id='password_confirmation' name='password_confirmation' value = {password_confirmation}></input>
                   </div>
                   <input type='submit' value='Create'></input>
               </form>
            </div>
        )
    }
}

export default SignUpPage

