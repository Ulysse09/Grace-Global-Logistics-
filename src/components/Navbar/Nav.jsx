import logo from "../../assets/tai.png"
import { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
import Modal from "../Modal/Modal";
import { Link } from "react-router-dom";


const  Nav = () => {
   const [openModal, setOpenModal] = useState(false);
   const handletoggle = () => {
      return setOpenModal(!openModal);
   };

    return (
      <nav className="flex items-center p-4  w-full lg:fixed bg-white z-10  lg:px-[10rem] justify-between">
        <div>
          <img src={logo} alt="" className="h-[10vh]" />
        </div>
        <div className="lg:flex hidden  items-center space-x-4 justify-between   ">
          <ul className="flex font-roboto font-semibold space-x-4 ">
            <Link to={"/"}>Home</Link>
            <Link to={"about"}>About</Link>
            <Link to={"service"}>Service</Link>
            <Link to={"gallery"}>Gallery</Link>
            <Link to={"contact"}>Contact</Link>

            
          </ul>
        </div>

        <div className="space-x-4 items-center lg:flex hidden">
          <p className="px-4 py-2 bg-blue-400 text-white font-roboto  ">
            Contact us
          </p>
        </div>

        <div className="lg:hidden text-4xl text-black " onClick={handletoggle}>
          {openModal ? <IoMdClose /> : <BiMenuAltRight />}
        </div>

        {/* navigation modal */}

        {openModal && <Modal />}
      </nav>
    );
  
};
 export default Nav
