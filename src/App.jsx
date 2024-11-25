
import {Route, Routes, Link, BrowserRouter} from "react-router-dom";
import StepOne from "./StepOne.jsx";
import StepTwo from "./StepTwo.jsx";


function App() {
  return (
<div>

    <BrowserRouter>
        <Link to={"/"}>MAIN</Link>
        <br/>
        <Link to={"/step-2"}>SECOND</Link>
        <Routes>
            <Route index element={<StepOne />} />
            <Route path="step-2" element={<StepTwo />} />
        </Routes>
    </BrowserRouter>

</div>)
}

export default App
