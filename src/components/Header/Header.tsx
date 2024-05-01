import React from 'react';
import {Navbar, NavbarBrand, NavbarContent, NavbarItem} from "@nextui-org/navbar";



const Header=()=>{
    return (
        <Navbar>
        <NavbarBrand>
          {/* <AcmeLogo /> */}
          <p className="font-bold text-inherit">ACME</p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            {/* <Link color="foreground" href="#">
              Features
            </Link> */}
          </NavbarItem>
          <NavbarItem isActive>
            {/* <Link href="#" aria-current="page">
              Customers
            </Link> */}
          </NavbarItem>
          <NavbarItem>
            {/* <Link color="foreground" href="#">
              Integrations
            </Link> */}
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            {/* <Link href="#">Login</Link> */}
          </NavbarItem>
          <NavbarItem>
            {/* <Button as={Link} color="primary" href="#" variant="flat">
              Sign Up
            </Button> */}
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    )
}

export default Header;

// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

// function CollapsibleExample() {
//   return (
//     <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
//       <Container>
//         <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
//         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//         <Navbar.Collapse id="responsive-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link href="#features">Features</Nav.Link>
//             <Nav.Link href="#pricing">Pricing</Nav.Link>
//             <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
//               <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.2">
//                 Another action
//               </NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item href="#action/3.4">
//                 Separated link
//               </NavDropdown.Item>
//             </NavDropdown>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default CollapsibleExample;