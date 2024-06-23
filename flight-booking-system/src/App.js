import './App.css';
// import DemoIcon from './components/DemoIcon';
import FlightSearch from './components/FlightSearch';
import ResponsiveAppBar from './components/ResponsiveAppBar';

function App() {
  return (
    <div className="container">
      {/* <DemoIcon/> */}
      <ResponsiveAppBar/>
      <FlightSearch/>

    </div>
  );
}

export default App;
