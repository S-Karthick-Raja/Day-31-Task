import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { API_URL } from "../global_constants";

export function Editproducts() {
    const { id } = useParams();

    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        fetch(`${API_URL}/recipe/${id}`, { method: "GET" })
            .then((data) => data.json())
            .then((mv) => setRecipe(mv));
    }, [id]);

    // only show the update user when the data is available
    return recipe ? <UpdateProducts recipe={recipe} /> : "";
}

function UpdateProducts({ recipe, id }) {
    const [name, setName] = useState(recipe.name);
    const [pic, setPic] = useState(recipe.pic);
    const [procedure1, setProcedure1] = useState(recipe.procedure1);
    const [procedure2, setProcedure2] = useState(recipe.procedure2);
    const [procedure3, setProcedure3] = useState(recipe.procedure3);
    const [preparedby, setPreparedby] = useState(recipe.preparedby);
    const [rating, setRating] = useState(recipe.rating);

    const history = useHistory();

    const editproduct = (id) => {
        const UpdatedProduct = {
            name,
            pic,
            procedure1,
            procedure2,
            procedure3,
            preparedby,
            rating,
        };

        fetch(`${API_URL}/recipe/${recipe.id}`, {
            method: "PUT",
            body: JSON.stringify(UpdatedProduct),
            headers: {
                "Content-Type": "application/json",
            },
        }).then(() => history.push("/recipes"));
    };
    return (
        <div className="wrap-user-list">
            <div className="Add-user-list">
                <TextField
                    className="text-field"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    id="filled-basic"
                    label="User Name"
                    variant="filled"
                    focused
                />
                <TextField
                    className="text-field"
                    value={pic}
                    onChange={(event) => setPic(event.target.value)}
                    id="filled-basic"
                    label="User url"
                    variant="filled"
                    type="url"
                    focused
                />
                <TextField
                    className="text-field"
                    value={procedure1}
                    onChange={(event) => setProcedure1(event.target.value)}
                    id="filled-basic"
                    label="procedure-1"
                    variant="filled"
                    focused
                />
                <TextField
                    className="text-field"
                    value={procedure2}
                    onChange={(event) => setProcedure2(event.target.value)}
                    id="filled-basic"
                    label="procedure-2"
                    variant="filled"
                    focused
                />
                <TextField
                    className="text-field"
                    value={procedure3}
                    onChange={(event) => setProcedure3(event.target.value)}
                    id="filled-basic"
                    label="procedure-3"
                    variant="filled"
                    focused
                />
                <TextField
                    className="text-field"
                    value={preparedby}
                    onChange={(event) => setPreparedby(event.target.value)}
                    id="filled-basic"
                    label="Preparedby"
                    variant="filled"
                    focused
                />
                <TextField
                    className="text-field"
                    value={rating}
                    onChange={(event) => setRating(event.target.value)}
                    id="filled-basic"
                    label="Rating"
                    variant="filled"
                    type="number"
                    focused
                />
            </div>
            <div className="add-button">
                <Button
                    onClick={editproduct}
                    color="success"
                    variant="contained"
                    endIcon={<SendIcon />}
                >
                    Save
                </Button>
            </div>
        </div>
    );
}
