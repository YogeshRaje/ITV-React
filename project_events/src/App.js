// import Data from "./component/data";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./component/layout";
import Home from "./component/home";
import About from "./component/about";
import Contact from "./component/contact";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
// import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.css"

function App(){
  return (
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<Layout/>}>
         <Route index element={<Home />}/>
         <Route path="about" element={<About />} />
         <Route path="contact" element={<Contact />} />
      </Route>
     </Routes> 
    </BrowserRouter>
  )
}

export default App;