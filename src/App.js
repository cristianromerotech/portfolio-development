
import './App.css';
import ResponsiveAppBar from './AppBar/AppBar';
import Homepage from './pages/Homepage';

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      
      <header className="App-header">
     <Homepage/>
      </header>
    </div>
  );
}

export default App;
