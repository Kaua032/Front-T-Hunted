import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { ListItemCarStyled } from "./ListItemCarStyled";
import Button from "../../Components/Button/Button";

import { createCarSchema, type CreateCarData } from "../../schemas/carSchema";
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

  function handleMinus() {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  }

  function handlePlus() {
    setQuantity(quantity + 1);
  }

  const {
    register: registerCar,
    handleSubmit: handleSubmitCar,
    formState: { errors: errorsCar },
  } = useForm<CreateCarData>({
    resolver: zodResolver(createCarSchema),
  });

  async function inHandleSubmit(data: CreateCarData) {
    setServerError("");

    try {
      const response = await createCar(data);
      console.log(response);
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.message ||
        "Erro ao criar o carro ou criar collection";
      setServerError(errorMessage);
      console.error(error);
    }
  }

  return (
    <ListItemCarStyled>
      <form onSubmit={handleSubmitCar(inHandleSubmit)}>
        <div id="imgCar">
          <img src={imageUrl} />
        </div>

        <div id="name_quantity">
          <h3>{name}</h3>
          <p>{toyNumber}</p>

          <div>
            <button
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
              placeholder={(averagePrice * 5.14).toFixed(2)}
              value={(averagePrice * 5.14).toFixed(2)}
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
