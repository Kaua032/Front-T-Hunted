import { ListItemCarCollectionStyled } from "./ListItemCarCollectionStyled";
import { updateQuantity } from "../../services/collectionService";

import { useState } from "react";

function ListItemCarCollection({
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
  purchase_price,
  collection_quantity,
  collectionId,
}) {
  const [serverError, setServerError] = useState("");
  const [quantity, setQuantity] = useState(collection_quantity || 1);

  const COTACAO_DOLAR = 5.14;

  const valorPagoBRL = (Number(purchase_price) * COTACAO_DOLAR)
    .toFixed(2)
    .replace(".", ",");

  const valorMercadoBRL = (Number(averagePrice) * COTACAO_DOLAR)
    .toFixed(2)
    .replace(".", ",");

  async function handleMinus() {
    if (quantity > 1) {
      const novaQuantidade = quantity - 1;
      setQuantity(novaQuantidade);

      try {
        await updateQuantity({ collectionId, quantity: novaQuantidade });
      } catch (error) {
        console.error(error);
        setQuantity(quantity);
      }
    }
  }

  async function handlePlus() {
    const novaQuantidade = quantity + 1;
    setQuantity(novaQuantidade);

    try {
      await updateQuantity({ collectionId, quantity: novaQuantidade });
    } catch (error) {
      console.error(error);
      setQuantity(quantity);
    }
  }

  return (
    <ListItemCarCollectionStyled>
      <div className="imgCarCollection">
        <img src={imageUrl} alt={name} />
      </div>

      <div className="layout_card">
        <div className="name_quantity">
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

        <div className="prices">
          <p
            className="purchase"
            title={`Valor pago: R$ ${valorPagoBRL}`}
            style={{
              color:
                Number(purchase_price) <= Number(averagePrice)
                  ? "#28a745"
                  : "#dc3545",
            }}
          >
            R$ {valorPagoBRL}
          </p>

          <p
            className="average"
            title={`Valor de mercado: R$ ${valorMercadoBRL}`}
          >
            R$ {valorMercadoBRL}
          </p>
        </div>
      </div>
    </ListItemCarCollectionStyled>
  );
}

export default ListItemCarCollection;
