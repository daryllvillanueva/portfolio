import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="*" element={<h2>Not Found</h2>} />
      </Routes>
    </Router>
  );
}
export default App;