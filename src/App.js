
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';


function App() {
  return (
    <div className="App">
<div>
      <Header/>
      <br />
      
<Routes>
    <Route path='/'element={<Home/>}/>
  </Routes>
  <br />
  <br />
  <br />
  <Footer/>
    </div>

      
    </div>
  );
}

export default App;
