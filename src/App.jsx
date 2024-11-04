import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import Projects_Info from "./components/projects/Projects_Info";
import PageNotFound from "./components/partials/PageNotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="*" element={<PageNotFound/>}/>
        <Route path="/projects" element={<Projects_Info/>}/>
      </Routes>
    </Router>
  )
}

export default App
