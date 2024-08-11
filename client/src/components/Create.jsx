import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Create = () => {
  const getValue = async (e) => {
    e.preventDefault();
    let name = e.target.name.value;
    let desc = e.target.desc.value;
    let age = e.target.age.value;

    console.log(name, desc, age);

    await axios
      .post("http://localhost:8000/create", { name, desc, age })
      .then((result) => {
        console.log(desc);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="flex items-center justify-center h-[100vh] flex-col">
        <h2 className="bg-pink-600 px-2 py-2 rounded-md cursor-pointer ">
          <Link to="/">Home Page</Link>
        </h2>

        <form action="" className=" flex flex-col gap-2" onSubmit={getValue}>
          <label htmlFor="">Name:</label>
          <input
            type="text"
            name="name"
            placeholder="your name"
            className="outline-none text-black px-3 py-2 font-semibold rounded-md"
          />
          <label htmlFor="">About:</label>
          <input
            type="text"
            name="desc"
            placeholder="Write about your self"
            className="outline-none text-black px-3 py-2 font-semibold rounded-md"
          />
          <label htmlFor="">Age:</label>
          <input
            type="number"
            name="age"
            placeholder="please your age"
            className="outline-none text-black px-3 py-2 font-semibold rounded-md"
          />
          <input
            type="submit"
            value="Create user😊"
            className="bg-blue-500 py-1 font-semibold rounded-md cursor-pointer
          "
          />
        </form>
      </div>
    </>
  );
};

export default Create;
