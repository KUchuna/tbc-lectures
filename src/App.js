import './styles/App.css';
import Header from './components/Header.jsx';
import Main from './components/Main.jsx'
import Footer from './components/Footer.jsx';
import { Route, Routes } from 'react-router-dom';
import Contact from './components/Contact.jsx';

function App() {
  return (
    <div className="app">
        <Header />
      <Routes>
        <Route index element={<Main />} />
        <Route path='/home' element={<Main />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
        <Footer />
    </div>
  );
}

export default App;
