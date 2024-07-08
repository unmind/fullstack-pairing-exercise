import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Navbar";
import Checkin from "./pages/Checkin";
import Insights from "./pages/Insights";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="checkin" />}></Route>
          <Route path="/checkin" element={<Checkin />}></Route>
          <Route path="/insights" element={<Insights />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
