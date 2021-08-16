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
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import Style from "./styles/navbarbuatkuesioner.module.css";

const NavbarBuatKuesioner = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const styleIcon={color: "grey"}
  return (
    <div className={Style.header}>
      <Navbar light expand="md">
          <div className={Style.brand}>
          <NavbarBrand href="/buat-kuesioner"><img  src={Logo}/></NavbarBrand>
          </div>
          <div className={Style.kuesioner}>
          <h4 >Kuesioner</h4>
          </div>
            <div className={Style.bell}>
            <FontAwesomeIcon color="white" icon={faBell} style={styleIcon}  />
            </div>
            <FontAwesomeIcon color="white" icon={faEnvelope} style={styleIcon}  />
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
            <Button color="primary" href="/buatkuesioner"size="sm">Buat Kuis</Button>
            </div>
      </Navbar>
    </div>
  );
};

export default NavbarBuatKuesioner;
