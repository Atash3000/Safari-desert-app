import Header from './components/Header/Header';
import Tours from './components/Section-tours/Tours';
import TourInfo from './components/Tour-info/TourInfo';
import Card from './components/Card/Card';
import Navigation from './components/Navigation/Navigation';



function App() {
  return (
    <div className='App'>
    <Navigation/>
    <Header/>
    <Tours/>
    <TourInfo/>
    <Card/>
    </div>
    
  );
}

export default App;
