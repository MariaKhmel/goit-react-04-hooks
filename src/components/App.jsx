import { Component } from "react";
import { SignupForm } from "./SignUpForm";
import { ColorPicker } from "./ColorPicker";
import { Counter } from "./Counter";
import { Clock } from "./Clock";
import { SkipEffectOnFirstRender } from "./SkipEffectOnFirstRender";
import { Friends } from "./friends";



const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

export class App extends Component {
  state = {  } 
  render() { 
    return (
      <>
      {/* <SignupForm/> */}
      {/* <ColorPicker options={colorPickerOptions}/> */}
      {/* <Counter/> */}
      {/* <Clock/> */}
      {/* <SkipEffectOnFirstRender /> */}
      <Friends/>
      </>
    );
  }
}
 

