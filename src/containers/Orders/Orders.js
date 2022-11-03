// import React,{Component} from 'react';
// import Order from '../../components/Order/Order'
// import axios from '../../axios-order'
// import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'
// import * as actions from '../../store/actions/index'
// import {connect} from 'react-redux'
// import Spinner from '../../components/UI/Spinner/Spinner'


// class Orders extends Component{
//     // state={
//     //     orders:[],
//     //     loading:true
//     // }
// componentDidMount(){
//     this.props.onFetchOrders(this.props.token,this.props.userId)
// //  axios.get('/orders.json').then(
// //      res=> {
// //          console.log(res.data)
// //         const fetchOrders = []
// //         for(let key in res.data){
// //             console.log(key)
// //           fetchOrders.push({
// //               ...res.data[key],
// //               id:key
// //           })
// //         }
// //         console.log(fetchOrders)
        
// //       this.setState({loading:false, orders:fetchOrders})
// //      })
// //      .catch(error=>this.setState({loading:false}))
// }
    
//     render(){
//         let orders = <Spinner/>
//         if(!this.props.loading){
//             orders = (
//                 <div>
//                   {this.props.orders.map(order=>{
//                       return <Order key={order.id}  price={order.price} 
//                       ingredients={order.ingredients}/>
//                   })}
//                 </div>
//               )
//         }
//         return orders
//     }
// }

// const mapStateToProps = state=>{
//     return{
//        loading:state.order.loading,
//        orders:state.order.orders,
//        token:state.auth.token,
//        userId:state.auth.userId
//     }
// }


// const mapDispatchToProps = dispatch=>{
//     return{
//         onFetchOrders:(token,userId)=>dispatch(actions.fetchOrders(token,userId))
//     }
// }

// export default connect(mapStateToProps,mapDispatchToProps)(withErrorHandler(Orders, axios))





import React,{useEffect, useState} from 'react';
import Order from '../../components/Order/Order'
import axios from '../../axios-order'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'
import * as actions from '../../store/actions/index'
import {connect} from 'react-redux'
import Spinner from '../../components/UI/Spinner/Spinner'


const  Orders =props=>{
    const {onFetchOrders}= props
useEffect(()=>{
    onFetchOrders(props.token,props.userId)
},[onFetchOrders]) 
        let orders = <Spinner/>
        if(!props.loading){
            orders = (
                <div>
                  {props.orders.map(order=>{
                      return <Order key={order.id}  price={order.price} 
                      ingredients={order.ingredients}/>
                  })}
                </div>
              )
        }
        return orders

    }

const mapStateToProps = state=>{
    return{
       loading:state.order.loading,
       orders:state.order.orders,
       token:state.auth.token,
       userId:state.auth.userId
    }
}


const mapDispatchToProps = dispatch=>{
    return{
        onFetchOrders:(token,userId)=>dispatch(actions.fetchOrders(token,userId))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(withErrorHandler(Orders, axios))