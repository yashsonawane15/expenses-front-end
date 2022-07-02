import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './screens/Login/Login';
import Header from './common/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route exact path="/" element={ <Login /> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
