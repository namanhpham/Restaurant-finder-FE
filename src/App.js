import Header from './components/Header/Header';
import UserPage from './pages/UserPage';
import FavoritePage from './pages/FavoritePage';
import MainPage from './pages/MainPage';
import { AuthProvider } from './contexts/AuthContext';

// eslint-disable-next-line
import { BrowserRouter as Router, Routes, Route, Link, Redirect } from "react-router-dom";

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="App">
          <Header/>
          <Routes>
            <Route exact path="/" element={<MainPage/>}/>
            <Route exact path="/login" element={<UserPage/>}/>
            <Route exact path="/favorite" element={<FavoritePage/>}/>
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
