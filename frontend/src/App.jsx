import './App.css';
import CreateBlog from './Components/CreateBlog';
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import Single from './Components/Single';
import {BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login></Login>} />
        <Route path='/signup' element={<Register></Register>}/>
        <Route path='/HomePage' element={<Home></Home>}/>
        <Route path='/PostPage/:id' element={<Single></Single>} />
        <Route path='/CreatePost' element={<CreateBlog></CreateBlog>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
