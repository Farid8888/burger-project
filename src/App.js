// import React, { Component } from 'react';
// import {Route, Switch, withRouter, Redirect} from 'react-router-dom'
// import Layout from './components/Layout/Layout';
// import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
// // import Checkout from './containers/Checkout/Checkout'
// // import Orders from './containers/Orders/Orders'
// // import Auth from '../src/containers/Auth/Auth'
// import Logout from '../src/containers/Auth/Logout/Logout'
// import { connect } from 'react-redux'
// import * as actions from '../src/store/actions/index'
// import React.lazy from './hoc/React.lazy/React.lazy'

// const asyncAuth = React.lazy(()=>{
//   return import('../src/containers/Auth/Auth')
// })

// const asyncOrders = React.lazy(()=>{
//   return import('./containers/Orders/Orders')
// })

// const asyncCheckout = React.lazy(()=>{
//   return import('./containers/Checkout/Checkout')
// })



// class App extends Component {
// componentDidMount(){
//   this.props.onTryAutoSignup()
// }

// render(){
   
//   let routes = (
//     <Switch>
//      <Route path = "/auth" component = {asyncAuth}/>
//     <Route path = "/" exact component = {BurgerBuilder}/>
//     <Redirect to = "/"/>
//     </Switch>
// )

// if(this.props.isAuthenticated){
// routes = (
//   <Switch>
//      <Route path = "/checkout" component = {asyncCheckout}/>
//      <Route path = "/orders" component = {asyncOrders}/>
//      <Route path = "/logout" component = {Logout}/>
//      <Route path = "/auth" component = {asyncAuth}/>
//      <Route path = "/" exact component = {BurgerBuilder}/>
//      <Redirect to = "/"/>
//      </Switch>
// )
// }

// //   render(){
   
// //     let routes = (
// //       <Switch>
// //        <Route path = "/auth" component = {Auth}/>
// //       <Route path = "/" exact component = {BurgerBuilder}/>
// //       <Redirect to = "/"/>
// //       </Switch>
// // )
  
// // if(this.props.isAuthenticated){
// //   routes = (
// //     <Switch>
// //        <Route path = "/checkout" component = {Checkout}/>
// //        <Route path = "/orders" component = {Orders}/>
// //        <Route path = "/logout" component = {Logout}/>
// //        <Route path = "/auth" component = {Auth}/>
// //        <Route path = "/" exact component = {BurgerBuilder}/>
// //        <Redirect to = "/"/>
// //        </Switch>
// //   )
// // }


//     return (
//     <div>
//      <Layout>
//      {routes}
//        {/* <Switch>
//        <Route path = "/checkout" component = {Checkout}/>
//        <Route path = "/orders" component = {Orders}/>
//        <Route path = "/auth" component = {Auth}/>
//        <Route path = "/logout" component = {Logout}/>
//        <Route path = "/" exact component = {BurgerBuilder}/>
//        </Switch> */}
//      </Layout>
//     </div>
//   );
// }
// }

// const mapStateToProps = state =>{
//   return{
//     isAuthenticated:state.auth.token !== null
//   }
// }

// const mapDispathToProps =dispatch=>{
//   return{
//     onTryAutoSignup:()=>dispatch(actions.authCheckState())
//   }
// }


// export default withRouter(connect(mapStateToProps,mapDispathToProps)(App));



import React, { useEffect,Suspense } from 'react';
import {Route, Switch, withRouter, Redirect} from 'react-router-dom'
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
// import Checkout from './containers/Checkout/Checkout'
// import Orders from './containers/Orders/Orders'
// import Auth from '../src/containers/Auth/Auth'
import Logout from '../src/containers/Auth/Logout/Logout'
import { connect } from 'react-redux'
import * as actions from '../src/store/actions/index'


const Auth = React.lazy(()=>{
  return import('../src/containers/Auth/Auth')
})

const Orders = React.lazy(()=>{
  return import('./containers/Orders/Orders')
})

const Checkout = React.lazy(()=>{
  return import('./containers/Checkout/Checkout')
})



const App =props=> {
  const {onTryAutoSignup}=props
useEffect(()=>{
  onTryAutoSignup()
},[onTryAutoSignup])

   
  let routes = (
    <Switch>
     <Route path = "/auth" render={(props)=><Auth {...props}/>}/>
    <Route path = "/" exact component = {BurgerBuilder}/>
    <Redirect to = "/"/>
    </Switch>
)

if(props.isAuthenticated){
routes = (
  <Switch>
     <Route path = "/checkout" render={(props)=><Checkout {...props}/>}/>
     <Route path = "/orders" render={(props)=><Orders {...props}/>}/>
     <Route path = "/logout" component = {Logout}/>
     <Route path = "/auth" render={(props)=><Auth {...props}/>}/>
     <Route path = "/" exact component = {BurgerBuilder}/>
     <Redirect to = "/"/>
     </Switch>
)
}

//   render(){
   
//     let routes = (
//       <Switch>
//        <Route path = "/auth" component = {Auth}/>
//       <Route path = "/" exact component = {BurgerBuilder}/>
//       <Redirect to = "/"/>
//       </Switch>
// )
  
// if(this.props.isAuthenticated){
//   routes = (
//     <Switch>
//        <Route path = "/checkout" component = {Checkout}/>
//        <Route path = "/orders" component = {Orders}/>
//        <Route path = "/logout" component = {Logout}/>
//        <Route path = "/auth" component = {Auth}/>
//        <Route path = "/" exact component = {BurgerBuilder}/>
//        <Redirect to = "/"/>
//        </Switch>
//   )
// }


    return (
    <div>
     <Layout>
       <Suspense fallback = {<p>...Loading</p>}>{routes}</Suspense>
     
       {/* <Switch>
       <Route path = "/checkout" component = {Checkout}/>
       <Route path = "/orders" component = {Orders}/>
       <Route path = "/auth" component = {Auth}/>
       <Route path = "/logout" component = {Logout}/>
       <Route path = "/" exact component = {BurgerBuilder}/>
       </Switch> */}
     </Layout>
    </div>
  );
}


const mapStateToProps = state =>{
  return{
    isAuthenticated:state.auth.token !== null
  }
}

const mapDispathToProps =dispatch=>{
  return{
    onTryAutoSignup:()=>dispatch(actions.authCheckState())
  }
}


export default withRouter(connect(mapStateToProps,mapDispathToProps)(App));

// peredelivayem classoviy component v funkcionalniy s ispolsovaniyem hooks