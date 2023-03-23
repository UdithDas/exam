import logo from './logo.svg';
import './App.css';

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
