import { useParams } from "react-router-dom"
import datas from"../data/logements.json"
const findLogement=(id)=>{
    return datas.find((data)=>data.id===id);
}


export default function Logement (){
const {id}=useParams()
const logement=findLogement(id)
const pictures=logement.pictures
function clicpcture(){
    pictures.forEach(picture => {
        return <img src="{picture.[i++]} " alt="nn"></img>
    });
}
return(
    <div>
        <img src ="{pictures.index} " alt="kok" onClick={clicpcture}></img>
        <p>voici $  {id} </p>
        <p> {logement.title} </p>
    </div>
)

}