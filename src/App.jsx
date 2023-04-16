import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Dashboard, Auth } from "./layouts";
import Home from "./Home";
function App(){
  return(
    <div>
      <BrowserRouter>
      <Routes>
      <Route path="/dashboard/*" element={<Dashboard />} />
      <Route path="/auth/*" element={<Auth />} />
        <Route exact path="/" element={ <Home/>}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App;
