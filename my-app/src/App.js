import{ BrowserRouter,Routes,Route}from 'react-router-dom'
import './App.css';
import Header from'./components/header.js'
import Footer from './components/footer.js'
import Logement from "./pages/Logement.js"
import Apropos from './pages/Apropos.js'
import Accueil from './pages/Accueil.js';
import Error from './pages/Error.jsx'
function App() {
  return (
    
     <BrowserRouter>
     <Header/>
     <Routes>
      <Route index element={<Accueil/>}/>
      <Route path='/Accueil' element={<Accueil/>}/>
      <Route path='/Apropos' element={<Apropos/>}/>
      
       <Route path='/logement/:id' element={<Logement/>}/> 
       <Route path="/*" element={<Error />} />
     </Routes>
     <Footer/>
     </BrowserRouter>
     

  );
}

export default App;
