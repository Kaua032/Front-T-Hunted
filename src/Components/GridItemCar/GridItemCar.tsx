import { useState } from "react";

import Button from "../../Components/Button/Button";

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
      purchase_price: Number((price / 5.14).toFixed(2)),
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
        alert("Carro adicionado a coleção com sucesso!");
      }
    } catch (error: any) {
      console.log(error.message);
    }
  }

  return <h4>Test Card</h4>
}


export default GridItemCar;