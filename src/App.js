import './App.css';
import LoginPage from './pages/LoginPage';
import FavoritePage from './pages/FavoritePage';

import { BrowserRouter as Router, Routes, Route, Link, Redirect } from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">

      <Routes>
        <Route exact path="/login" element={<LoginPage/>}/>
        <Route exact path="/favorite" element={<FavoritePage/>}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
