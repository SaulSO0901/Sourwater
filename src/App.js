import './App.css';
import Navbar from './components/Navbar';
import MBNavbar from './components/MBNavbar';
import Header from './components/Header';
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
