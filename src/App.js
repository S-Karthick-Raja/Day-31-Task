import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import { Topbar } from "./Components/Topbar";
import Fetchproducts from "./Fetch & Delete Components/Products";
import { Editproducts } from "./Edit Component/Editrecipes";
import { Addrecipes } from "./Add Component/Addrecipes";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Topbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/recipes" component={Fetchproducts} />
          <Route path="/recipe-edit/:id"> <Editproducts /> </Route>
          <Route path="/Add-recipe"> <Addrecipes /> </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
