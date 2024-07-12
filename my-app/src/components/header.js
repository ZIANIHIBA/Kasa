
import logoKasa from "../images/logoKasa.png"
import  '../App.css'
import{NavLink} from "react-router-dom";


export default function  Header  (){
    return (  
    <div className="nav"> 
         <img src={logoKasa} alt='logo la kasa'/>
         <nav>
        
            <NavLink to='/Accueil' className={({isActive}) =>(isActive? "underline":"")} >
            Accueil
            </NavLink>
            <NavLink to='/Apropos'className={({isActive}) =>(isActive? "underline":"")}>
            <li>A propos</li>
            </NavLink>
    
    </nav>
      
    </div>)
}