import Header from'../components/header.js'
import Footer from '../components/footer.js'
import Titre from '../components/titre.js'
import Post from '../components/post.js'
import data from"./data/logement.json"

export default function Accueil(){
    return (
        <>
        <Header/>
        <Titre/>
       <div className='posts'>
       
        <Post image="" titre=""/>
        </div>
       
        <Footer/>
       
        </>
    )
}