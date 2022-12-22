import "./App.css";
import { LeftMenu } from "./Components/LeftMenu";
import { MainContainer } from "./Components/MainContainer";
import { RightMenu } from "./Components/RightMenu";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <LeftMenu />
        <Routes>
          <Route path="/" element={<MainContainer />} />
        </Routes>
        {/* <MainContainer /> */}
        <RightMenu />

        <div className="background"></div>
      </div>
    </BrowserRouter>
  );
}

export default App;
