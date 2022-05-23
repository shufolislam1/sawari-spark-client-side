import { Route, Routes } from 'react-router-dom';
import './App.css';
import BookOrder from './pages/BookOrder/BookOrder';
import Header from './pages/Home/Header';
import Home from './pages/Home/Home'
import Login from './pages/Login/Login';
import Register from './pages/Login/Registration';
import RequireAuth from './pages/Login/RequireAuth'

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/bookorder' element={<RequireAuth><BookOrder></BookOrder></RequireAuth>}></Route>
      </Routes>
    </div>
  );
}

export default App;
