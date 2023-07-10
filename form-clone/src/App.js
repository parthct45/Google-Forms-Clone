import HomePage from "./Components/HomePage";
import { Routes, Route } from "react-router-dom";
import ParentComponent from "./Components/ParentComponent";
import ResponderComponent from "./Components/Responder";
import RecentFormParentComponent from "./Components/RecentFormParent";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/form/edit/:id" element={<ParentComponent />}></Route>
        <Route
          path="/form/response/:id/:title"
          element={<ResponderComponent />}
        ></Route>
        <Route path="/form/recent/:id/:title"  element={<RecentFormParentComponent/>}></Route>
      </Routes>
    </>
  );
}

export default App;
