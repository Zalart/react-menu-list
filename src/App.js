import './App.css';
import data from './data';
import CardsMenu from './components/CardsMenu';

function App() {
  return (
    <>
      <h1>DRANIK-LAND MENU</h1>
      <div className="App">

        <CardsMenu {...data} />
      </div>
    </>
  );
}

export default App;
