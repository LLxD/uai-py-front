import { Navbar, Container } from "react-bootstrap";

export function CustomNavbar({ logo }) {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home" className="mx-auto">
            <div className="grid grid-flow-col items-center justify-center gap-2">
              <img
                alt=""
                src={logo}
                width="50"
                height="50"
                className="d-inline-block align-top"
              />{" "}
              <p className="text-center">Trem do Mundo</p>
            </div>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}
