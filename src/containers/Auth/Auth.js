// import React, {Component} from 'react';
// import Input from '../../components/UI/Input/Input';
// import Button from '../../components/UI/Button/Button'
// import classes from './Auth.module.css'
// import {connect} from 'react-redux'
// import * as actions from '../../store/actions/auth'
// import Spinner from '../../components/UI/Spinner/Spinner'
// import { Redirect } from 'react-router-dom'
// import { updateObject, checkValidity } from '../../shared/utility'



// class Auth extends Component{
// state ={
//     controls:{
//         email:{
//             elementType: 'input',
//             elementConfig:{
//                 type:'email',
//                 placeholder:'Mail Address'
//             },
//             value:'',
//             validation:{
//                 required:true,
//                 isEmail:true
//             },
//             valid:false,
//             touched:false
//         },
//         password:{
//             elementType: 'input',
//             elementConfig:{
//                 type:'password',
//                 placeholder:'Password'
//             },
//             value:'',
//             validation:{
//                 required:true,
//                 minLength:6
//             },
//             valid:false,
//             touched:false
//         },
//     },
//     isSignup:true
// }
// componentDidMount(){
//     if(!this.props.buildingBurger && this.props.authRedirectpath !== '/'){
//         this.props.onSetAuthRedirectPath()
//     }
// }

// // checkValidity(value, rules) {
// //     let isValid = true;
// //     if (!rules) {
// //         return true;
// //     }
    
// //     if (rules.required) {
// //         isValid = value.trim() !== '' && isValid;
// //     }

// //     if (rules.minLength) {
// //         isValid = value.length >= rules.minLength && isValid
// //     }

// //     if (rules.maxLength) {
// //         isValid = value.length <= rules.maxLength && isValid
// //     }

// //     if (rules.isEmail) {
// //         const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
// //         isValid = pattern.test(value) && isValid
// //     }

// //     if (rules.isNumeric) {
// //         const pattern = /^\d+$/;
// //         isValid = pattern.test(value) && isValid
// //     }

// //     return isValid;
// // }

// inputChangedHandler = (event,controlName)=>{
//     const updatedControls= updateObject(authForm,{
//         [controlName]:updateObject(authForm[controlName],{
//             value:event.target.value,
//             valid:checkValidity(event.target.value, authForm[controlName].validation),
//             touched:true   
//         })
//     })
// //    const updatedControls={
// //         ...authForm,
// //         [controlName]:{
// //             ...authForm[controlName],
// //             value:event.target.value,
// //             valid:this.checkValidity(event.target.value, authForm[controlName].validation),
// //             touched:true
// //         }
// //     }
//     this.setState({controls:updatedControls})
// }

//   submitHandler = (event)=>{
//      event.preventDefault();
//      this.props.onAuth(authForm.email.value,authForm.password.value,this.state.isSignup)
//   }

//   buttonChangeHandler= ()=>{
//   this.setState(prevState=>{
//       return {isSignup:!prevState.isSignup}
//   })
//   }
//     render(){
//         const formElementArray = []
//         for(let key in authForm){
//             formElementArray.push({
//                 id:key,
//                 config:authForm[key]
//             })
//         }
       
//           let form =formElementArray.map(formElement=>{
//                    return <Input key={formElement.id} 
//                    elementType={formElement.config.elementType}
//                    elementConfig={formElement.config.elementConfig}
//                    value={formElement.config.value}
//                    changed={(event)=>this.inputChangedHandler(event,formElement.id)}
//                    invalid={!formElement.config.valid}
//                    shouldValidate = {formElement.config.validation}
//                    touched = {formElement.config.touched}/>
//                })
//                if(this.props.loading){
//                    form = <Spinner/>
//                }
//                let errorForm = null
//                if(this.props.error){
//                    errorForm=<p>{this.props.error.message}</p>
//                }
//                let authenticate = null
//                if (this.props.isAuthenticated){
//                    authenticate = <Redirect to = {this.props.authRedirectpath}/>
//                }
//         return(
//             <div className={classes.Auth}>
//                 {authenticate}
//                 {errorForm}
//                 <form onSubmit={this.submitHandler}>
//                     {form}
//                     <Button btnType="Success">SUBMIT</Button>
//                 </form>
//                 <Button btnType="Danger" clicked = {this.buttonChangeHandler}
//                     >SWITCH TO {this.state.isSignup ? 'SIGNIN' : 'SIGNUP'} </Button>
//             </div>
//         )
//     }
// }

// const mapStateToProps = state =>{
//     return{
//         loading:state.auth.loading,
//         error:state.auth.error,
//         isAuthenticated:state.auth.token !== null ,
//         buildingBurger:state.burgerBuilder.building,
//         authRedirectpath:state.auth.authRedirectpath
//     }
// }


// const mapDispatchToProps = dispatch =>{
//     return{
//         onAuth:(email,password,isSignup)=>dispatch(actions.auth(email,password,isSignup)),
//         onSetAuthRedirectPath:()=>dispatch(actions.setAuthRedirectPath('/'))
//     }
// }


// export default connect(mapStateToProps,mapDispatchToProps)(Auth) 


import React, {useState, useEffect} from 'react';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button'
import classes from './Auth.module.css'
import {connect} from 'react-redux'
import * as actions from '../../store/actions/auth'
import Spinner from '../../components/UI/Spinner/Spinner'
import { Redirect } from 'react-router-dom'
import { updateObject, checkValidity } from '../../shared/utility'



const Auth =props=>{
const[authForm,setAuthForm]=useState({
        email:{
            elementType: 'input',
            elementConfig:{
                type:'email',
                placeholder:'Mail Address'
            },
            value:'',
            validation:{
                required:true,
                isEmail:true
            },
            valid:false,
            touched:false
        },
        password:{
            elementType: 'input',
            elementConfig:{
                type:'password',
                placeholder:'Password'
            },
            value:'',
            validation:{
                required:true,
                minLength:6
            },
            valid:false,
            touched:false
        },
    })
    const [isSignup, setSignup] = useState(true)
    
const {onSetAuthRedirectPath,buildingBurger,authRedirectpath} = props
useEffect(()=>{
    if(!props.buildingBurger && props.authRedirectpath !== '/'){
        onSetAuthRedirectPath()
    }
},[onSetAuthRedirectPath,buildingBurger,authRedirectpath])

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

const inputChangedHandler = (event,controlName)=>{
    const updatedControls= updateObject(authForm,{
        [controlName]:updateObject(authForm[controlName],{
            value:event.target.value,
            valid:checkValidity(event.target.value, authForm[controlName].validation),
            touched:true   
        })
    })
//    const updatedControls={
//         ...authForm,
//         [controlName]:{
//             ...authForm[controlName],
//             value:event.target.value,
//             valid:this.checkValidity(event.target.value, authForm[controlName].validation),
//             touched:true
//         }
//     }
    setAuthForm(updatedControls)
}

  const submitHandler = (event)=>{
     event.preventDefault();
     props.onAuth(authForm.email.value,authForm.password.value,isSignup)
  }

  const buttonChangeHandler= ()=>{
  setSignup(!isSignup)
  }
   
        const formElementArray = []
        for(let key in authForm){
            formElementArray.push({
                id:key,
                config:authForm[key]
            })
        }
       
          let form =formElementArray.map(formElement=>{
                   return <Input key={formElement.id} 
                   elementType={formElement.config.elementType}
                   elementConfig={formElement.config.elementConfig}
                   value={formElement.config.value}
                   changed={(event)=>inputChangedHandler(event,formElement.id)}
                   invalid={!formElement.config.valid}
                   shouldValidate = {formElement.config.validation}
                   touched = {formElement.config.touched}/>
               })
               if(props.loading){
                   form = <Spinner/>
               }
               let errorForm = null
               if(props.error){
                   errorForm=<p>{props.error.message}</p>
               }
               let authenticate = null
               if (props.isAuthenticated){
                   authenticate = <Redirect to = {props.authRedirectpath}/>
               }
        return(
            <div className={classes.Auth}>
                {authenticate}
                {errorForm}
                <form onSubmit={submitHandler}>
                    {form}
                    <Button btnType="Success">SUBMIT</Button>
                </form>
                <Button btnType="Danger" clicked = {buttonChangeHandler}
                    >SWITCH TO {isSignup ? 'SIGNIN' : 'SIGNUP'} </Button>
            </div>
        )
    }


const mapStateToProps = state =>{
    return{
        loading:state.auth.loading,
        error:state.auth.error,
        isAuthenticated:state.auth.token !== null ,
        buildingBurger:state.burgerBuilder.building,
        authRedirectpath:state.auth.authRedirectpath
    }
}


const mapDispatchToProps = dispatch =>{
    return{
        onAuth:(email,password,isSignup)=>dispatch(actions.auth(email,password,isSignup)),
        onSetAuthRedirectPath:()=>dispatch(actions.setAuthRedirectPath('/'))
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Auth) 