import { useEffect, useState, useRef } from "react";

export function SkipEffectOnFirstRender(){

const [value, setValue]=useState(0);
const IsFirstRender = useRef(true);

useEffect(()=>{
    if(IsFirstRender.current){
        IsFirstRender.current=false;
        return;
    }
    console.log(Date.now())
})

const handleCounterIncrement=()=>{
    setValue(prevState=>prevState+1);
}

    return (<>
    <div>
     <p> {value}</p>
        <button type="button" onClick={handleCounterIncrement}>  Click </button>
    </div>
    </>)
}