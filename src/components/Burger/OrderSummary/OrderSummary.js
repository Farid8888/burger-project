// import React, {Component} from 'react'
// import Aux from '../../../hoc/Auxiliary'
// import Button from '../../UI/Button/Button'

// class OrderSummary extends Component{
//     componentDidUpdate(){
//         console.log('[didupdate]')
//     }
//     render(){
//         const ingredientSummary = Object.keys(this.props.ingredients).
//         map(igKey =>{
//             return <li key = {igKey}><span style = {{textTransform:'capitalize'}}>{igKey}</span>:{this.props.ingredients[igKey]}</li>
//         })
//         return (
//             <Aux>
//                 <h3>Your order</h3>
//                 <p>A delicious burger with the following ingredients:</p>
//                  <ul>
//                    {ingredientSummary}
//                  </ul>
//                  <p>Continue to Checkout?</p>
//                  <p><strong>Total price:{this.props.price.toFixed(2)}</strong></p>
//                  <Button btnType = "Danger" clicked ={this.props.clickedCancel}>CANCEL</Button>
//                  <Button btnType = "Success" clicked ={this.props.clickedContinue}>CONTINUE</Button>
//             </Aux>
//       )
//     }
// }

// export default OrderSummary;



import React from 'react'
import Aux from '../../../hoc/Auxiliary'
import Button from '../../UI/Button/Button'

const OrderSummary =props=>{
  
   
        const ingredientSummary = Object.keys(props.ingredients).
        map(igKey =>{
            return <li key = {igKey}><span style = {{textTransform:'capitalize'}}>{igKey}</span>:{props.ingredients[igKey]}</li>
        })
        return (
            <Aux>
                <h3>Your order</h3>
                <p>A delicious burger with the following ingredients:</p>
                 <ul>
                   {ingredientSummary}
                 </ul>
                 <p>Continue to Checkout?</p>
                 <p><strong>Total price:{props.price.toFixed(2)}</strong></p>
                 <Button btnType = "Danger" clicked ={props.clickedCancel}>CANCEL</Button>
                 <Button btnType = "Success" clicked ={props.clickedContinue}>CONTINUE</Button>
            </Aux>
      )
    }


export default OrderSummary;