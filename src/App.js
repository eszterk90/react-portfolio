import './styles/App.scss';
import {Routes, Route} from 'react-router-dom'
import Nav from './components/navbar/Nav'
import Home from './components/home/Home'
import About from './components/about/About'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'
// import Footer from './components/footer/Footer'

function App() {
  return (
    <div className="App">
      <Nav/>
      <main>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </main>
      
    </div>
  );
}

export default App;
