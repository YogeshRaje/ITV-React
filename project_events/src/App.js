// import Data from "./component/data";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./component/layout";
import Home from "./component/home";
import About from "./component/about";




function App(){
  return (
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<Layout/>}>
         <Route index element={<Home />}/>
         <Route path="about" element={<About />} />
      </Route>
     </Routes> 
    </BrowserRouter>
  )
}

export default App;