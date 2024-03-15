import './styles/App.css';
import Header from './components/Header.jsx';
/* import Main from './components/Main.jsx' */
import Footer from './components/Footer.jsx';
import Services from './components/Services.jsx';
import Search from './components/Search.jsx';


function App() {
  return (
    <div className="app">
      <Header />
      {/* for the sake of current assignment I commented out the original main section */}
      {/*<Main />*/}
      <Search />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
