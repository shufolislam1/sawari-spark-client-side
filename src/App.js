import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './pages/Home/Header';
import Home from './pages/Home/Home'
import Login from './pages/Login/Login';
import Register from './pages/Login/Registration';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
      </Routes>
    </div>
  );
}

export default App;
