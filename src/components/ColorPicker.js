import { useState } from "react"
import styles from './ColorPicker.module.css'

export const ColorPicker = ({options})=>{

    const [activeOptionIdx, setActiveOptionIdx]=useState(0);
const {label}=options[activeOptionIdx].label;

const makeOptionActive = index=>{
return index===activeOptionIdx?styles.activeOption : styles.option

}
    return(<div>
    <h2>Color Picker</h2>
    <p>Selected color:{label}</p>
    <div>
{options.map(({label,color}, index)=>(
    <button
    key={label}
    aria-label={label}
    className={makeOptionActive(index)}
    style={{backgroundColor:color}}
onClick={()=>setActiveOptionIdx(index)}
    > </button>
))
    }</div>
    </div>)
}