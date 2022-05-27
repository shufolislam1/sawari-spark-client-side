import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './pages/Blog/Blog';
import AddReview from './pages/BookOrder/AddReview';
import BookOrder from './pages/BookOrder/BookOrder';
import DashBoard from './pages/BookOrder/DashBoard';
import MyOrders from './pages/BookOrder/MyOrders';
import MyProfile from './pages/BookOrder/MyProfile';
import Header from './pages/Home/Header';
import Home from './pages/Home/Home'
import Reviews from './pages/Home/Reviews';
import Login from './pages/Login/Login';
import Register from './pages/Login/Register';
import RequireAuth from './pages/Login/RequireAuth'
import PageNotFound from './pages/Shared/PageNotFound';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AllUsers from './pages/BookOrder/AllUsers';

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
        <Route path='/blog' element={<Blog></Blog>}></Route>
        {/* <Route path='/bookorder' element={<RequireAuth><BookOrder></BookOrder></RequireAuth>}></Route> */}
        <Route path='/dashboard' element={<RequireAuth><DashBoard></DashBoard></RequireAuth>}>
            <Route index element={<MyOrders></MyOrders>}></Route>
            <Route path='myprofile' element={<MyProfile></MyProfile>}></Route>
            <Route path='addreview' element={<AddReview></AddReview>}></Route>
            <Route path='users' element={<AllUsers></AllUsers>}></Route>
        </Route>
        <Route path='/spark/:sparkId' element={<RequireAuth><BookOrder></BookOrder></RequireAuth>}></Route>
        <Route path='*' element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
