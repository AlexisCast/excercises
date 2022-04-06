import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Excercise1 } from "./excecises/Excercise1";
import { Excercise2 } from "./excecises/Excercise2";
import logo from './logo.svg';
import './App.css';

function App() {
  return (
      <BrowserRouter>
         <Routes>
            <Route path="/excercise2" element={<Excercise2 />} />
            <Route path="/*" element={
               <Routes>
                  <Route path="excerciseA" element={<Excercise1 />} />
                  <Route path="excerciseB" element={<Excercise2 />} />
               </Routes>
   } />
         </Routes>
      </BrowserRouter>
  );
}

export default App;