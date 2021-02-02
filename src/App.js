import './styles/app.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import Routes from './routes';
import UserStore from './stores/UserStore';

function App() {
  return (
    <div id="app">
      <UserStore>
        <Header />
        <main>
          <Routes />
        </main>
        <Footer />
      </UserStore>
    </div>
  );
}

export default App;
