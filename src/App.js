import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Movies from './components/Movies2';
import Addmovie from './components/Addmovie';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Navbar></Navbar>
       <Routes>
       <Route path='/movies' element={<Movies></Movies>}></Route>
       <Route path='/addmovie' element={<Addmovie data={{id:'',name:'',director:'',language:'',genere:'',release:''}} method="post"></Addmovie>}></Route>
       </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
