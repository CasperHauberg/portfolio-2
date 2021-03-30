import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import { linkItems, brand } from "../models/linkItem";

const Navigation: React.FC = () => {
  const textColor = "text-white";
  return (
    <Navbar expand="lg" bg="dark" sticky="top">
      <Container>
        <Navbar.Brand className={`${textColor}`}>
          {brand.icon} {brand.text}
        </Navbar.Brand>
        <Navbar.Toggle className={`${textColor}`}></Navbar.Toggle>
        <Navbar.Collapse>
          <Nav className="ml-auto">
            {linkItems.map((linkItem) => (
              <Nav.Link className={`${textColor} ml-2`}>
                {linkItem.icon}
                {linkItem.text}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
