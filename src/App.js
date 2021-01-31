import './styles/app.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import Routes from './routes';

function App() {
  return (
    <div id="app">
      <Header />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
