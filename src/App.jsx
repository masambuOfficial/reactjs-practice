// import Usingstate from "./components/Usingstate";
import { Routes, Route } from "react-router-dom"
import About from "./components/reactRouter/About"
import Prop from "./components/props/Prop"

function App() {
  return (
    <div>
      <Routes>
          <Route path='/about' element={<About/>} />
          <Route path='/' element={<Prop/>} />
       </Routes>
      {/* <Usingstate /> */}
    </div>
  )
}

export default App
