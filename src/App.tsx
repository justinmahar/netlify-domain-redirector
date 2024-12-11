import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Redirector } from "./Redirector";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<Redirector />} />
      </Routes>
    </Router>
  );
};

export default App;
