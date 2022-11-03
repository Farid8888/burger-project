import * as actionTypes from '../actions/actionTypes'
import {updateObject} from '../../shared/utility'

const initialState = {
    ingredients:null,
    totalPrice:4,
    error:false,
    buiding:false
}
const INGREDIENTS_PRICES = {
    salad:0.5,
    cheese:0.4,
    meat:1.3,
    bacon:0.7
};

const addIngredient = (state,action)=>{
        const updateIngredient = { [action.ingredientName]:state.ingredients[action.ingredientName] + 1}
        const updateIngredients = updateObject(state.ingredients,updateIngredient)
        const updatedState = {
            ingredients:updateIngredients,
            totalPrice:state.totalPrice + INGREDIENTS_PRICES[action.ingredientName],
            building:true
        }
        return updateObject(state,updatedState)
}

const removeIngredient = (state,action)=>{
    const updateIng = { [action.ingredientName]:state.ingredients[action.ingredientName] - 1}
    const updateIngs = updateObject(state.ingredients,updateIng)
    const updatedSt = {
        ingredients:updateIngs,
        totalPrice:state.totalPrice - INGREDIENTS_PRICES[action.ingredientName],
        building:true
    }
    return updateObject(state,updatedSt)
}


const setIngredients = (state,action)=>{
    return updateObject(state,{
        ingredients:{
            salad:action.ingredients.salad,
            bacon:action.ingredients.bacon,
            cheese:action.ingredients.cheese,
            meat:action.ingredients.meat
        },
        error:false,
        totalPrice:4,
        building:false
    })
}


const fetchIngredients = (state,action)=>{
    return updateObject(state,{
        error:true
    })
}

const reducer = (state = initialState, action)=>{
switch(action.type){
    case actionTypes.ADD_INGREDIENT:return addIngredient(state,action)
        // const updateIngredient = { [action.ingredientName]:state.ingredients[action.ingredientName] + 1}
        // const updateIngredients = updateObject(state.ingredients,updateIngredient)
        // const updatedState = {
        //     ingredients:updateIngredients,
        //     totalPrice:state.totalPrice + INGREDIENTS_PRICES[action.ingredientName]
        // }
        // return updateObject(state,updatedState)
        // return{
        //     ...state,
        //     ingredients:{
        //         ...state.ingredients,
        //         [action.ingredientName]:state.ingredients[action.ingredientName] + 1
        //     },
        //     totalPrice:state.totalPrice + INGREDIENTS_PRICES[action.ingredientName]        
        // }
   case actionTypes.REMOVE_INGREDIENT:return removeIngredient(state,action)
    // const updateIng = { [action.ingredientName]:state.ingredients[action.ingredientName] - 1}
    // const updateIngs = updateObject(state.ingredients,updateIng)
    // const updatedSt = {
    //     ingredients:updateIngs,
    //     totalPrice:state.totalPrice - INGREDIENTS_PRICES[action.ingredientName]
    // }
    // return updateObject(state,updatedSt)
    //    return{
    //        ...state,
    //        ingredients:{
    //            ...state.ingredients,
    //            [action.ingredientName]:state.ingredients[action.ingredientName] - 1
    //        },
    //        totalPrice:state.totalPrice - action.INGREDIENTS_PRICES[action.ingredientName]
    //    }
    case actionTypes.SET_INGREDIENTS:return setIngredients(state,action)
    //   return updateObject(state,{
    //         ingredients:{
    //             salad:action.ingredients.salad,
    //             bacon:action.ingredients.bacon,
    //             cheese:action.ingredients.cheese,
    //             meat:action.ingredients.meat
    //         },
    //         error:false,
    //         totalPrice:4
    //     })
        // return{
        //     ...state,
        //     // ingredients:action.ingredients,
        //     ingredients:{
        //         salad:action.ingredients.salad,
        //         bacon:action.ingredients.bacon,
        //         cheese:action.ingredients.cheese,
        //         meat:action.ingredients.meat
        //     },
        //     error:false,
        //     totalPrice:4
        // }
    case actionTypes.FETCH_INGREDIENTS_FAILED:return fetchIngredients(state,action)
    //   return updateObject(state,{
    //         error:true
    //     })
        // return {
        //     ...state,
        //     error:true
        // }     
       default :
             return state     
 }
}

export default reducer