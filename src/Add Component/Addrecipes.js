import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { API_URL } from "../global_constants";

export function Addrecipes() {
    const [name, setName] = useState("");
    const [pic, setPic] = useState("");
    const [procedure1, setProcedure1] = useState("");
    const [procedure2, setProcedure2] = useState("");
    const [procedure3, setProcedure3] = useState("");
    const [preparedby, setPreparedby] = useState("");
    const [rating, setRating] = useState("");

    const history = useHistory();

    const addRecipe = () => {
        const newRecipes = {
            name,
            pic,
            procedure1,
            procedure2,
            procedure3,
            preparedby,
            rating,
        };

        fetch(`${API_URL}/recipe`, {
            method: "POST",
            body: JSON.stringify(newRecipes),
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
                    label="Recipe Name"
                    variant="filled"
                    focused
                />
                <TextField
                    className="text-field"
                    value={pic}
                    onChange={(event) => setPic(event.target.value)}
                    id="filled-basic"
                    label="Recipe url"
                    variant="filled"
                    type="url"
                    focused
                />
                <TextField
                    className="text-field"
                    value={procedure1}
                    onChange={(event) => setProcedure1(event.target.value)}
                    id="filled-basic"
                    label="Procedure-1"
                    variant="filled"
                    focused
                />
                <TextField
                    className="text-field"
                    value={procedure2}
                    onChange={(event) => setProcedure2(event.target.value)}
                    id="filled-basic"
                    label="Procedure-2"
                    variant="filled"
                    focused
                />
                <TextField
                    className="text-field"
                    value={procedure3}
                    onChange={(event) => setProcedure3(event.target.value)}
                    id="filled-basic"
                    label="Procedure-3"
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
                <Button onClick={addRecipe} variant="contained" endIcon={<SendIcon />}>
                    Add Recipe
                </Button>
            </div>
        </div>
    );
}
