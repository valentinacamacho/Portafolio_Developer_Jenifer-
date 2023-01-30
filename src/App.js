import "./App.css";
import { Route, Routes } from "react-router";
import Sidebar from "./Layout/Sidebar";
import Principal from "./Pages/Principal";
import Skills from "./Components/Skills";
import Cards from "./Components/Cards"

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <Routes>
        <Route path="/" element={<Principal/>} />
        <Route path="/Cards" element={<Cards/>} />
        <Route path="/Skills" element={<Skills/>} />
        <Route path="/" element={<Principal/>} />
      </Routes>

      {/* <Principal /> */}
      {/* {<Skills/>} */}
    </div>
  );
}

export default App;
