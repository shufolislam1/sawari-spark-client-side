import { Route, Routes } from 'react-router-dom';
import './App.css';
import BookOrder from './pages/BookOrder/BookOrder';
import DashBoard from './pages/BookOrder/DashBoard';
import Header from './pages/Home/Header';
import Home from './pages/Home/Home'
import Reviews from './pages/Home/Reviews';
import Login from './pages/Login/Login';
import Register from './pages/Login/Registration';
import RequireAuth from './pages/Login/RequireAuth'
import PageNotFound from './pages/Shared/PageNotFound';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/reviews' element={<Reviews></Reviews>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/bookorder' element={<RequireAuth><BookOrder></BookOrder></RequireAuth>}></Route>
        <Route path='/dashboard' element={<RequireAuth><DashBoard></DashBoard></RequireAuth>}></Route>
        <Route path='/spark/:sparkId' element={<RequireAuth><BookOrder></BookOrder></RequireAuth>}></Route>
        <Route path='*' element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
