import "./App.css";
import { LeftMenu } from "./Components/LeftMenu";
import { MainContainer } from "./Components/MainContainer";
import { RightMenu } from "./Components/RightMenu";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import { DanceTunes } from "./Components/DanceTunes";
import { CountryTunes } from "./Components/CountryTunes";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <LeftMenu />
        <Routes>
          <Route path="/" element={<MainContainer />} />
          <Route path="/dance" element={<DanceTunes />} />
          <Route path="/country" element={<CountryTunes />} />
        </Routes>
        {/* <MainContainer /> */}
        <RightMenu />

        <div className="background"></div>
      </div>
    </BrowserRouter>
  );
}

export default App;
