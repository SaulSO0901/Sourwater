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
function App() {
  return (
    <div className="App ">
      <Navbar/>
      <MBNavbar/>
      <div className='px-4'>
    <Header/>
   <Ads/>
   <AdsValue/>
   <PopularCat/>
   <ProductSuggest/>
   <Tiles/>
   <TopNew/>
   </div>
    </div>
  );
}

export default App;
