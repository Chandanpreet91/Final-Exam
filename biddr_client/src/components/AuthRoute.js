import React from 'react'
import {Route, Redirect} from 'react-router-dom'

const AuthRoute = (props) => {
    const { isAllowed, component: Component, ...restProps } = props;

    return (
        <Route 
        {...restProps}
        render={
            (routeProps) => {
                if (isAllowed){
                    return <Component {...restProps} />
                }else{
                    return <Redirect to= '/sign_in' />
                }
            }
        }
        />
    )
}
export default AuthRoute;