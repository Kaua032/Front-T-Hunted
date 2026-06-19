import { useState } from "react";
import Header from "../../Components/Header/Header";
import { BackgroundHomeStyled } from "./HomeStyled";

export interface CarData {
  id?: string;
  name: string;
  toyNumber: string;
  imageUrl: string;
  averagePrice: number;
  year: number;
  series: string;
}

function Home() {
  const [searchedCar, setSearchedCar] = useState<CarData | null>(null);

  return (
    <BackgroundHomeStyled>
      <Header onCarFound={setSearchedCar} />
      <h1>Home</h1>

      {console.log(searchedCar)}
    </BackgroundHomeStyled>
  );
}

export default Home;
