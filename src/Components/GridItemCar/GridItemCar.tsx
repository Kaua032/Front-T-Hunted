import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../../Components/Button/Button";
import { GridItemcarStyled } from "./GridItemCarStyled";

import { createCar, searchCarByInfo } from "../../services/carService";
import { createCollection } from "../../services/collectionService";

function GridItemCar({
  id,
  name,
  toyNumber,
  imageUrl,
  averagePrice,
  year,
  series,
  isTh,
  isSth,
  existsDatabase,
}) {
  const [serverError, setServerError] = useState("");
  const [quantity, setQuantity] = useState(0);

  const [price, setPrice] = useState((averagePrice * 5.14).toFixed(2));
  
  const navigate = useNavigate();

  function handleMinus() {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  }

  function handlePlus() {
    setQuantity(quantity + 1);
  }

  async function inHandleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setServerError("");

    const bodyCar = {
      toyNumber,
      name,
      series,
      year,
      imageUrl,
      isTh: isTh || false,
      isSth: isSth || false,
    };

    const bodyCollection = {
      condition: "carded",
      quantity,
      purchase_price: Number((Number(price) / 5.14).toFixed(2)), // Corrigido para garantir que 'price' seja lido como número na divisão
    };

    try {
      await createCar(bodyCar);
      console.log("Carro Criado com sucesso.");
    } catch (error: any) {
      if (error.response?.status === 409) {
        console.log("O carro já existe no banco de dados. Pulando criação...");
      } else {
        const errorMessage =
          error.response?.data?.message || "Erro ao criar o carro.";
        setServerError(errorMessage);
        console.error(error);
        return;
      }
    }

    try {
      const existsCar = await searchCarByInfo({ toyNumber });
      const carId = existsCar.data.data[0].id;

      bodyCollection.carId = carId;

      const responseCollection = await createCollection(bodyCollection);

      setQuantity(0);

      if (responseCollection.status === 201) {

        navigate(0); 
      }
    } catch (error: any) {
      console.log(error.message);
    }
  }

  return (
    <GridItemcarStyled>
      <form onSubmit={inHandleSubmit}>
        <div id="imgCar">
          <img src={imageUrl} alt={name} />
        </div>

        <div id="layout_card">
          <div id="name_quantity">
            <h3>{name.length > 20 ? `${name.substring(0, 20)}...` : name}</h3>
            <p>{toyNumber}</p>

            <div>
              <button
                type="button"
                onClick={handleMinus}
                id="minus"
                style={{
                  background: "url('./Minus_quantity.png')",
                }}
              />
              <input
                type="number"
                name="quantity"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
              />
              <button
                type="button"
                onClick={handlePlus}
                id="plus"
                style={{
                  background: "url('./Plus_quantity.png')",
                }}
              />
            </div>
          </div>

          <div id="price_add">
            <div>
              <p>R$</p>
              <input
                type="number"
                step="0.01"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                style={{
                  width: `${Math.max(String(price).length, 4)}ch`,
                }}
              />
            </div>

            <Button
              type="submit"
              name=""
              style={{
                background: "url('./Plus.png')",
                width: "20px",
                height: "20px",
                borderRadius: "0",
              }}
            />
          </div>
        </div>
      </form>
    </GridItemcarStyled>
  );
}

export default GridItemCar;