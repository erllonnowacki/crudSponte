import { Container, NavBar } from "./style";
import SponteLogo from "../../assets/sponteLogo.png";
import ButtonWithLabel from "../Button";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Container>
      <NavBar>
        <img className="logo" src={SponteLogo} alt="logo" />

        <Link to="/">Retornar a página inicial</Link>
        <a href="/product/new">
          <ButtonWithLabel label="Criar produto" color="blue"></ButtonWithLabel>
        </a>
      </NavBar>
    </Container>
  );
}
export default Header;
