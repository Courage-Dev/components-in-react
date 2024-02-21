
import './App.css';
import{Routes,Route} from 'react-router-dom'
// import Div1 from './pages/home';
import Home from './pages/home';
function App() {


  return (<Routes>
    <Route path ='/home' element={<Home/>}/>

    
  </Routes>) 
}

export default App;
