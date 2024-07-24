import React from 'react'
import { Link } from 'react-router-dom'

 

export function Button1({ text }) {
  return (
     <Link to={"about"}>
        <button className="px-4 py-2 bg-blue-500 text-white  hover:bg-gray-300 hover:text-black transition-all duration-200 delay-150 text-lg font-semibold     rounded-md font-roboto  ">
        <p>{text}</p>
        </button>

    </Link>
  );
}
