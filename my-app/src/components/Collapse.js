import expande_arrow from "../images/expande_arrow.png";
import { useState } from "react";


import "../App.css"

export default function Collapse({title,content}){
const[open , setOpen]=useState(false);
 const display =()=>{
    setOpen(!open)
}
// console.log(content)
return (

<div className="Btncollapse">

<p> {title} </p>
<img src={expande_arrow} className={open?"expandarrow":"arrowup"} alt="" onClick={display}/>

 
 
{  Array.isArray(content) ?
(open && <ul className="listcolapse">{content.map((equipement,index)=> (<li key={index}> {equipement} </li>))}</ul> )
 :(  open &&

  ( <div> {content} </div>)    ) 
 }
    
 </div> 

)

}