import { Navbar as BsNavbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navbar = () => (
	<BsNavbar bg="light" expand="lg">
		<Container>
			<BsNavbar.Brand as={Link} to="/">
				StudentPortal
			</BsNavbar.Brand>
			<BsNavbar.Toggle aria-controls="basic-navbar-nav" />
			<BsNavbar.Collapse id="basic-navbar-nav">
				<Nav className="me-auto">
					<Nav.Link as={Link} to="/courses">
						Kurser
					</Nav.Link>
					<Nav.Link as={Link} to="/news">
						Nyheter
					</Nav.Link>
				</Nav>
			</BsNavbar.Collapse>
		</Container>
	</BsNavbar>
);

export default Navbar;
