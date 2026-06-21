import { useState, useEffect } from "react";
import Header from "../../Components/Header/Header";
import { BackgroundHomeStyled, ButtonChooseLayout } from "./HomeStyled";

import ListItemCar from "../../Components/ListItemCar/ListItemCar";
import GridItemCar from "../../Components/GridItemCar/GridItemCar";

import GridItemCarCollection from "../../Components/GridItemCarCollection/GridItemCarCollection";

import { getCollection } from "../../services/collectionService";

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

  const [myCollection, setMyCollection] = useState<any[]>([]);

  useEffect(() => {
    async function loadMyCollection() {
      try {
        const response = await getCollection();
        setMyCollection(response.data);
        console.log("Coleção carregada com sucesso!", response.data);
      } catch (error: any) {
        console.error(
          "Erro ao carregar a coleção:",
          error.response?.data || error.message,
        );
      }
    }

    loadMyCollection();
  }, []);

  const COTACAO_DOLAR = 5.14;

  const totalCost = myCollection.reduce(
    (acc, item) =>
      acc + Number(item.purchase_price) * COTACAO_DOLAR * item.quantity,
    0,
  );

  const marketValue = myCollection.reduce(
    (acc, item) =>
      acc + Number(item.car.averagePrice) * COTACAO_DOLAR * item.quantity,
    0,
  );

  const rarestPiece = [...myCollection].sort(
    (a, b) => Number(b.car.averagePrice) - Number(a.car.averagePrice),
  )[0];

  return (
    <BackgroundHomeStyled>
      <Header onCarFound={setSearchedCar} />

      {!searchedCar && (
        <div id="your_collection">
          <p>Sua coleção:</p>

          <div id="cards">
            <div id="total_cust">
              <div>
                <img src="" alt="" />
                <p>Custo Total:</p>
              </div>
              <p>R$ {totalCost.toFixed(2).replace(".", ",")}</p>
            </div>

            <div id="average_price">
              <div>
                <img src="" alt="" />
                <p>Valor de Mercado:</p>
              </div>
              <p>R$ {marketValue.toFixed(2).replace(".", ",")}</p>
            </div>

            <div id="rarest_piece">
              <div>
                <img src="" alt="" />
                <p>Peça mais valiosa:</p>
              </div>
              <div>
                <img src="" alt="" />
                <p>
                  {rarestPiece
                    ? `R$ ${(Number(rarestPiece.car.averagePrice) * COTACAO_DOLAR).toFixed(2).replace(".", ",")}`
                    : "R$ 0,00"}
                </p>
              </div>
            </div>
          </div>

          <div id="collection_layout">
            <div id="choose_layout">
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

            <div id="collection">
              {myCollection.map((item) =>
                layoutMode === "list" ? (
                  <ListItemCar
                    key={item.id}
                    {...item.car}
                    purchase_price={item.purchase_price}
                    collection_quantity={item.quantity}
                    collectionId={item.id}
                  />
                ) : (
                  <GridItemCarCollection
                    key={item.id}
                    {...item.car}
                    purchase_price={item.purchase_price}
                    collection_quantity={item.quantity}
                    collectionId={item.id}
                  />
                ),
              )}
            </div>
          </div>
        </div>
      )}

      {searchedCar && (
        <div id="results_layout">
          <div id="choose_layout">
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
            {layoutMode === "list" ? (
              <ListItemCar {...searchedCar} />
            ) : (
              <GridItemCar {...searchedCar} />
            )}
          </div>
        </div>
      )}
    </BackgroundHomeStyled>
  );
}

export default Home;
