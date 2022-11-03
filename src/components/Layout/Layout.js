// import React, { Component } from 'react';
// import Aux from '../../hoc/Auxiliary'
// import classes from './Layout.module.css'
// import Toolbar from '../Navigation/Toolbar/Toolbar'
// import SideDrawer from '../Navigation/SideDrawer/SideDrawer'
// import {connect} from 'react-redux'




// class Layout extends Component {

//     state = {
//         showSideDrawer:true
//     }
    
//     sideDrawerClosedHandler = ()=>{
//        this.setState({showSideDrawer:false})
//     }
  
//     sideDrawerToggleHandler = ()=>{
//         this.setState((prevState)=>{
//          return  {showSideDrawer:!prevState.showSideDrawer}
//         })
//     }


//     render(){
//     return(
//         <Aux>
//         <Toolbar 
//         isAuth={this.props.isAuthenticated}
//         drawerToggleClicked = {this.sideDrawerToggleHandler}/>
//         <SideDrawer
//         isAuth={this.props.isAuthenticated}
//          open={this.state.showSideDrawer} closed ={this.sideDrawerClosedHandler}/>
//         <main className = {classes.Content}>{this.props.children}</main>
//         </Aux>
//     )
//   }
// }

// const mapStateToProps = state =>{
//     return{
//       isAuthenticated:state.auth.token !== null 
//     }
// }

// export default connect(mapStateToProps)(Layout)



import React, { useState,useEffect } from 'react';
import Aux from '../../hoc/Auxiliary'
import classes from './Layout.module.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'
import {connect} from 'react-redux'




const Layout = props=> {
const [showSideDrawer,setShowSideDrawer] = useState(false)
   
    
   const sideDrawerClosedHandler = ()=>{
      setShowSideDrawer(false)
    }
  
   const sideDrawerToggleHandler = ()=>{
        setShowSideDrawer(!showSideDrawer)
    }

    return(
        <Aux>
        <Toolbar 
        isAuth={props.isAuthenticated}
        drawerToggleClicked = {sideDrawerToggleHandler}/>
        <SideDrawer
        isAuth={props.isAuthenticated}
         open={showSideDrawer} closed ={sideDrawerClosedHandler}/>
        <main className = {classes.Content}>{props.children}</main>
        </Aux>
    )
  }


const mapStateToProps = state =>{
    return{
      isAuthenticated:state.auth.token !== null 
    }
}

export default connect(mapStateToProps)(Layout)