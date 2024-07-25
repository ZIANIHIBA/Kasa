import { useParams } from "react-router-dom"
import"../App.css"
import datas from"../data/logements.json"
import SlideShow from "../components/SlideShow";
import Collapse from "../components/Collapse";
import Rating from "../components/Rating"
const findLogement=(id)=>{
    return datas.find((data)=>data.id===id);
}


export default function Logement (){
const {id}=useParams()
const logement=findLogement(id)



return(
    <div className="Fichelogement">
        <SlideShow slides= {logement.pictures} />
        <h2> {logement.title} </h2>
        <p>{logement.location} </p>
        
        <p>{logement.host.name}</p>
        <img src={logement.host.picture} alt="ee"></img>
        <Rating props={logement.rating} />
        <div className="collapse">
        <Collapse title="description" content={logement.description}/>
        <Collapse title="equipement" content={logement.equipments}/>
        </div>

    </div>
)

}