import React, {Component} from 'react'
import CheckoutSummary from '../../components/CheckoutSummary/CheckoutSummary'
import {Route, Redirect} from 'react-router-dom'
import ContactData from '../../containers/Checkout/ContactData/ContactData'
import {connect} from 'react-redux'
import * as actions from '../../store/actions/index'
class Checkout extends Component{
    
    // state ={
    //     ingredients:null
    //     ,
    //     totalPrice:0
    // }
    // componentWillMount(){
    //      console.log(this.props)
    //     const query = new URLSearchParams(this.props.location.search)
    //     const ingredients = {}
    //     let price = 0
    //     for(let param of query.entries()){
    //         // ['salad','1']
    //         if(param[0] === 'price'){
    //             price = param[1];
    //         }else{
    //             ingredients[param[0]] = +param[1]
    //         } 
    //     }
    //     this.setState({ingredients:ingredients,totalPrice:price})
    // }
    cancelHandler = () =>{
        this.props.history.goBack()
    }
    continueHandler = ()=>{
       this.props.history.replace('/checkout/contact-data')
    }
    render(){
        let summary = <Redirect to = "/"/>
        if(this.props.ings){
            const purchasedRedirect = this.props.purchased ? <Redirect to = "/"/> : null
            summary = (
                <div>
                    {purchasedRedirect}
                    <CheckoutSummary ingredients = {this.props.ings}
                                      cancelClicked ={this.cancelHandler}
                                      continueClicked = {this.continueHandler}/>
                    <Route path={this.props.match.path + '/contact-data'} 
                 //    render={(props)=>(<ContactData ingredients={this.state.ingredients}
                 //                   totalPrice = {this.state.totalPrice} {...props}/>)}
                     component={ContactData}/>
                </div>
               
             )
        }
        return summary
    }
}

const mapStateToProps = state =>{
    return{
        ings:state.burgerBuilder.ingredients,
        purchased:state.order.purchased
    }
}



export default connect(mapStateToProps)(Checkout)