import React, { Component } from 'react'
import { User } from '../requests'

class SignUpPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            user: {
                first_name: '',
                last_name: '',
                email: '',
                password: '',
                password_confirmation: ''
            }
        }
        this.handleInput = this.handleInput.bind(this)
    }
    handleSubmit(){
        User.create(this.state.user);

    }

    handleInput(event){
        console.log(event.target.name);
        console.log(event.target.value);
        this.setState((state) => {
            const userCopy = JSON.parse(JSON.stringify(state.user))
            
            return {
                user: {
                    ...userCopy,
                    [event.target.name]: event.target.value
                }
            }
        })
    }
    render() {
        
        return (
            <div>
               <h1>Sign Up</h1>
               
               <form className="container"onSubmit ={this.handleSubmit}>
                   <div>
                   <label htmlFor ='first_name'>First Name</label><br/>
                   <input type='text' id='first_name' name='first_name' value = {this.state.user.first_name} onChange={this.handleInput}></input>
                   </div>
                   <div>
                   <label htmlFor ='last_name'>Last Name</label><br/>
                   <input type='text' id='last_name' name='last_name' value = {this.state.user.last_name} onChange={this.handleInput}></input>
                   </div>
                   <div>
                   <label htmlFor ='email'>Email</label><br/>
                   <input type='email' id='email' name='email' value = {this.state.user.email} onChange={this.handleInput}></input>
                   </div>
                   <div>
                   <label htmlFor ='password'>Password</label><br/>
                   <input type='password' id='password' name='password' value = {this.state.user.password} onChange={this.handleInput}></input>
                   </div>
                   
                   <div>
                   <label htmlFor ='password_confirmation'>Password_confirmation'</label><br/>
                  <input type='password_confirmation' id='password_confirmation' name='password_confirmation' value = {this.state.user.password_confirmation} onChange={this.handleInput}></input>
                   
                   </div>
                   <input type='submit' value='Create'></input>
               </form>
            </div>
        )
    }
}

export default SignUpPage

