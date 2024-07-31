import React, { useState } from "react";
import axios from "axios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [text, setText] = useState("");
  const [isLoading, setIsLoading] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);

    if (name && email && text && subject) {
      axios
        .post("https://blu-channel-backend.onrender.com/send-email", {
          email,
          name,
          subject,
          text,
        })
        .then(() => {
          toast.success("Email sent succesfully");
          console.log("Email sent succesfully");
          setEmail("");
          setName("");
          setSubject("");
          setText("");
        })
        .catch((error) => {
          console.error("Error sending email", error);
          toast.error("Error sending email");
        });
    } else return toast.error("Fill in the fields correctly");
  };

  return (
    <>
      <ToastContainer />
      <div className="pb-8 relative">
        <div className="bg-image-2 " />
        <div className=" bg-slate-100  flex flex-col md:flex-row absolute lg:w-[50%] md:w-[75%] mt-[-52rem]   lg:top-[54rem] md:left-[8rem] md:top-[55rem] py-[2rem] md:pb-[6rem] pb-[5rem] w-full">
          <form className="flex flex-col px-8 py-0 md:w-2/3 space-y-10  ">
            <h2 className="text-[rgb(3,57,108)] text-2xl font-semibold text-center md:text-left  font-roboto">
              Contactez-nous{" "}
            </h2>

            <input
              type="text"
              placeholder="Name"
              value={name}
              name=""
              id=""
              className=" outline-none hover:border-blue-500 border-2  border-gray-400 rounded-sm px-3 py-1"
              required
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              className=" outline-none hover:border-blue-500 border-2  border-gray-400 rounded-sm px-3 py-1 "
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              placeholder="Sujet"
              value={subject}
              className=" outline-none hover:border-blue-500 border-2  border-gray-400 rounded-sm px-3 py-1"
              required
              onChange={(e) => setSubject(e.target.value)}
            />
            <input
              type="text"
              placeholder="Message"
              value={text}
              className="border-gray-400  outline-none hover:border-blue-500 border-2 rounded-sm px-3 py-8"
              required
              onChange={(e) => setText(e.target.value)}
            />
            <div className="flex justify-center md:justify-start">
              <button
                onClick={(e) => handleSubmit(e)}
                className="px-4 py-2 bg-[#055589] focus:bg-black rounded-md text-white font-semibold"
              >
                {isLoading ? "Envoi d'email..." : "Envoyer un mail"}
              </button>
            </div>
          </form>

          <div className="md:w-1/3 flex flex-col items-center   space-y-2 pt-[4rem] pb-[4rem]  ">
            <div>
              <h2 className="font-bold text-xl text-[#3A3A3A] text-center">
                Address
              </h2>
              <p className="text-[#3A3A3A]">KK 64 Av, Goma</p>
            </div>

            <div>
              <h2 className="font-bold text-xl text-[#3A3A3A] text-center">
                Email
              </h2>
              <p className="text-[#3A3A3A] text-md max-w-screen-sm  ">
                salesinfo@gracegloballogistic.com
              </p>
            </div>

            <div>
              <h2 className="font-bold text-xl text-[#3A3A3A] text-center">
                Phone
              </h2>
              <p className="text-[#3A3A3A]">(+243)818 740 0026</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
