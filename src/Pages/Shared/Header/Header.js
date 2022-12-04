import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';
import LeftsideNav from '../LeftsideNav/LeftsideNav';
import Image from 'react-bootstrap/Image'
import { FaUser } from 'react-icons/fa';


const Header = () => {
    const { user, logout } = useContext(AuthContext)
    const handleLogout = () => {
        logout()
            .then(() => { })
            .catch(error => console.error(error))
    }
    return (
        <Navbar collapseOnSelect className='mb-4' expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand ><Link to='/'>Dragon News</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">Categories</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    < >
                        <>
                            {
                                user?.uid ? <>{user?.displayName} <button onClick={handleLogout}>Logout</button></> :
                                    <>
                                        <Link className='me-3' to='/login' >Login</Link>
                                        <Link to='/register'> Register</Link></>
                            }
                        </>
                        <Link to='/profile'>
                            {
                                user?.photoURL ? <Image
                                    roundedCircle
                                    className='me-3'
                                    src={user.photoURL}
                                    style={{ height: '40px' }}>
                                </Image> :
                                    <FaUser></FaUser>
                            }
                        </Link>

                    </>
                    <div className='d-lg-none'>
                        <LeftsideNav></LeftsideNav>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;