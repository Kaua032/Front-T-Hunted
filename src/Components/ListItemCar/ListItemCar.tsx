import { useState } from "react";
import { ListItemCarStyled } from "./ListItemCarStyled";
import Button from "../../Components/Button/Button";
import { createCar } from "../../services/carService";

function ListItemCar({
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

    const bodyCarro = {
      toyNumber,
      name,
      series,
      year,
      averagePrice,
      imageUrl,
      isTh: isTh || false,
      isSth: isSth || false,
    };

    const bodyColecao = {
      toyNumber,
      quantity,
      price: Number((price / 5.14).toFixed(2)),
    };

    console.log("Body 1 (Carro):", bodyCarro);
    console.log("Body 2 (Coleção):", bodyColecao);

    try {
      // Primeira requisição
      // const responseCar = await createCar(bodyCarro);

      // Segunda requisição (Exemplo)
      // const responseCollection = await addToCollection(bodyColecao);

      console.log("Sucesso! As duas requisições foram feitas.");
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.message ||
        "Erro ao criar o carro ou adicionar na coleção";
      setServerError(errorMessage);
      console.error(error);
    }
  }

  return (
    <ListItemCarStyled>
      <form onSubmit={inHandleSubmit}>
        <div id="imgCar">
          <img src={imageUrl} alt={name} />
        </div>

        <div id="name_quantity">
          <h3>{name}</h3>
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
      </form>
    </ListItemCarStyled>
  );
}

export default ListItemCar;
