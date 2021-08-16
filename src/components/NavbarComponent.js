import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
} from "reactstrap";
import {Form, FormControl} from "react-bootstrap";
import Logo from "../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faUserCircle} from "@fortawesome/free-solid-svg-icons";
import {faBell} from "@fortawesome/free-solid-svg-icons";
import Style from "./styles/navbar.module.css";

const NavbarComponent = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const styleIcon={color: "grey"}
  return (
    <div className={Style.header}>
      <Navbar color="white" light expand="md">
      <div className="px-1">
        <div className="flex justify-between">
          <NavbarBrand href="/"><img  src={Logo}/></NavbarBrand>
        </div>
      </div>
          <div className="flex mr-0 mr-2 py-3 space-x-3 md:justify-end md:flex-row object-right font-poppins">
                <Form inline >
                      <FormControl type="text" placeholder="Cari sendiri.." size="sm" className="mr-sm-2" />
                  </Form>
                  <div className="pt-2">
                  <FontAwesomeIcon icon={faBell} style={styleIcon}  />
                  </div>
                  <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                  <Nav className="mr-auto" navbar>
                    <UncontrolledDropdown nav >
                    <DropdownToggle nav caret>
                      <FontAwesomeIcon icon={faUserCircle} style={styleIcon} />
                    </DropdownToggle>
                    <DropdownMenu left>
                      <DropdownItem divider />
                      <DropdownItem>
                        <Button color="primary" size="sm" href="/beranda">Beranda - BURSA</Button>
                      </DropdownItem>
                      <DropdownItem>
                        <Button color="primary" size="sm" href="/daftarkuis">Daftar Kuis</Button>
                      </DropdownItem>
                      <DropdownItem>
                        <Button color="primary" size="sm" href="/partisipasi">Partisipasi</Button>            
                      </DropdownItem>
                      <DropdownItem>                 
                        <Button color="primary" size="sm" href="/responden">Responden</Button>                 
                      </DropdownItem>
                      <DropdownItem> 
                        <Button color="primary" size="sm" href="/hasilkuis">Hasil Kuis</Button>
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                  </Nav>
                </Collapse>
              <div className={Style.drop}>
              <Button color="primary" href="/buat-kuesioner"size="sm" className="py-2 px-3 text-white font-semibold rounded-lg hover:bg-blue-500">+ Buat Kuis</Button>
              </div>
              </div>
        </Navbar>
    </div>
  );
};

export default NavbarComponent;
