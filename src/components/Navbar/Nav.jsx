import logo from "../../assets/tai.png";
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
    <nav className="flex items-center p-4  w-full lg:fixed bg-white z-10  lg:px-[10rem] justify-between">
      <div>
        <img src={logo} alt="" className="h-[10vh]" />
      </div>
      <div className="lg:flex hidden  items-center space-x-4 justify-between   ">
        <ul className="flex font-roboto font-semibold space-x-4 ">
          <Link
            to={"/"}
            className="hover:border-2 border-b-blue-500 p-2 transition-all duration-100"
          >
            Home
          </Link>
          <Link
            to={"about"}
            className="hover:border-2 border-b-blue-500 p-2 transition-all duration-100"
          >
            About
          </Link>
          <Link
            to={"service"}
            className="hover:border-2 border-b-blue-500 p-2 transition-all duration-100"
          >
            Service
          </Link>
          <Link
            to={"gallery"}
            className="hover:border-2 border-b-blue-500 p-2 transition-all duration-100"
          >
            Gallery
          </Link>
          <Link
            to={"contact"}
            className="hover:border-2 border-b-blue-500 p-2 transition-all duration-100"
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

      {openModal && <Modal />}
    </nav>
  );
};
export default Nav;
