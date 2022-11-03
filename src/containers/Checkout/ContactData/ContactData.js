// import React, {Component} from 'react'
// import Button from '../../../components/UI/Button/Button'
// import classes from './ContactData.module.css'
// import axios from '../../../axios-order'
// import Spinner from '../../../components/UI/Spinner/Spinner'
// import Input from '../../../components/UI/Input/Input'
// import { elementType } from 'prop-types'
// import {connect} from 'react-redux'
// import withErrorHandler from '../../../hoc/withErrorHandler/withErrorHandler'
// import * as actions from '../../../store/actions/index'
// import {updateObject, checkValidity} from '../../../shared/utility'

// class ContactData extends Component{
//     state ={
//      orderForm:{
//         name:{
//             elementType: 'input',
//             elementConfig:{
//                 type:'text',
//                 placeholder:'Your name'
//             },
//             value:'',
//             validation:{
//                 required:true
//             },
//             valid:false,
//             touched:false
//         },
//         street:{
//             elementType: 'input',
//             elementConfig:{
//                 type:'text',
//                 placeholder:'Street'
//             },
//             value:'',
//             validation:{
//                 required:true
//             },
//             valid:false,
//             touched:false
//         },
//         zipCode:{
//             elementType: 'input',
//             elementConfig:{
//                 type:'text',
//                 placeholder:'ZIP'
//             },
//             value:'',
//             validation:{
//                 required:true,
//                 minLength: 5,
//                 maxLength:5
//             },
//             valid:false,
//             touched:false
//         },
//         country:{
//             elementType: 'input',
//             elementConfig:{
//                 type:'text',
//                 placeholder:'Country'
//             },
//             value:'',
//             validation:{
//                 required:true
//             },
//             valid:false,
//             touched:false
//         },
//         email:{
//             elementType: 'input',
//             elementConfig:{
//                 type:'email',
//                 placeholder:'Your E-Mail'
//             },
//             value:'',
//             validation:{
//                 required:true
//             },
//             valid:false,
//             touched:false
//         },
//         deliveryMethod:{
//             elementType:'select' ,
//             elementConfig:{
//                 options:[
//                     {value:'fastest', displayValue:'Fastest'},
//                     {value:'cheapest', displayValue:'Cheapest'}
//                 ]
//             },
//             value:'fastest',
//             valid:true,
//             validation:{}
//         },
//     },
//         formIsValid:false,
//         loading:false,
//     }

//     orderHandler=(event)=>{
//         event.preventDefault()
//         console.log(this.props.ingredients)
// //    this.setState({loading:true})
//    const formData = {}
//    for(let formElementIdentifier in this.state.orderForm){
//        formData[formElementIdentifier] = this.state.orderForm[formElementIdentifier].value
//    }
//    console.log(formData)
//     const order = {
//         ingredients: this.props.ings,
//         price:this.props.price,
//         orderData:formData,
//         userId:this.props.userId
//     }
//    this.props.onBurgerOrder(order,this.props.token)


// //     axios.post('/orders.json', order)
// //     .then(response =>{
// //         this.setState({loading:false})
// //         this.props.history.push('/')
// //     }
      
// //     ).catch(error=>{
// //        this.setState({loading:false})
// //     }    
// //  )
//     }
//     // checkValidity(value, rules) {
//     //     let isValid = true;
//     //     if (!rules) {
//     //         return true;
//     //     }
        
//     //     if (rules.required) {
//     //         isValid = value.trim() !== '' && isValid;
//     //     }

//     //     if (rules.minLength) {
//     //         isValid = value.length >= rules.minLength && isValid
//     //     }

//     //     if (rules.maxLength) {
//     //         isValid = value.length <= rules.maxLength && isValid
//     //     }

//     //     if (rules.isEmail) {
//     //         const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
//     //         isValid = pattern.test(value) && isValid
//     //     }

//     //     if (rules.isNumeric) {
//     //         const pattern = /^\d+$/;
//     //         isValid = pattern.test(value) && isValid
//     //     }

//     //     return isValid;
//     // }

//     inputChangedHandler = (event, inputIdentifier) =>{  
//      const updatedFormElement = updateObject(this.state.orderForm[inputIdentifier],{
//          value:event.target.value,
//          valid:checkValidity(event.target.value,this.state.orderForm[inputIdentifier].validation), 
//          touched:true   
//      })  
//      const updateOrderForm = updateObject(this.state.orderForm,{
//          [inputIdentifier]:updatedFormElement
//      }) 
//     //  const updateOrderForm = {...this.state.orderForm}
//     //  const updateElement = {
//     //      ...updateOrderForm[inputIdentifier]
//     //  }
//     //  updateElement.value=event.target.value
//     //  updateElement.valid = this.checkValidity(updateElement.value, 
//     //     updateElement.validation)
//     //  updateElement.touched = true     
//     //     console.log(updateElement)
//     //  updateOrderForm[inputIdentifier] = updateElement;
//      let formIsValid = true;
//      for(let inputIdentifier in updateOrderForm){
//          formIsValid = updateOrderForm[inputIdentifier].valid && formIsValid
//      }
//      console.log(formIsValid)
//      this.setState({orderForm:updateOrderForm, formIsValid:formIsValid})
//     }

    
//     render(){
//         console.log(this.props)
//         const formElementArray = []
//         for(let key in this.state.orderForm){
//             formElementArray.push({
//                 id:key,
//                 config:this.state.orderForm[key]
//             })
//         }
//         console.log(formElementArray)
//         let form =(
//             <form onSubmit={this.orderHandler}>
//                {formElementArray.map(formElement=>{
//                    return <Input key={formElement.id} 
//                    elementType={formElement.config.elementType}
//                    elementConfig={formElement.config.elementConfig}
//                    value={formElement.config.value}
//                    changed={(event)=>this.inputChangedHandler(event,formElement.id)}
//                    invalid={!formElement.config.valid}
//                    shouldValidate = {formElement.config.validation}
//                    touched = {formElement.config.touched}/>
//                })}
//                <Button btnType = "Success" disabled={!this.state.formIsValid}
//                  >ORDER</Button>
//                </form>
//         )
//         if(this.props.loading){
//             form = <Spinner/>
//         }
//         return (
//            <div className = {classes.ContactData}>
//                <h4>Enter your Contact Data</h4>
//                {form}
//            </div>
//         )
//     }
// }

// const mapStateToProps = state =>{
//     return{
//         ings:state.burgerBuilder.ingredients,
//         price:state.burgerBuilder.totalPrice,
//         loading:state.order.loading,
//         token:state.auth.token,
//         userId:state.auth.userId
//     }
// }

// const mapDispatchToProps = dispatch =>{
//     return{
//         onBurgerOrder:(orderData,token,userId)=>dispatch(actions.purchaseBurgerPost(orderData,token,userId))
        
//     }
// }


// export default connect(mapStateToProps,mapDispatchToProps)(withErrorHandler(ContactData,axios))



import React, {useState,useEffect} from 'react'
import Button from '../../../components/UI/Button/Button'
import classes from './ContactData.module.css'
import axios from '../../../axios-order'
import Spinner from '../../../components/UI/Spinner/Spinner'
import Input from '../../../components/UI/Input/Input'
import { elementType } from 'prop-types'
import {connect} from 'react-redux'
import withErrorHandler from '../../../hoc/withErrorHandler/withErrorHandler'
import * as actions from '../../../store/actions/index'
import {updateObject, checkValidity} from '../../../shared/utility'

const ContactData =props=>{
    const[orderForm,setOrderForm]=useState({
        name:{
            elementType: 'input',
            elementConfig:{
                type:'text',
                placeholder:'Your name'
            },
            value:'',
            validation:{
                required:true
            },
            valid:false,
            touched:false
        },
        street:{
            elementType: 'input',
            elementConfig:{
                type:'text',
                placeholder:'Street'
            },
            value:'',
            validation:{
                required:true
            },
            valid:false,
            touched:false
        },
        zipCode:{
            elementType: 'input',
            elementConfig:{
                type:'text',
                placeholder:'ZIP'
            },
            value:'',
            validation:{
                required:true,
                minLength: 5,
                maxLength:5
            },
            valid:false,
            touched:false
        },
        country:{
            elementType: 'input',
            elementConfig:{
                type:'text',
                placeholder:'Country'
            },
            value:'',
            validation:{
                required:true
            },
            valid:false,
            touched:false
        },
        email:{
            elementType: 'input',
            elementConfig:{
                type:'email',
                placeholder:'Your E-Mail'
            },
            value:'',
            validation:{
                required:true
            },
            valid:false,
            touched:false
        },
        deliveryMethod:{
            elementType:'select' ,
            elementConfig:{
                options:[
                    {value:'fastest', displayValue:'Fastest'},
                    {value:'cheapest', displayValue:'Cheapest'}
                ]
            },
            value:'fastest',
            valid:true,
            validation:{}
        }
    })
    const[formIsValid,setIsValid]=useState(false)
    const [loading,setLoading]=useState(false)
      
    

    const orderHandler=(event)=>{
        event.preventDefault()
        
//    this.setState({loading:true})
   const formData = {}
   for(let formElementIdentifier in orderForm){
       formData[formElementIdentifier] = orderForm[formElementIdentifier].value
   }
   console.log(formData)
    const order = {
        ingredients: props.ings,
        price:props.price,
        orderData:formData,
        userId:props.userId
    }
   props.onBurgerOrder(order,props.token)


//     axios.post('/orders.json', order)
//     .then(response =>{
//         this.setState({loading:false})
//         this.props.history.push('/')
//     }
      
//     ).catch(error=>{
//        this.setState({loading:false})
//     }    
//  )
    }
    // checkValidity(value, rules) {
    //     let isValid = true;
    //     if (!rules) {
    //         return true;
    //     }
        
    //     if (rules.required) {
    //         isValid = value.trim() !== '' && isValid;
    //     }

    //     if (rules.minLength) {
    //         isValid = value.length >= rules.minLength && isValid
    //     }

    //     if (rules.maxLength) {
    //         isValid = value.length <= rules.maxLength && isValid
    //     }

    //     if (rules.isEmail) {
    //         const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    //         isValid = pattern.test(value) && isValid
    //     }

    //     if (rules.isNumeric) {
    //         const pattern = /^\d+$/;
    //         isValid = pattern.test(value) && isValid
    //     }

    //     return isValid;
    // }

    const inputChangedHandler = (event, inputIdentifier) =>{  
     const updatedFormElement = updateObject(orderForm[inputIdentifier],{
         value:event.target.value,
         valid:checkValidity(event.target.value,orderForm[inputIdentifier].validation), 
         touched:true   
     })  
     const updateOrderForm = updateObject(orderForm,{
         [inputIdentifier]:updatedFormElement
     }) 
    //  const updateOrderForm = {...this.state.orderForm}
    //  const updateElement = {
    //      ...updateOrderForm[inputIdentifier]
    //  }
    //  updateElement.value=event.target.value
    //  updateElement.valid = this.checkValidity(updateElement.value, 
    //     updateElement.validation)
    //  updateElement.touched = true     
    //     console.log(updateElement)
    //  updateOrderForm[inputIdentifier] = updateElement;
     let formIsValid = true;
     for(let inputIdentifier in updateOrderForm){
         formIsValid = updateOrderForm[inputIdentifier].valid && formIsValid
     }
     console.log(formIsValid)
     setOrderForm(updateOrderForm)
     setIsValid(formIsValid)
    }

    
    
        
        const formElementArray = []
        for(let key in orderForm){
            formElementArray.push({
                id:key,
                config:orderForm[key]
            })
        }
        console.log(formElementArray)
        let form =(
            <form onSubmit={orderHandler}>
               {formElementArray.map(formElement=>{
                   return <Input key={formElement.id} 
                   elementType={formElement.config.elementType}
                   elementConfig={formElement.config.elementConfig}
                   value={formElement.config.value}
                   changed={(event)=>inputChangedHandler(event,formElement.id)}
                   invalid={!formElement.config.valid}
                   shouldValidate = {formElement.config.validation}
                   touched = {formElement.config.touched}/>
               })}
               <Button btnType = "Success" disabled={!formIsValid}
                 >ORDER</Button>
               </form>
        )
        if(loading){
            form = <Spinner/>
        }
        return (
           <div className = {classes.ContactData}>
               <h4>Enter your Contact Data</h4>
               {form}
           </div>
        )
    }


const mapStateToProps = state =>{
    return{
        ings:state.burgerBuilder.ingredients,
        price:state.burgerBuilder.totalPrice,
        loading:state.order.loading,
        token:state.auth.token,
        userId:state.auth.userId
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        onBurgerOrder:(orderData,token,userId)=>dispatch(actions.purchaseBurgerPost(orderData,token,userId))
        
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(withErrorHandler(ContactData,axios))