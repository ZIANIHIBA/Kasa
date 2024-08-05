import '../App.css'

import { NavLink } from 'react-router-dom'


export default function Error (){

return(
    <div className='errorpage'>
        <h2 className='' >404</h2>
        <p className='errortext' >Oups!La page que vous demandez n'existe pas. </p>
      <NavLink to='/'>Retourner sur la page d'accueil</NavLink>
    </div>
)

}