import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


import "./NavBarComponent.scss"
import logoStore from "../../assets/images/logonavBar.png"
import { CartWidgetComponent } from '../CartWidgetComponent/CartWidgetComponent';

export const NavBarComponent = () => {
    return (
        <Navbar expand="lg" className="navBarContainer" sticky="top">
            <Container fluid>
                <Navbar.Brand href="#">
                    <Container className='navBarLeft'>
                        <div className="logoStore">
                            <img src={logoStore} alt="" />
                        </div>
                        <div className="titleStore">
                            <p>S&S Gaming Nexus</p>
                        </div>
                    </Container>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" style={{ backgroundColor: "white" }} />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="mx-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link className='itemNav' href="#action1">Home</Nav.Link>
                        <Nav.Link className='itemNav' href="#action2">News</Nav.Link>
                        <NavDropdown title="Categories" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">Adventure</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                Something else here
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#" className='itemNav'>
                            Offers
                        </Nav.Link>
                    </Nav>
                    <Form className="d-flex justify-content-center ">
                        <CartWidgetComponent />
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
