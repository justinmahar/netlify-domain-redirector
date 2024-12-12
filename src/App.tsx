import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { RedirectorSetup } from "./components/Redirector";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<RedirectorSetup />} />
      </Routes>
    </Router>
  );
};

export default App;
