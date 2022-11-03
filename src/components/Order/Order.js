import React from 'react'
import classes from './Order.module.css'



const order = (props)=>{
    const ingredients = []
    for(let ingredient in props.ingredients){
        ingredients.push({

            name: ingredient,
            amount: props.ingredients[ingredient]
        })
    }
    const ingredientOutput = ingredients.map(ig=>{
       return <span key={ig.name}
         style ={{display: 'inline-block', 
                  border:'1px solid #ccc',margin:'0 8px',
                padding:'5px', textTransform:'capitalize'}}
       >{ig.name} {ig.amount}</span>
    }    
 )
  return(
      <div className={classes.Order}>
          <p>ingredients:{ingredientOutput} </p>
          <p>Price:<strong>USD {props.price.toFixed(2)}</strong></p>
      </div>
  )
}


export default order