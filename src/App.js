import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
import { Excercise1 } from "./excecises/Excercise1";
import { Excercise2 } from "./excecises/Excercise2";
import logo from './logo.svg';
import './App.css';

function App() {
   return (
      <BrowserRouter>
         <div>
            <nav>
               <ul>
                  <li>
                     <Link to="/excerciseA">excerciseA</Link>
                  </li>
                  <li>
                     <Link to="/excerciseB">excerciseB</Link>
                  </li>
               </ul>
            </nav>
         </div>
         <Routes>
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
