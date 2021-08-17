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
import Logo from "../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBell} from "@fortawesome/free-solid-svg-icons";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import Style from "./styles/navbarbuatkuesioner.module.css";
import IconS from "../assets/icon-s.svg"
import IconZ from "../assets/icon-z.svg"
import IconHome from "../assets/icon-home.svg"
import {faQuestion} from "@fortawesome/free-solid-svg-icons";

const NavbarBuatKuesioner = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const styleIcon={color: "white", width: "21px", height: "21px", cursor: "pointer" }
  return (
    <div className={Style.header}>
      <Navbar light expand="md">
          <div className={Style.brand}>
          <NavbarBrand href="/buat-kuesioner"><img  src={Logo}/></NavbarBrand>
          </div>
          <div className={Style.kuesioner}>
          <h4 >Kuesioner</h4>
          </div>
          <div className="flex absolute right-0 px-4">
            <input
                class="border-2 border-gray-300 bg-white h-7 pl-1 pr-0 rounded-lg text-sm focus:outline-none"
                type="search" name="search" placeholder="Search" />
                <button type="submit" class="absolute right-0 top-0 mt-3 mr-2">
                </button>
            <div className="pt-1 mx-2">
            <FontAwesomeIcon color="white" icon={faBell} style={styleIcon}  />
            </div>
            <div className="pt-1 mx-2">
              <span className="relative inline-block">
                <FontAwesomeIcon color="white" icon={faEnvelope} style={styleIcon}/>
                <span class="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-yellow-400 rounded-full">2</span>
              </span>
            </div>
            <div className="pt-1 mx-2">
              <img className="w-5 h-5" src={IconS} style={{cursor: "pointer"}}>
              </img>
            </div>
            <div className="pt-1 mx-2">
              <img className="w-5 h-5" src={IconZ} style={{cursor: "pointer"}}>
              </img>
            </div>
            <div className="pt-1 mx-2 mr-4">
              <img className="w-5 h-5" src={IconHome} style={{cursor: "pointer"}}></img>
            </div>
            <div>
              <img className="inline object-cover w-7 h-7 mx-2 rounded-full" style={{cursor: "pointer"}} src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Profile image"/>
            </div>
            <div className="text-white pt-1 font-semibold font-poppins" style={{cursor: "pointer"}}>
                Peter
            </div>
            <div className="pt-1 mx-2">
            <FontAwesomeIcon color="white" icon={faQuestion} style={styleIcon}  />
            </div>
          <div >
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <UncontrolledDropdown nav >
              <DropdownToggle nav caret className="text-white">
              </DropdownToggle>
              <DropdownMenu right>
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
          </div>
          </div>          
      </Navbar>
    </div>
  );
};

export default NavbarBuatKuesioner;
