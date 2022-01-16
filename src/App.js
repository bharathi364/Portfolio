import './App.css';
import {BrowserRouter,Routes} from 'react-router-dom';
import {Route} from 'react-router-dom';
import Header from './components/Header';
import Contact from './Pages/contact';
import Skills from './Pages/Skills';
import About from './Pages/About';
import Home from './Pages/Home';
import Education from './Pages/Education';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
            <Header/>
            <Routes>
                <Route exact path ="/" element ={<Home/>}/>
                <Route exact path ="/education" element ={<Education/>}/>
                <Route exact path ="/about" element ={<About/>}/>
                <Route exact path ="/skills" element ={<Skills/>}/>
                <Route exact path ="/contact" element ={<Contact/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    </div>
  );
}

export default App;
