import logo from "../../assets/Blue1.png";
import { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
import Modal from "../Modal/Modal";
import { Link } from "react-router-dom";

const Nav = () => {
  const [openModal, setOpenModal] = useState(false);
  const handletoggle = () => {
    return setOpenModal(!openModal);
  };

  return (
    <nav className="flex  slideinLeft  items-center h-[5rem]  w-full lg:fixed bg-white p-2 z-10  lg:px-[10rem] justify-between">
      <Link to={"/"} >
        <img src={logo} alt="" className="lg:h-[18vh] lg:w-[10vw] h-[15vh] w-[25vw] pb-8 mt-4   " />
      </Link>
      <div className="lg:flex hidden  items-center space-x-4 justify-between   ">
        <ul className="flex font-roboto font-semibold space-x-4 ">
          <Link
            to={"/"}
            className="hover:border-b-2 border-b-blue-500 p-2 transition-all duration-100"
          >
            Home
          </Link>
          <Link
            to={"about"}
            className="hover:border-b-2 border-b-blue-500 p-2 transition-all duration-100"
          >
            About
          </Link>
          <Link
            to={"service"}
            className="hover:border-b-2 border-b-blue-500 p-2 transition-all duration-100"
          >
            Service
          </Link>
          <Link
            to={"gallery"}
            className="hover:border-b-2 border-b-blue-500 p-2 transition-all duration-100"
          >
            Gallery
          </Link>
          <Link
            to={"contact"}
            className="hover:border-b-2 border-b-blue-500 p-2 transition-all duration-100"
          >
            Contact
          </Link>
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

      {openModal && <Modal handletoggle={handletoggle} />}
    </nav>
  );
};
export default Nav;
