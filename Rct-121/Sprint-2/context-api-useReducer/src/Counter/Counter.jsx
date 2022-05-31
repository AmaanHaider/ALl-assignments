import React, { useReducer } from 'react'


const initState ={
    counter:0,
    noOfCLicks:0
 
}

const counterActions ={
  increment:"increment",
  decrement:"decrement",
  reset:"reset"
};

const reducer =(state,action)=>{
    switch (action.type){

        case counterActions.increment:{
            return{
                ...state,
                counter :state.counter +1,
                noOfCLicks:state.noOfCLick + 1
            }
        }
        case counterActions.decrement:{
            return{
                ...state,
                counter :state.counter +1,
                noOfCLicks:state.noOfCLick + 1
            }
        }
        case counterActions.reset:{
            return{
                ...state,
                counter :state.counter +1
            }
        }
    }

    return dispatch
}


const Counter = () => {

const [state, dispatch] = useReducer(reducer, initState)
  return (
    <div>

        <h3>count:{state.counter}</h3>
        <h3>No of Clicks:{state.noOfCLicks}</h3>

        <div>
            <button onCick={()=> dispatch({
                type:counterActions.increment
            })}>Increment</button>
            <button onCick={()=> dispatch({
                type:counterActions.decrement
            })}>Decrement</button>
            <button onCick={()=> dispatch({
                type:counterActions.reset
            })}>Reset</button>
        </div>

        

    </div>
  )
}

export default Counter