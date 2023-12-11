import './App.css';
import Navbar from './components/Navbar';
import MBNavbar from './components/MBNavbar';
import Header from './components/Header';
import Ads from './components/Ads';
import AdsValue from './components/AdsValue';
import Testing from './components/Testing';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <MBNavbar/>
    <Header/>
   <Ads/>
   <AdsValue/>
    </div>
  );
}

export default App;
