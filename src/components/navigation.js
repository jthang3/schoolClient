import React from "react";
import {Navbar, NavbarBrand, Nav,NavItem,NavLink} from "reactstrap";

const Header = ()=>{
    return (
        <header>
            <Navbar className = "header">
                <NavbarBrand href = "/">
                    <Nav className = "ml-auto" navbar>
                        <NavItem>
                            Signup
                        </NavItem>
                    </Nav>
                </NavbarBrand>
            </Navbar>
        </header>
    );
};

export default Header;