import "./App.css";
import { Route, Routes } from "react-router";
import Sidebar from "./Layout/Sidebar";
import Principal from "./Pages/Principal";
import Skills from "./Components/Skills";
import Cards from "./Components/Cards"
import Briefcase from "./Components/Briefcase";

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <Routes>
        <Route path="/" element={<Principal/>} />
        <Route path="/Cards" element={<Cards/>} />
        <Route path="/Skills" element={<Skills/>} />
        <Route path="/Briefcase" element={<Briefcase/>} />
     
      </Routes>

      {/* <Principal /> */}
      {/* {<Skills/>} */}
    </div>
  );
}

export default App;
