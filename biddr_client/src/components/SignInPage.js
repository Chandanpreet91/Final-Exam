import React from 'react';

const SignInPage = ({handleSubmit,history }) => {
        function OnSubmit(event) {
            event.preventDefault();
            const {currentTarget} = event;
            const formData = new FormData(currentTarget);
         
            handleSubmit({
                email: formData.get('email'),
                password: formData.get('password')
            });
            history.push('/auctions')
        }

  return(
    <div className = 'container'>
      <h1>Sign In</h1>
      <form onSubmit={ OnSubmit }>
        <div>
          <label htmlFor='email'>Email</label>
          <br/>
          <input id='email' type='email' name='email' />
        </div>
          <div>
          <label htmlFor='password'>Password</label>
          <br/>
          <input id='password' type='password' name='password' />
        </div>
        <br/>
        <input type='submit' value='Sign In' />
      </form>
      </div>
  )
}

export default SignInPage;