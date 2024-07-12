import LOGO from "../images/LOGO.png"
import '../App.css'
export default function Footer (){
    return (
        <div className="footer"> 
        <img src={LOGO} alt="logo site"/>
        <p>c 2020.All rights reserved</p>
        </div>
    )
}