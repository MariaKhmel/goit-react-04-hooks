import { useState, useEffect } from "react"

export function Counter(){

const [counterA, setCounterA] = useState(0);
const [counterB, setCounterB] = useState(0);

const handleCounterAIncrement=()=>{
    setCounterA(prevState=>prevState+1);
}

const handleCounterBIncrement=()=>{
    setCounterB(prevState=>prevState+1);
}

useEffect(()=>{
  const totalClicks = counterA + counterB;
  document.title=`totalClicks ${totalClicks}`;

}, [counterA, counterB])
    return(
    <>
    <button
    type="button"
onClick={handleCounterAIncrement}
    >Click Counter A {counterA} times
    </button>

<button
    type="button"
onClick={handleCounterBIncrement}
    >Click Counter B {counterB} times
    </button>
    </>)
}