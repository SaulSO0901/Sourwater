import './App.css';
import Navbar from './components/Navbar';
import MBNavbar from './components/MBNavbar';
import Header from './components/Header';
import Ads from './components/Ads';
import AdsValue from './components/AdsValue';
import Testing from './components/Testing';
import PopularCat from './components/PopularCat';
import ProductSuggest from './components/ProductSuggest';
import Tiles from './components/Tiles';
import TopNew from './components/TopNew';
import DSales from './components/DSales';
import Carrer from './components/Carrer';
import RecentlyV from './components/RecentlyV';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <MBNavbar/>
      <Header/>
      <div className='px-4'>
   <Ads/>
   <AdsValue/>
   <PopularCat/>
   <ProductSuggest/>
   <Tiles/>
   <TopNew/>
   <DSales/>
   <Carrer/>
   <RecentlyV/>
   </div>

 
   <Footer/>
    </div>
  );
}

export default App;
