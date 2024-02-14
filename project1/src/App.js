import First from "./components/first.jsx"
import Second from "./components/second.jsx"
import Third from "./components/third.jsx"
import Fourth from "./components/fourth.jsx"
import Child from "./components/child.jsx"
import "./index.css"


function App(){
  return <>
       <div className="container">
          <First  />
          <Second />
          <First name="Third" />
          <Second name="Fourth" />
          {/* the below code the children of the component  */}
          
       </div>

       <div className="container">
        <Third />
        <Fourth />
       </div>

       <Child>My name is Rohit</Child>
       
  </>
}

export default App;
