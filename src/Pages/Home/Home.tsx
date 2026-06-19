import { useState } from "react";
import Header from "../../Components/Header/Header";
import { BackgroundHomeStyled } from "./HomeStyled";
import ListItemCar from "../../Components/ListItemCar/ListItemCar";

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
      <div id="results">{searchedCar && <ListItemCar {...searchedCar} />}</div>
    </BackgroundHomeStyled>
  );
}

export default Home;
