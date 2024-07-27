import { useParams } from "react-router-dom"
import"../App.css"
import datas from"../data/logements.json"
import SlideShow from "../components/SlideShow";
import Collapse from "../components/Collapse";
import Rating from "../components/Rating";
import Tags from "../components/Tags"
const findLogement=(id)=>{
    return datas.find((data)=>data.id===id);
}


export default function Logement (){
const {id}=useParams()
const logement=findLogement(id)



return(
    <div className="Fichelogement">
        <SlideShow slides= {logement.pictures} />
        <div className="logement">
        <div>
        <h2> {logement.title} </h2>
        <p>{logement.location} </p>
        </div>
        <div className="Host">
        <p>{logement.host.name}</p>
        <img src={logement.host.picture} alt="ee"></img>
        </div>
        
        </div>
        <div className="ratingtag">
        <Tags tagtitle={logement.tags} />
        <Rating props={logement.rating} />
        
        </div>
    
        <div className="collapse">
        <Collapse title="Description" content={logement.description}/>
        <Collapse title="equipement" content={logement.equipments}/>
        </div>

    </div>
)

}