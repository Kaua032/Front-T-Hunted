import { ListItemCarStyled } from "./ListItemCarStyled";
import Button from "../../Components/Button/Button";
import Input from "../../Components/Input/Input";

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
  return (
    <ListItemCarStyled>
      <div id="imgCar">
        <img src={imageUrl} />
      </div>
      <div id="name_quantity">
        <h3>{name}</h3>
        <p>{toyNumber}</p>
        <Input name="averagePrice" placeholder="0" register="" />
      </div>
      <div id="price_add">
        <p>R${(averagePrice * 5.14).toFixed(2)}</p>
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
    </ListItemCarStyled>
  );
}

export default ListItemCar;
