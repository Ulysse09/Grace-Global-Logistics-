import logo from "../../assets/GGL.png";
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
    <nav className="flex    items-center h-[5rem] justify-between px-7   w-full lg:fixed bg-white  z-10  lg:px-[1rem] lg:justify-around  ">
      <Link to={"/"}>
        <img
          src={logo}
          alt=""
          className="lg:h-[15vh] lg:w-[20vw] h-[12vh]  pt-2  w-[45vw] pb-8 mt-10 mb-2      "
        />
      </Link>
      <div className="lg:flex hidden  items-center  ml-[-4rem]   space-x-4    ">
        <ul className="flex font-roboto font-semibold space-x-4 ">
          <Link
            to={"/"}
            className="hover:border-b-2 border-b-blue-500 p-2 transition-all duration-100"
          >
            Accueil
          </Link>
          <Link
            to={"about"}
            className="hover:border-b-2 border-b-blue-500 p-2 transition-all duration-100"
          >
            À propos
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
            Galerie
          </Link>
        </ul>
      </div>
      <Link to={"contact"} className="space-x-4 items-center lg:flex hidden">
        <p className="px-4 py-2 bg-blue-400 text-white hover:bg-black  transition-colors duration-300 font-roboto  ">
          Contactez-nous
        </p>
      </Link>

      <div className="lg:hidden text-4xl text-black " onClick={handletoggle}>
        {openModal ? <IoMdClose /> : <BiMenuAltRight />}
      </div>

      {/* navigation modal */}

      {openModal && <Modal handletoggle={handletoggle} />}
    </nav>
  );
};
export default Nav;
