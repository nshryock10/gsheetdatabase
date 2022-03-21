import logo from './logo.svg';
import './App.css';
import { addSheetValues, getPlayerData } from './utils/accessSheets';
import TableContainer from './components/TableContainer';

function App() {

  const handleClick = async () => {
    addSheetValues(20, 6);
    const playerData = await getPlayerData();
    console.log(playerData);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={handleClick} >Get DATA!!</button>
        <TableContainer/>
      </header>
    </div>
  );
}

export default App;
