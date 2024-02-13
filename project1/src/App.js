import First from "./components/first.jsx"
import Second from "./components/second.jsx"
import Third from "./components/third.jsx"
import Fourth from "./components/fourth.jsx"
import "./index.css"


function App(){
  return <>
       <div className="container">
          <First  />
          <Second />
          <First name="Third" />
          <Second name="Fourth" />
       </div>

       <div className="container">
        <Third />
        <Fourth />
       </div>
       
  </>
}

export default App;
