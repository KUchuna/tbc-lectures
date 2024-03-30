import './styles/App.css';
import Header from './components/Header.jsx';
import Home from './routes/Home.jsx'
import Footer from './components/Footer.jsx';
import { Route, Routes } from 'react-router-dom';
import Contact from './routes/Contact.jsx';
import Profile from './routes/Profile.jsx';
import Blog from './routes/Blog.jsx';
import Services from './routes/Services.jsx';

function App() {
  return (
    <div className="app">
        <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/services' element={<Services />} />
      </Routes>
        <Footer />
    </div>
  );
}

export default App;
