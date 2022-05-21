import './App.css';
import Banner from './pages/Home/Banner';
import Header from './pages/Home/Header';
import Reviews from './pages/Home/Reviews';
import Footer from './pages/Shared/Footer';

function App() {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <Reviews></Reviews>
      <Footer></Footer>
    </div>
  );
}

export default App;
