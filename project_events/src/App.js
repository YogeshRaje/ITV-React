// import Data from "./component/data";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./component/layout";
import Home from "./component/home";
import About from "./component/about";
import Contact from "./component/contact";
import State from "./component/state";
import { State1 } from "./component/state";
import UpdateState from "./component/stateupdate";
import UseEffect from "./component/useeffect1";
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
         <Route path="state" element={<State />} />
         <Route path="state1" element={<State1 />} />
         <Route path="stateupdate" element={<UpdateState />} />
         <Route path="useeffect" element={<UseEffect />} />
      </Route>
     </Routes> 
    </BrowserRouter>
  )
}

export default App;