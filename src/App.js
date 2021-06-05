import './App.css';
import { HashRouter as Router } from 'react-router-dom'
import Routes from "./components/Routes"
import { useAuth } from "./provider/AuthProvider"


function App() {
  const { signOut } = useAuth()

  return (
    <div className="App">
      <Router>
        <div className="banner">
          <p>Hello, Trainer</p>
          <button onClick={() => signOut(()=>{})}>Logout</button>
        </div>
        <Routes />
      </Router>
    </div>
  );
}

export default App;
