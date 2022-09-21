import './App.css';
import NavigationBar from './components/Navigationbar';
import Intro from './components/Intro'
import Trending from './components/Trending';
import './style/landingPage.css'
import SuperHero from './components/Superhero'

function App() {
  return (
    <div >
    {/* intro section */}
      <div className='myBG'>
        <NavigationBar />
        <Intro />
      </div>
      {/* end of intro */}

      {/* trending section */}
      <div className='trending'>
        <Trending />
      </div>

      <div className='superHero'>
        <SuperHero />
      </div>
    </div>
  );
}

export default App;
