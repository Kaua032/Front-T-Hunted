import Header from "../../Components/Header/Header";
import { BackgroundHomeStyled } from "./HomeStyled";

function Home() {
  return (
    <BackgroundHomeStyled>
        <Header />
      <h1>Home</h1>
    </BackgroundHomeStyled>
  );
}

export default Home;
