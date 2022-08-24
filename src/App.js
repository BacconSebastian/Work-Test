import './App.css';
import { Routes, Route } from "react-router-dom"
import NavBar from './components/NavBar/NavBar';
import TablePage from './components/TablePage/TablePage';
import FormPage from './components/FormPage/FormPage';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" element={<TablePage/>} />
        <Route path="/form" element={<FormPage/>} />
      </Routes>
    </div>
  );
}

export default App;
