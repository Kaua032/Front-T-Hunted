import { useState } from "react";
import Header from "../../Components/Header/Header";
import { BackgroundHomeStyled, ButtonChooseLayout } from "./HomeStyled";

import ListItemCar from "../../Components/ListItemCar/ListItemCar";
import GridItemCar from "../../Components/GridItemCar/GridItemCar";

export interface CarData {
  id?: string;
  name: string;
  toyNumber: string;
  imageUrl: string;
  averagePrice: number;
  year: number;
  series: string;
}

type LayoutMode = "list" | "grid";

function Home() {
  const [searchedCar, setSearchedCar] = useState<CarData | null>(null);

  const [layoutMode, setLayoutMode] = useState<LayoutMode>("list");

  return (
    <BackgroundHomeStyled>
      <Header onCarFound={setSearchedCar} />
      <div id="results_layout">
        <div id="chosse_layout">
          <ButtonChooseLayout
            type="button"
            $mode="list"
            $isActive={layoutMode === "list"}
            onClick={() => setLayoutMode("list")}
          />
          <ButtonChooseLayout
            type="button"
            $mode="grid"
            $isActive={layoutMode === "grid"}
            onClick={() => setLayoutMode("grid")}
          />
        </div>
        <div id="results">
          {searchedCar &&
            (layoutMode === "list" ? (
              <ListItemCar {...searchedCar} />
            ) : (
              <GridItemCar {...searchedCar} />
            ))}
        </div>
      </div>
    </BackgroundHomeStyled>
  );
}

export default Home;
