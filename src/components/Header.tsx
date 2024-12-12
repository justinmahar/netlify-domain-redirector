import classNames from "classnames";
import { Container, Nav, Navbar, NavbarProps } from "react-bootstrap";
import redirectImage from "../redirect.webp";

export interface HeaderProps extends NavbarProps {}

export const Header = ({ ...props }: HeaderProps) => {
  return (
    <Navbar
      bg="light"
      variant="light"
      {...props}
      style={{ ...props.style }}
      className={classNames("shadow-sm fixed-top", props.className)}
    >
      <Container className="d-flex flex-wrap justify-content-between">
        <Navbar.Brand href="/">
          <div className="d-flex gap-2 align-items-center">
            <img
              src={redirectImage}
              alt="Arrow pointing to the right"
              style={{ height: 30 }}
            />
            <span className="d-sm-none">NDR</span>
            <span className="d-none d-sm-inline">
              Netlify Domain Redirector
            </span>
          </div>
        </Navbar.Brand>
        <Nav className="d-flex align-items-center">
          <Nav.Link
            href="https://github.com/justinmahar/netlify-domain-redirector"
            target="_blank"
            rel="noopener noreferrer"
            className="d-flex gap-2 align-items-center"
          >
            <span className="d-none d-md-inline">Love it? Star it! &rarr;</span>
            <img
              src="https://img.shields.io/github/stars/justinmahar/netlify-domain-redirector?style=social"
              alt="GitHub Repo stars"
            />
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
