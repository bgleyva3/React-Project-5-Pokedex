import './App.css';
import { HashRouter as Router } from 'react-router-dom'
import Routes from "./components/Routes"
import { useAuth } from "./provider/AuthProvider"


function App() {
  const { signOut } = useAuth()

  return (
    <div className="App">
      <Router>
        <button onClick={() => signOut(()=>{})}>Logout</button>
        <Routes />
      </Router>
    </div>
  );
}

export default App;
