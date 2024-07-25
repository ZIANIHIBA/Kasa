import arrow_left from "../images/arrow_left.png"
import arrow_right from "../images/arrow_right.png"
import "../App.css"
import { useState } from "react";



export default function SlideShow({slides}){
    const length=slides.length;
    console.log (length)
const[State, setState]=useState(0);

function NextPic(){
    setState(State===length - 1 ? 0: State + 1)
}

function PrevPic(){
    setState(State === 0 ? length - 1 : State - 1)
}
return (
<div className="Slide">
    <img src={slides[State]}  alt="logement" className="ImageLogement"/>
    {  length > 1 ? 
   (  <>
    <img src={arrow_right} alt="fleche" onClick={NextPic} className="ArrowRight"/>
    <img src={arrow_left} alt="fleche" onClick={PrevPic} className="ArrowLeft"/>
    <span className="SlideCounter"> {State +1} / {length} </span>
    </>) : null
}
</div>


);
};