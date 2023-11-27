import './App.css';
import Navbar from './components/Navbar';
import MBNavbar from './components/MBNavbar';
import Header from './components/Header';
import Studio from './components/header-sections/Studio';
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <MBNavbar></MBNavbar>
    <Header/>
   
    </div>
  );
}

export default App;
