import './styles/App.css';
import Header from './components/Header.jsx';
import Home from './routes/Home.jsx'
import Footer from './components/Footer.jsx';
import { Route, Routes } from 'react-router-dom';
import Contact from './routes/Contact.jsx';

function App() {
  return (
    <div className="app">
        <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
        <Footer />
    </div>
  );
}

export default App;
