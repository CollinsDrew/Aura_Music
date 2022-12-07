import "../App.css";
import { LeftMenu } from "../Components/LeftMenu";
import { RightMenu } from "../Components/RightMenu";
import { useParams } from "react-router-dom";

export function GenrePage({ match }) {
  const { genreId } = useParams();
  return (
    <div className="App">
      <LeftMenu />
      <div style={{ color: "white" }}>Genre: {genreId}</div>
      <RightMenu />
      <div className="background"></div>
    </div>
  );
}
