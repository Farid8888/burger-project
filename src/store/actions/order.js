import * as actionTypes from './actionTypes'
import axios from '../../axios-order'


export const purchaseBurgerSuccess =(id,orderData)=>{
    return{
        type:actionTypes.PURCHASE_BURGER_SUCCESS,
        orderData:orderData,
        orderId:id,
    }
}


export const purchaseBurgerFail =(error)=>{
    return{
        type:actionTypes.PURCHASE_BURGER_FAIL,
        error:error
    }
}



export const purchaseBurgerStart = ()=>{
    return{
        type:actionTypes.PURCHASE_BURGER_START
    }
}


// export const purchaseBurgerPost = (orderData,token)=>{
//     return dispatch =>{
//         dispatch(purchaseBurgerStart())
//         axios.post('/orders.json?auth=' + token ,
//          orderData)
//         .then(response =>{
//             console.log(response.data)
//             dispatch(purchaseBurgerSuccess(response.data.name,orderData))
//         }
          
//         ).catch(error=>{
//            dispatch(purchaseBurgerFail(error))
//         }    
//      )
//     }
// }

export const purchaseBurgerPost = (orderData,token)=>{
   return{
       type:actionTypes.PURCHASE_BURGER,
       orderData:orderData,
       token:token
   }
}

export const purchaseInit = ()=>{
    return{
        type:actionTypes.PURCHASE_INIT
  }
}


export const fetchOrdersStart = ()=>{
    return{
        type:actionTypes.FETCH_ORDERS_START
    }
}

export const fetchOrdersSuccess =(orders)=>{
return{
    type:actionTypes.FETCH_ORDERS_SUCCESS,
    orders:orders
 }
}

export const fetchOrdersFail = (error) =>{
    return{
        type:actionTypes.PURCHASE_BURGER_FAIL,
        error:error
    }
}

// export const fetchOrders = (token,userId)=>{
//     return dispatch =>{
//         dispatch(fetchOrdersStart())
//         const queryParams = '?auth=' + token + '&orderBy="userId"&equalTo="' + userId + '"'
//         axios.get('/orders.json' + queryParams).then(
//             res=> {
//                const fetchOrders = []
//                for(let key in res.data){
//                  fetchOrders.push({
//                      ...res.data[key],
//                      id:key
//                  })
//                }
//                dispatch(fetchOrdersSuccess(fetchOrders))
//             })
//             .catch(error=>dispatch(fetchOrdersFail(error)))
//     }
// }

export const fetchOrders = (token,userId)=>{
    return{
        type:actionTypes.FETCH_ORDERS,
        token:token,
        userId:userId
    }
}