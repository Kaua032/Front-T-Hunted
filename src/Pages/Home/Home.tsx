import { useState, useEffect } from "react";
import Header from "../../Components/Header/Header";
import { BackgroundHomeStyled, ButtonChooseLayout } from "./HomeStyled";

import ListItemCar from "../../Components/ListItemCar/ListItemCar";
import GridItemCar from "../../Components/GridItemCar/GridItemCar";

import GridItemCarCollection from "../../Components/GridItemCarCollection/GridItemCarCollection";

import { getCollection } from "../../services/collectionService";
import ListItemCarCollection from "../../Components/ListItemCarCollection/ListItemCarCollection";

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
          <h2>Sua coleção:</h2>

          <div id="cards">
            <div className="cards" id="total_cust">
              <div className="border_card"></div>
              <div className="card_layout_2">
                <div className="title_card">
                  <img style={{ height: "44px" }} src="./wallet.png" alt="" />
                  <p>Custo Total:</p>
                </div>
                <p className="card_value">
                  R$ {totalCost.toFixed(2).replace(".", ",")}
                </p>
              </div>
            </div>

            <div className="cards" id="average_price">
              <div className="border_card"></div>
              <div className="card_layout_2">
                <div className="title_card">
                  <img style={{ height: "50px" }} src="./grafico.png" alt="" />
                  <p>Valor de Mercado:</p>
                </div>
                <p className="card_value">
                  R$ {marketValue.toFixed(2).replace(".", ",")}
                </p>
              </div>
            </div>

            <div className="cards" id="rarest_piece">
              <div className="border_card"></div>
              <div className="card_layout_2">
                <div className="title_card">
                  <img style={{ height: "54px" }} src="rare.png" alt="" />
                  <p>Peça mais valiosa:</p>
                </div>
                <div id="part2_rare_piece">
                  {rarestPiece && (
                    <img
                      src={rarestPiece.car.imageUrl}
                      alt={rarestPiece.car.name}
                    />
                  )}

                  <p className="card_value">
                    {rarestPiece
                      ? `R$ ${(Number(rarestPiece.car.averagePrice) * COTACAO_DOLAR).toFixed(2).replace(".", ",")}`
                      : "R$ 0,00"}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div id="collection_layout">
            <div id="choose_layout_collection">
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

            <div id="collection" className={layoutMode}>
              {myCollection.map((item) =>
                layoutMode === "list" ? (
                  <ListItemCarCollection
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
              <ListItemCar
                key={searchedCar.id}
                {...searchedCar}
              />
            ) : (
              <GridItemCar
                key={searchedCar.id}
                {...searchedCar}
              />
            )}
          </div>
        </div>
      )}
    </BackgroundHomeStyled>
  );
}

export default Home;
