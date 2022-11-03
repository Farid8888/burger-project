import * as actionTypes from '../actions/actionTypes'
import { purchaseBurgerStart } from '../actions/order'
import  {updateObject} from '../../shared/utility'

const initialState = {
    orders:[],
    loading:false,
    purchased:false,
}

const purchaseBurgerSuccess = (state,action)=>{
    const newOrder = updateObject(action.orderData,{id:action.orderId})
    return updateObject(state,{
        orders:state.orders.concat(newOrder),
          loading:false,
          purchased:true
    })
}


const purchaseBurgerFail =(state,action)=>{
    return updateObject(state, {loading:false})
}


const purchaseBurgerStarts =(state,action)=>{
    return updateObject(state,{loading:true})
}

const purchaseInit = (state,action)=>{
       return  updateObject(state,{purchased:false})
    }

const fetchOrdersStart = (state,action)=>{
    return updateObject(state,{loading:true})
}    

const fetchOrdersSuccess = (state,action)=>{
   return updateObject(state,{
        orders:action.orders,
        loading:false
    })
}

const fetchOrdersFail = (state, action)=>{
    return updateObject(state,{loading:false})
}


const reducer = (state = initialState,action)=>{
  switch(action.type){
      case actionTypes.PURCHASE_BURGER_SUCCESS:return purchaseBurgerSuccess(state,action)
        // const newOrder = updateObject(action.orderData,{id:action.orderId})
        // return updateObject(state,{
        //     orders:state.orders.concat(newOrder),
        //       loading:false,
        //       purchased:true
        // })
        //   const newOrder = {
        //     ...action.orderData,
        //     id:action.orderId,
        //   }
        //   return{
        //       ...state,
        //       orders:state.orders.concat(newOrder),
        //       loading:false,
        //       purchased:true
        //   }
       case actionTypes.PURCHASE_BURGER_FAIL:return purchaseBurgerFail(state,action)
        //    return updateObject(state, {loading:false})
        //    return{
        //        ...state,
        //        loading:false,
        //    }
       case actionTypes.PURCHASE_BURGER_START:return purchaseBurgerStarts(state,action)
        //    return updateObject(state,{loading:true})
        //    return{
        //        ...state,
        //        loading:true
        //    }
        case actionTypes.PURCHASE_INIT:return purchaseInit(state,action)
            // return updateObject(state,{purchased:false})
            // return{
            //     ...state,
            //     purchased:false
            // }
        case actionTypes.FETCH_ORDERS_START:return fetchOrdersStart(state,action)
            // updateObject(state,{loading:true})
            // return{
            //     ...state,
            //     loading:true
            // }
        case actionTypes.FETCH_ORDERS_SUCCESS:return fetchOrdersSuccess(state,action)
            // updateObject(state,{
            //     orders:action.orders,
            //     loading:false
            // })
            // return{
            //     ...state,
            //     orders:action.orders,
            //     loading:false
            // }
         case actionTypes.FETCH_ORDERS_FAIL:return fetchOrdersFail(state,action)
            //  return updateObject(state,{loading:false})
            //  return{
            //     ...state,
            //     loading:false
            //  }                  
        default:
            return state      
  }
}

export default reducer

