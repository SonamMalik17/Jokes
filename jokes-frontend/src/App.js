import './App.css';
import Home from './components/screens/Home';
import About from './components/screens/About';
import Login from './components/screens/Login';
import SignUp from './components/screens/SignUp';
import {
  BrowserRouter as Router,
  Route,Routes
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div style={{ backgroundColor: '#e6e6e6' }}>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/signup' element={<SignUp />} />
          <Route exact path='/about' element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
