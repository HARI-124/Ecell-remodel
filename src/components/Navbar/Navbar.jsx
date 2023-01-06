import React, { useState } from "react";
import "./navbar.css";
import { RiMenu3Line, RiCloseLine,RiArrowDropDownLine } from "react-icons/ri";
import {IoMdArrowDropdown} from "react-icons/io"
import logo from "../../assets/Ecell-logo.webp";


const Navbar = () => {
  const [togglemenu, setToggle] = useState(false);

  return (
    <div className="ecell__navbar">
      <div className="ecell__navbar-img">
        <img src={logo} alt="logo"></img>
      </div>
      
      <div className="ecell__navbar__links">
        
        <div className="ecell__navbar__containers">
            
            
        <div className="ecell__Discover items">
            <p >Discover <IoMdArrowDropdown></IoMdArrowDropdown>
            
            <div className="dropdown-content Discover slide-bottom">
            <a>Ecell-discover</a>
            <a>Ecell-discover</a>
            <a>Ecell-discover</a>
            <a>Ecell-discover</a>
            <a>Ecell-discover</a>

            </div>
          </p>
            </div>

            <div className="ecell__Initiatives items">
            <p ><a>Initiatives <IoMdArrowDropdown></IoMdArrowDropdown></a>
            
            <div className="dropdown-content Initiatives slide-bottom">
            <a>Ecell-Initiatives</a>
            <a>Ecell-Initiatives</a>
            <a>Ecell-Initiatives</a>
            <a>Ecell-Initiatives</a>
            <a>Ecell-Initiatives</a>

            </div>
          </p>
            </div>

            <div className="ecell__Learn">
            <p ><a>Learn <IoMdArrowDropdown></IoMdArrowDropdown></a>
            
            <div className="dropdown-content Learn slide-bottom">
            <a>Ecell-Learn</a>
            <a>Ecell-Learn</a>
            <a>Ecell-Learn</a>
            <a>Ecell-Learn</a>
            <a>Ecell-Learn</a>

            </div>
          </p>
            </div>

            <div className="ecell__Incubation">
            <p ><a>Incubation <IoMdArrowDropdown></IoMdArrowDropdown></a>
            
            <div className="dropdown-content Incubation slide-bottom">
            <a>Ecell-Incubation</a>
            <a>Ecell-Incubation</a>
            <a>Ecell-Incubation</a>
            <a>Ecell-Incubation</a>
            <a>Ecell-Incubation</a>

            </div>
          </p>
            </div>
            
            <div className="ecell__Team">
            <p ><a>Team</a>
            </p>
            </div>
            <div className="ecell__Startups">
            <p ><a>Startups</a>
            </p>
            </div>
            <div className="ecell__Contactus">
            <p ><a>Contactus</a>
            </p>
            </div>

            
        </div>

        <div className="ecell__navbar__mainmenu">
          {togglemenu ? (
            <RiCloseLine
              color="black"
              size={27}
              onClick={() => setToggle(false)}
            />
          ) : (
            <RiMenu3Line
              color="black"
              size={27}
              onClick={() => setToggle(true)}
            />
          )}
          {togglemenu && (
            <div className="ecell__navbar__menu scale-up-center">
              <div className="ecell__navbar__menu__links">
                <p>
                  <a href="#home">Dicover</a>
                </p>
                <p>
                  <a href="#wgpt3">Initiatives</a>
                </p>
                <p>
                  <a href="#possibility">Learn</a>
                </p>
                <p>
                  <a href="#features">Incubators</a>
                </p>
                <p>
                  <a href="#blog">Team</a>
                </p>
                <p>
                  <a href="#features">Startups</a>
                </p>
                <p>
                  <a href="#blog">Contact</a>
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
