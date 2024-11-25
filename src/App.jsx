
import {Route, Routes, Link, BrowserRouter} from "react-router-dom";
import StepOne from "./StepOne.jsx";
import StepTwo from "./StepTwo.jsx";
import "./App.css"


function App() {
  return (
<div>

    <BrowserRouter>
        <div className={"naviga"}>
            <Link to={"/"}>MAIN</Link>
            <Link to={"/step-2"}>SECOND</Link>
        </div>

        <Routes>
            <Route index element={<StepOne />} />
            <Route path="step-2" element={<StepTwo />} />
        </Routes>
    </BrowserRouter>

</div>)
}

export default App
