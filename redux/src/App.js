
import './App.css';
import Home from './Home';
import About from './About';
import Contact from './Contact';

import {
  createBrowserRouter, RouterProvider,} from "react-router-dom";

let routerPaths = createBrowserRouter([
  {"path":"/Home.js","element":<Home/>},
  {"path":"/About.js","element":<About/>},
  {"path":"/Contact.js","element":<Contact/>},
])
    
function App() {
  return (
    <div>
     <RouterProvider router={routerPaths} />
    </div>
  );
}

export default App;