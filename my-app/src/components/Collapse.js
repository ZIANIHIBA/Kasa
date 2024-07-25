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
    <div>
<div className="Btncollapse">

<h2> {title} </h2>
<img src={expande_arrow} className={open?"expandarrow":"arrowdown"} alt="" onClick={display}/>

 </div> 
 <> 
{  Array.isArray(content) ?
(open && <ul>{content.map((equipement,index)=> (<li key={index}> {equipement} </li>))}</ul> )
 :(  open &&

  ( <div> {content} </div>)    ) 
 }
    
</>
 </div> 

)

}