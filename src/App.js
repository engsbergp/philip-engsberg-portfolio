import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import ImageModal from "./components/ImageModal"
import Header from './components/Header';
import SocialLinks from './components/SocialLinks';
import Humans from './pages/humans';
import Infrared from './pages/infrared';
import Traditional from './pages/traditional';
import Coffee from './pages/coffee';
import Ambl from './pages/ambl';
import Home from './pages/home';
import Ghosts from './pages/ghosts';
import Connect from './pages/connect';
import Support from './pages/support';
import './App.css';

function App() {
  return (
    <div className="App">
    <Router>
      <div className="page">
      <ImageModal/>
      <Header />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path='/infrared' element={<Infrared/>} />
          <Route path='/traditional' element={<Traditional/>} />
          <Route path='/humans' element={<Humans/>} />
          <Route path='/ghosts' element={<Ghosts/>} />
          <Route path='/coffee' element={<Coffee/>} />
          <Route path='/ambl' element={<Ambl/>} />
          <Route path='/connect' element={<Connect/>} />
          <Route path='/support' element={<Support/>} />
        </Routes>
      </div>
      </Router>
      <SocialLinks/>
    </div>
  );
}

export default App;
