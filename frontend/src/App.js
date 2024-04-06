import {BrowserRouter,Routes,Route}  from "react-router-dom"
import Layout from "./components/layout";
import Home from "./components/home";
import Contact from "./components/contact";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Layout />} >
      <Route index  element={<Home />} />
      <Route path="/contact" element={<Contact />} />
    </Route>
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
