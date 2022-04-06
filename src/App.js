import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Excercise1 } from "./excecises/Excercise1";
import { Excercise2 } from "./excecises/Excercise2";
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
         <Routes>
            <Route path="/excercise1" element={<Excercise1 />} />
            <Route path="/excercise2" element={<Excercise2 />} />
         </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
