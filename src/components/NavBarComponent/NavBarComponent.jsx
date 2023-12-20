import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


import "./NavBarComponent.scss"
import logoStore from "../../assets/images/logonavBar.png"
import { CartWidgetComponent } from '../CartWidgetComponent/CartWidgetComponent';

import { Link } from "react-router-dom";
import { useGetCategories } from '../../hooks/useProducts';



export const NavBarComponent = () => {
    const { categories } = useGetCategories();

    console.log("------", categories)

    return (
        <Navbar expand="lg" className="navBarContainer" sticky="top">
            <Container fluid>
                <Navbar.Brand as={Link} to="/">
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
                        // style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link as={Link} to="/" className='itemNav'>Home</Nav.Link>
                        <Nav.Link as={Link} to="/news" className='itemNav'>News</Nav.Link>
                        <NavDropdown title="Categories" id="navbarScrollingDropdown">
                            {categories?.results?.map((category) => {
                                return (
                                    <NavDropdown.Item key={category.id} as={Link} to={`/category/${category.id}`} >
                                        {category.name}
                                    </NavDropdown.Item>
                                );
                            })}
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