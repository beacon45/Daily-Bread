
import './App.css';
import Categories from './components/Categories';
import Feature from './components/Feature';
import Food from './components/Food';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Feature/>
      <Food/>
      <Categories/>
    </div>
  );
}

export default App;
