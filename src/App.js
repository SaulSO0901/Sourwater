import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

import Home from './pages/Home';
import Store from './pages/Store';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        
        <Route index element={<Store/>}/>
        <Route path='/store' element={<Store/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
