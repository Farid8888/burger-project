// // import React, { Component } from 'react'
// // import Aux from '../../hoc/Auxiliary'
// // import Burger from '../../components/Burger/Burger'
// // import BuildControls from '../../components/Burger/BuildControls/BuildControls'
// // import Modal from '../../components/UI/Modal/Modal'
// // import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
// // import axios from '../../axios-order'
// // import Spinner from '../../components/UI/Spinner/Spinner'
// // import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'
// // import * as actions from '../../store/actions/index'
// // import {connect} from 'react-redux'

// // // const INGREDIENTS_PRICES = {
// // //     salad:0.5,
// // //     cheese:0.4,
// // //     meat:1.3,
// // //     bacon:0.7
// // // };

// // export class BurgerBuilder extends Component{
// //     state = {
// //         // ingredients:null,
// //         // totalPrice:4,
// //         // purchasable: false,
// //         purchasing: false,
// //         // loading:false,
// //         // error:null
// //     }
// //     componentDidMount(){
// //         this.props.onInitIngresients()
// //         // axios.get('https://react-my-burger-92fbf-default-rtdb.firebaseio.com/ingredients.json').
// //         // then(response =>{
// //         //     this.setState({ingredients:response.data})
// //         // }).catch(error => {
// //         //     this.setState({error:true})
// //         //  })
// //     }
// // updatePurchaseState(ingredients){
// // const sum = Object.keys(ingredients).
// // map(igKey =>{
// //     return ingredients[igKey];
// // }).reduce((sum,el)=>{
// //     return sum + el;
// // },0);
// // // this.setState({purchasable:sum > 0})
// // return sum > 0 
// // }

// // // addIngredientHandler = (type) =>{
// // // const oldCount = this.state.ingredients[type];
// // // const updateCount = oldCount + 1;
// // // const updatedIngredients = {
// // //     ...this.state.ingredients
// // // };
// // // updatedIngredients[type] = updateCount;
// // // const oldPrice = this.state.totalPrice;
// // // const priceAddition = INGREDIENTS_PRICES[type];
// // // const newPrice = oldPrice +priceAddition;
// // // this.setState({ingredients:updatedIngredients, totalPrice:newPrice});
// // // this.updatePurchaseState(updatedIngredients)
// // // }

// // // removeIngredientHandler = (type) =>{
// // //  const oldCount = this.state.ingredients[type];
 
// // // const updateCount = oldCount - 1;
// // // const updatedIngredients = {
// // //     ...this.state.ingredients
// // // };
// // // updatedIngredients[type] = updateCount;
// // // const oldPrice = this.state.totalPrice;
// // // const priceDeduction = INGREDIENTS_PRICES[type];
// // // const newPrice = oldPrice - priceDeduction;
// // // this.setState({ingredients:updatedIngredients, totalPrice:newPrice})
// // // this.updatePurchaseState(updatedIngredients);
// // // }

// // purchaseHandler = () =>{
// //     if(this.props.isAuthenticated){
// //     this.setState({purchasing: true})
// //     }else {
// //         this.props.onSetAuthRedirectPath('/checkout')
// //         this.props.history.push('/auth')
// //     }
// // }
// // purchaseCancelHandler = () =>{
// //     this.setState({purchasing:false})
// // }

// // // purchaseContinueHandler = () =>{
// //     // alert('You continue!');

// // // const queryParams = [];
// // // for(let i in this.state.ingredients){
// // //  queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]))
// // //  queryParams.push('price=' + this.state.totalPrice)
// // //  const queryString = queryParams.join('&')
// // //      this.props.history.push({
// // //         pathname:'/checkout',
// // //         search: '?' + queryString
// // //      })
// // //  }
// // // }
// // purchaseContinueHandler = () =>{
// //     this.props.history.push('/checkout')
// //     this.props.onInitPurchase()
// // }


// //     render(){
// //      const disabledInfo = {
// //             ...this.props.ings
// //         }
// //         for(let key in disabledInfo){
// //             disabledInfo[key] = disabledInfo[key] <= 0
// //         }
// //         let orderSummary = null
        
        

// //         let burger = this.props.error ? <p>Something wrong</p> : <Spinner/> 
// //         if(this.props.ings){
// //            burger = (
// //             <Aux>
// //             <Burger ingredients = {this.props.ings}/>
// //             <BuildControls ingredientAdded = {this.props.onIngredientAdded}
// //                            ingredientRemoved ={this.props.onIngredientRemoved}
// //                            disabled = {disabledInfo}
// //                            purchasable = {this.updatePurchaseState(this.props.ings)}
// //                            price = {this.props.totalPrice}
// //                            isAuth = {this.props.isAuthenticated}
// //                            ordered = {this.purchaseHandler}
// //                            />
// //             </Aux>
// //         );
// //         orderSummary = <OrderSummary ingredients= {this.props.ings}
// //         clickedCancel = {this.purchaseCancelHandler}
// //         clickedContinue ={this.purchaseContinueHandler}
// //         price = {this.props.totalPrice}/>
    
// //     }
// //     // if(this.state.loading){
// //     //     orderSummary = <Spinner/>
// //     // }
// //         return (
// //             <Aux>
// //                 <Modal show = {this.state.purchasing} modalClosed ={this.purchaseCancelHandler}>
// //                     {orderSummary}
// //                 </Modal>
// //               {burger}
// //             </Aux>
// //         );
// //     }
// // }

// // const mapStateToProps = state =>{
// //     return{
// //         ings:state.burgerBuilder.ingredients,
// //         totalPrice:state.burgerBuilder.totalPrice,
// //         error:state.burgerBuilder.error,
// //         isAuthenticated:state.auth.token !== null,
        
// //     }
// // }

// // const mapDispatchToProps = dispatch =>{
// //     return{
// //         // onIngredientAdded:(ingName)=> dispatch({type:actionTypes.ADD_INGREDIENT,ingredientName:ingName}),
// //         // onIngredientRemoved:(ingName)=> dispatch({type:actionTypes.REMOVE_INGREDIENT,ingredientName:ingName})
// //         onIngredientAdded:(igName)=> dispatch(actions.addIngredient(igName)),
// //         onIngredientRemoved:(igName)=> dispatch(actions.removeIngredient(igName)),
// //         onInitIngresients:()=>dispatch(actions.initIngredients()),
// //         onInitPurchase:()=>dispatch(actions.purchaseInit()),
// //         onSetAuthRedirectPath:(path)=>dispatch(actions.setAuthRedirectPath(path))
       
// //     }
// // }

// // export default connect(mapStateToProps,mapDispatchToProps)(withErrorHandler(BurgerBuilder,axios));


// import React, { useEffect,useState } from 'react'
// import Aux from '../../hoc/Auxiliary'
// import Burger from '../../components/Burger/Burger'
// import BuildControls from '../../components/Burger/BuildControls/BuildControls'
// import Modal from '../../components/UI/Modal/Modal'
// import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
// import axios from '../../axios-order'
// import Spinner from '../../components/UI/Spinner/Spinner'
// import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'
// import * as actions from '../../store/actions/index'
// import {connect} from 'react-redux'

// // const INGREDIENTS_PRICES = {
// //     salad:0.5,
// //     cheese:0.4,
// //     meat:1.3,
// //     bacon:0.7
// // };

// export const BurgerBuilder =props=>{
//    const [ purchasing,setPurchasing] = useState(false)
//    const {onInitIngresients} = props
//     useEffect(()=>{
//         onInitIngresients()
//         // axios.get('https://react-my-burger-92fbf-default-rtdb.firebaseio.com/ingredients.json').
//         // then(response =>{
//         //     this.setState({ingredients:response.data})
//         // }).catch(error => {
//         //     this.setState({error:true})
//         //  })
//     },[onInitIngresients])


// const updatePurchaseState=(ingredients)=>{
// const sum = Object.keys(ingredients).
// map(igKey =>{
//     return ingredients[igKey];
// }).reduce((sum,el)=>{
//     return sum + el;
// },0);
// // this.setState({purchasable:sum > 0})
// return sum > 0 
// }

// // addIngredientHandler = (type) =>{
// // const oldCount = this.state.ingredients[type];
// // const updateCount = oldCount + 1;
// // const updatedIngredients = {
// //     ...this.state.ingredients
// // };
// // updatedIngredients[type] = updateCount;
// // const oldPrice = this.state.totalPrice;
// // const priceAddition = INGREDIENTS_PRICES[type];
// // const newPrice = oldPrice +priceAddition;
// // this.setState({ingredients:updatedIngredients, totalPrice:newPrice});
// // this.updatePurchaseState(updatedIngredients)
// // }

// // removeIngredientHandler = (type) =>{
// //  const oldCount = this.state.ingredients[type];
 
// // const updateCount = oldCount - 1;
// // const updatedIngredients = {
// //     ...this.state.ingredients
// // };
// // updatedIngredients[type] = updateCount;
// // const oldPrice = this.state.totalPrice;
// // const priceDeduction = INGREDIENTS_PRICES[type];
// // const newPrice = oldPrice - priceDeduction;
// // this.setState({ingredients:updatedIngredients, totalPrice:newPrice})
// // this.updatePurchaseState(updatedIngredients);
// // }

// const purchaseHandler = () =>{
//     if(props.isAuthenticated){
//     setPurchasing(true)
//     }else {
//         props.onSetAuthRedirectPath('/checkout')
//         props.history.push('/auth')
//     }
// }
// const purchaseCancelHandler = () =>{
//    setPurchasing(false)
// }

// // purchaseContinueHandler = () =>{
//     // alert('You continue!');

// // const queryParams = [];
// // for(let i in this.state.ingredients){
// //  queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]))
// //  queryParams.push('price=' + this.state.totalPrice)
// //  const queryString = queryParams.join('&')
// //      this.props.history.push({
// //         pathname:'/checkout',
// //         search: '?' + queryString
// //      })
// //  }
// // }
// const purchaseContinueHandler = () =>{
//     props.history.push('/checkout')
//     props.onInitPurchase()
// }


   
//      const disabledInfo = {
//             ...props.ings
//         }
//         for(let key in disabledInfo){
//             disabledInfo[key] = disabledInfo[key] <= 0
//         }
//         let orderSummary = null
        
        

//         let burger = props.error ? <p>Something wrong</p> : <Spinner/> 
//         if(props.ings){
//            burger = (
//             <Aux>
//             <Burger ingredients = {props.ings}/>
//             <BuildControls ingredientAdded = {props.onIngredientAdded}
//                            ingredientRemoved ={props.onIngredientRemoved}
//                            disabled = {disabledInfo}
//                            purchasable = {updatePurchaseState(props.ings)}
//                            price = {props.totalPrice}
//                            isAuth = {props.isAuthenticated}
//                            ordered = {purchaseHandler}
//                            />
//             </Aux>
//         );
//         orderSummary = <OrderSummary ingredients= {props.ings}
//         clickedCancel = {purchaseCancelHandler}
//         clickedContinue ={purchaseContinueHandler}
//         price = {props.totalPrice}/>
    
//     }
//     // if(this.state.loading){
//     //     orderSummary = <Spinner/>
//     // }
//         return (
//             <Aux>
//                 <Modal show = {purchasing} modalClosed ={purchaseCancelHandler}>
//                     {orderSummary}
//                 </Modal>
//               {burger}
//             </Aux>
//         );
//     }


// const mapStateToProps = state =>{
//     return{
//         ings:state.burgerBuilder.ingredients,
//         totalPrice:state.burgerBuilder.totalPrice,
//         error:state.burgerBuilder.error,
//         isAuthenticated:state.auth.token !== null,
        
//     }
// }

// const mapDispatchToProps = dispatch =>{
//     return{
//         // onIngredientAdded:(ingName)=> dispatch({type:actionTypes.ADD_INGREDIENT,ingredientName:ingName}),
//         // onIngredientRemoved:(ingName)=> dispatch({type:actionTypes.REMOVE_INGREDIENT,ingredientName:ingName})
//         onIngredientAdded:(igName)=> dispatch(actions.addIngredient(igName)),
//         onIngredientRemoved:(igName)=> dispatch(actions.removeIngredient(igName)),
//         onInitIngresients:()=>dispatch(actions.initIngredients()),
//         onInitPurchase:()=>dispatch(actions.purchaseInit()),
//         onSetAuthRedirectPath:(path)=>dispatch(actions.setAuthRedirectPath(path))
       
//     }
// }

// export default connect(mapStateToProps,mapDispatchToProps)(withErrorHandler(BurgerBuilder,axios));




// import React, { Component } from 'react'
// import Aux from '../../hoc/Auxiliary'
// import Burger from '../../components/Burger/Burger'
// import BuildControls from '../../components/Burger/BuildControls/BuildControls'
// import Modal from '../../components/UI/Modal/Modal'
// import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
// import axios from '../../axios-order'
// import Spinner from '../../components/UI/Spinner/Spinner'
// import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'
// import * as actions from '../../store/actions/index'
// import {connect} from 'react-redux'

// // const INGREDIENTS_PRICES = {
// //     salad:0.5,
// //     cheese:0.4,
// //     meat:1.3,
// //     bacon:0.7
// // };

// export class BurgerBuilder extends Component{
//     state = {
//         // ingredients:null,
//         // totalPrice:4,
//         // purchasable: false,
//         purchasing: false,
//         // loading:false,
//         // error:null
//     }
//     componentDidMount(){
//         this.props.onInitIngresients()
//         // axios.get('https://react-my-burger-92fbf-default-rtdb.firebaseio.com/ingredients.json').
//         // then(response =>{
//         //     this.setState({ingredients:response.data})
//         // }).catch(error => {
//         //     this.setState({error:true})
//         //  })
//     }
// updatePurchaseState(ingredients){
// const sum = Object.keys(ingredients).
// map(igKey =>{
//     return ingredients[igKey];
// }).reduce((sum,el)=>{
//     return sum + el;
// },0);
// // this.setState({purchasable:sum > 0})
// return sum > 0 
// }

// // addIngredientHandler = (type) =>{
// // const oldCount = this.state.ingredients[type];
// // const updateCount = oldCount + 1;
// // const updatedIngredients = {
// //     ...this.state.ingredients
// // };
// // updatedIngredients[type] = updateCount;
// // const oldPrice = this.state.totalPrice;
// // const priceAddition = INGREDIENTS_PRICES[type];
// // const newPrice = oldPrice +priceAddition;
// // this.setState({ingredients:updatedIngredients, totalPrice:newPrice});
// // this.updatePurchaseState(updatedIngredients)
// // }

// // removeIngredientHandler = (type) =>{
// //  const oldCount = this.state.ingredients[type];
 
// // const updateCount = oldCount - 1;
// // const updatedIngredients = {
// //     ...this.state.ingredients
// // };
// // updatedIngredients[type] = updateCount;
// // const oldPrice = this.state.totalPrice;
// // const priceDeduction = INGREDIENTS_PRICES[type];
// // const newPrice = oldPrice - priceDeduction;
// // this.setState({ingredients:updatedIngredients, totalPrice:newPrice})
// // this.updatePurchaseState(updatedIngredients);
// // }

// purchaseHandler = () =>{
//     if(this.props.isAuthenticated){
//     this.setState({purchasing: true})
//     }else {
//         this.props.onSetAuthRedirectPath('/checkout')
//         this.props.history.push('/auth')
//     }
// }
// purchaseCancelHandler = () =>{
//     this.setState({purchasing:false})
// }

// // purchaseContinueHandler = () =>{
//     // alert('You continue!');

// // const queryParams = [];
// // for(let i in this.state.ingredients){
// //  queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]))
// //  queryParams.push('price=' + this.state.totalPrice)
// //  const queryString = queryParams.join('&')
// //      this.props.history.push({
// //         pathname:'/checkout',
// //         search: '?' + queryString
// //      })
// //  }
// // }
// purchaseContinueHandler = () =>{
//     this.props.history.push('/checkout')
//     this.props.onInitPurchase()
// }


//     render(){
//      const disabledInfo = {
//             ...this.props.ings
//         }
//         for(let key in disabledInfo){
//             disabledInfo[key] = disabledInfo[key] <= 0
//         }
//         let orderSummary = null
        
        

//         let burger = this.props.error ? <p>Something wrong</p> : <Spinner/> 
//         if(this.props.ings){
//            burger = (
//             <Aux>
//             <Burger ingredients = {this.props.ings}/>
//             <BuildControls ingredientAdded = {this.props.onIngredientAdded}
//                            ingredientRemoved ={this.props.onIngredientRemoved}
//                            disabled = {disabledInfo}
//                            purchasable = {this.updatePurchaseState(this.props.ings)}
//                            price = {this.props.totalPrice}
//                            isAuth = {this.props.isAuthenticated}
//                            ordered = {this.purchaseHandler}
//                            />
//             </Aux>
//         );
//         orderSummary = <OrderSummary ingredients= {this.props.ings}
//         clickedCancel = {this.purchaseCancelHandler}
//         clickedContinue ={this.purchaseContinueHandler}
//         price = {this.props.totalPrice}/>
    
//     }
//     // if(this.state.loading){
//     //     orderSummary = <Spinner/>
//     // }
//         return (
//             <Aux>
//                 <Modal show = {this.state.purchasing} modalClosed ={this.purchaseCancelHandler}>
//                     {orderSummary}
//                 </Modal>
//               {burger}
//             </Aux>
//         );
//     }
// }

// const mapStateToProps = state =>{
//     return{
//         ings:state.burgerBuilder.ingredients,
//         totalPrice:state.burgerBuilder.totalPrice,
//         error:state.burgerBuilder.error,
//         isAuthenticated:state.auth.token !== null,
        
//     }
// }

// const mapDispatchToProps = dispatch =>{
//     return{
//         // onIngredientAdded:(ingName)=> dispatch({type:actionTypes.ADD_INGREDIENT,ingredientName:ingName}),
//         // onIngredientRemoved:(ingName)=> dispatch({type:actionTypes.REMOVE_INGREDIENT,ingredientName:ingName})
//         onIngredientAdded:(igName)=> dispatch(actions.addIngredient(igName)),
//         onIngredientRemoved:(igName)=> dispatch(actions.removeIngredient(igName)),
//         onInitIngresients:()=>dispatch(actions.initIngredients()),
//         onInitPurchase:()=>dispatch(actions.purchaseInit()),
//         onSetAuthRedirectPath:(path)=>dispatch(actions.setAuthRedirectPath(path))
       
//     }
// }

// export default connect(mapStateToProps,mapDispatchToProps)(withErrorHandler(BurgerBuilder,axios));


import React, { useEffect,useState,useCallback } from 'react'
import Aux from '../../hoc/Auxiliary'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import axios from '../../axios-order'
import Spinner from '../../components/UI/Spinner/Spinner'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'
import * as actions from '../../store/actions/index'
import {useDispatch,useSelector} from 'react-redux'

// const INGREDIENTS_PRICES = {
//     salad:0.5,
//     cheese:0.4,
//     meat:1.3,
//     bacon:0.7
// };

export const BurgerBuilder =props=>{
   const [ purchasing,setPurchasing] = useState(false)
const ings = useSelector(state=>{
   return state.burgerBuilder.ingredients  
})

const totalPrice = useSelector(state=>{
    return state.burgerBuilder.totalPrice
})

const error = useSelector(state=>{
    return state.burgerBuilder.error
})

const isAuthenticated = useSelector(state =>{
    return state.auth.token !== null
})



const dispatch = useDispatch();

const onIngredientAdded=(igName)=> dispatch(actions.addIngredient(igName));
const onIngredientRemoved=(igName)=> dispatch(actions.removeIngredient(igName));
const onInitIngresients=useCallback(()=>dispatch(actions.initIngredients()),[dispatch]);
const onInitPurchase=()=>dispatch(actions.purchaseInit());
const onSetAuthRedirectPath=(path)=>dispatch(actions.setAuthRedirectPath(path))



    useEffect(()=>{
        onInitIngresients()
        
    },[onInitIngresients])


const updatePurchaseState=(ingredients)=>{
const sum = Object.keys(ingredients).
map(igKey =>{
    return ingredients[igKey];
}).reduce((sum,el)=>{
    return sum + el;
},0);
// this.setState({purchasable:sum > 0})
return sum > 0 
}

const purchaseHandler = () =>{
    if(isAuthenticated){
    setPurchasing(true)
    }else {
        onSetAuthRedirectPath('/checkout')
        props.history.push('/auth')
    }
}
const purchaseCancelHandler = () =>{
   setPurchasing(false)
}


const purchaseContinueHandler = () =>{
    props.history.push('/checkout')
    onInitPurchase()
}


   
     const disabledInfo = {
            ...ings
        }
        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        let orderSummary = null
        
        

        let burger = error ? <p>Something wrong</p> : <Spinner/> 
        if(ings){
           burger = (
            <Aux>
            <Burger ingredients = {ings}/>
            <BuildControls ingredientAdded = {onIngredientAdded}
                           ingredientRemoved ={onIngredientRemoved}
                           disabled = {disabledInfo}
                           purchasable = {updatePurchaseState(ings)}
                           price = {totalPrice}
                           isAuth = {isAuthenticated}
                           ordered = {purchaseHandler}
                           />
            </Aux>
        );
        orderSummary = <OrderSummary ingredients= {ings}
        clickedCancel = {purchaseCancelHandler}
        clickedContinue ={purchaseContinueHandler}
        price = {totalPrice}/>
    
    }
    // if(this.state.loading){
    //     orderSummary = <Spinner/>
    // }
 
        return (
            <Aux>
                <Modal show = {purchasing} modalClosed ={purchaseCancelHandler}>
                    {orderSummary}
                </Modal>
              {burger}
            </Aux>
        );
    }




export default (withErrorHandler(BurgerBuilder,axios));
















