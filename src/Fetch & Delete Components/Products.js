import { Product } from "../Components/Products";
import { useEffect } from "react";
import { useState } from "react";
import { API_URL } from "../global_constants";
import { useHistory } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";


export default function Fetchproducts() {
  const [recipe, setRecipe] = useState([]);
  const history = useHistory();

  // GET - METHOD
  const getRecipe = () => {
    fetch(`${API_URL}/recipe`)
      .then((data) => data.json())
      .then((ur) => setRecipe(ur));
  };
  useEffect(getRecipe, []);

  // DELETE- METHOD
  const deleterecipe = (id) => {
    fetch(`${API_URL}/recipe/${id}`, {
      method: "DELETE",
    }).then(() => getRecipe())
  };


  return (
    <div className="product">
      {recipe.map(
        ({ name, pic, id, procedure1, procedure2, procedure3, preparedby, rating }) => (
          <Product
            key={id}
            name={name}
            pic={pic}
            procedure1={procedure1}
            procedure2={procedure2}
            procedure3={procedure3}
            preparedby={preparedby}
            rating={rating}
            editButton={
              <Button
                color="success"
                aria-label="edit-recipe"
                onClick={() => history.push("/recipe-edit/" + id)}
              >
                Edit <EditIcon />
              </Button>
            }
            deleteButton={
              <Button
                onClick={() => deleterecipe(id)}
                color="error"
                aria-label="delete-recipe"
              >
                Delete <DeleteIcon />
              </Button>
            }
          />
        )
      )}
    </div>
  )
};