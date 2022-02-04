import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import RestaurantIcon from '@mui/icons-material/Restaurant';

export function Topbar() {
  return (
    <div className="topbar">
      <Navbar bg="primary" variant="dark">
        <Container>
          <Link to="/" className="home1"><RestaurantIcon/> RECIPE-APPLICATION</Link>
          <Nav className="me-auto">
            <Link to="/" className="home1">
              HOME
            </Link>
            <Link to="/recipes" className="home1">
            RECIPES
            </Link>
            <Link to="/Add-recipe" className="home1">
              ADD RECIPES
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
