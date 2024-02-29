import { useState, useEffect, useReducer } from "react"

function countReducer (state, action){
switch(action.type){

    case('increment'):
    console.log({...state, count : state.count + action.payload})
    return {...state, count : state.count + action.payload};
    case ('decrement'):
        return {...state, count : state.count - action.payload};
        default:
            throw new Error(`unsupported ${action.type}`);
}

}

export function Counter(){

const [state, dispatch] = useReducer(countReducer, {count:0})

    return(
    <>
    <p>{state.count}</p>
    <button
    type="button"
onClick={()=>{dispatch({type:'increment', payload:1})}}> increment
    </button>

<button
    type="button"
onClick={()=>{dispatch({type:'decrement', payload:1})}}>decrement
    </button>
    </>)
}