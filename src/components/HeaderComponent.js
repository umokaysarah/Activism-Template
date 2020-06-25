import React from 'react';
import { Navbar, Nav, NavbarToggler, Collapse, NavItem, Button, Label } from 'reactstrap';
import { NavLink } from 'react-router-dom';

function Header(props) {
    return(
        <React.Fragment>
            <Navbar dark expand>
                
                    <Nav navbar>
                        <NavItem>
                            <NavLink className="nav-link   px-md-5" to="/home">
                                <span className="fa fa-lg "> Home</span>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                    
                            <NavLink className="nav-link px-md-5 " to="/educate">
                                <span className="fa fa-lg "> Educate</span>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link px-md-5 " to="/support">
                                <span className="fa fa-lg"> Support</span>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link  px-md-5 " to="/advocate">
                            <span className="fa fa-lg"> Advocate</span>
                            </NavLink>
                        </NavItem>
                    </Nav>
                
            </Navbar>
        </React.Fragment>
    );
    
} 
export default Header;