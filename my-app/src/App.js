import{ BrowserRouter,Routes,Route}from 'react-router-dom'
import './App.css';

import Apropos from './pages/Apropos.js'
import Accueil from './pages/Accueil.js';

function App() {
  return (
    <div>
     <BrowserRouter>
     <Routes>
      <Route index element={<Accueil/>}/>
      <Route path='/Accueil' element={<Accueil/>}/>
      <Route path='/Apropos' element={<Apropos/>}/>
     </Routes>
     </BrowserRouter>
     
    </div>
  );
}

export default App;
