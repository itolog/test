
import {Route, Routes, Link, BrowserRouter} from "react-router-dom";
import StepOne from "./StepOne.jsx";
import StepTwo from "./StepTwo.jsx";


function App() {
  return (
<div>

    <BrowserRouter>
        <Link to={"/"}>1</Link>
        <br/>
        <Link to={"/step-2"}>2</Link>
        <Routes>
            <Route index element={<StepOne />} />
            <Route path="step-2" element={<StepTwo />} />
        </Routes>
    </BrowserRouter>

</div>)
}

export default App
