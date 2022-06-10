
import './App.css';
import Home from './components/Home/Home';
import { Routes, Route, Link } from "react-router-dom";
import Header from './components/Header/Header';

function App() {
  return (
    <>
    <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
