import './App.css';
import { Amazingmorning } from './components/Amazingmorning/Amazingmorning';
import Feedback from './components/Feedback/Feedback';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import HeroData from './components/HeroData/HeroData';
import HomeData1 from './components/HomeData1/HomeData1';
import NewBlend from './components/NewBlend/NewBlend';
import Subscribe from './components/Subscribe/Subscribe';
import Yourcoffee from './components/Yourcoffee/Yourcoffee';

function App() {
  return (
    <div>
     <div style={{minHeight:"100vh"}} >
    <Header/>
     <HeroData/>
    </div>
     <HomeData1/>
     <NewBlend/>
     <Yourcoffee/>
     <Amazingmorning/>
     <Feedback/>
     <Subscribe/> 
     <Footer/>
    </div>
  );
}

export default App;
