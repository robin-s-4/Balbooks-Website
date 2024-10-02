import React from "react";
import list from "../../public/list.json";
import Cards from "./Cards";
import { Link } from "react-router-dom";
function Courses() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-blue-500">Here.! :)</span>{" "}
          </h1>
          <p className="mt-12">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad
            accusantium assumenda aut dolore veritatis repellat ipsa laudantium
            facilis nisi? Nemo, inventore neque. Voluptates quia, animi facilis
            quos ipsum nemo dolore.
          </p>
          <Link to="/">
            <button className="bg-blue-500 mt-6 text-white px-4 py-2 rounded-md hover:bg-blue-700 duration-300">
              Home
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {list.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Courses;
