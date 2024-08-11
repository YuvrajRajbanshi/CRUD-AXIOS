import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, Link, useNavigate, useParams } from "react-router-dom";

const Update = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState();
  const [desc, setDesc] = useState();
  const [age, setAge] = useState();

  const getData = async () => {
    await axios
      .get(`http://localhost:8000/oneuser/${id}`)
      .then((users) => {
        console.log(users);
        setName(users.data.name);
        setDesc(users.data.desc);
        setAge(users.data.age);
        console.log(users.data.name);
        console.log(users.data.desc);
        console.log(users.data.age);
      })
      .catch((err) => {
        console.log("The is occuring ", err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const updateDetails = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8000/update/` + id, { name, desc, age })
      .then((result) => {
        console.log(result);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="flex items-center justify-center h-[100vh] flex-col">
        <h2 className="bg-pink-600 px-2 py-2 rounded-md cursor-pointer ">
          <Link to="/create">Create User</Link>
        </h2>
        <form onSubmit={updateDetails} className=" flex flex-col gap-2">
          <label htmlFor="">Name:</label>
          <input
            type="text"
            name="name"
            placeholder="your name"
            value={name}
            className="outline-none text-black px-3 py-2 font-semibold rounded-md"
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="">About:</label>
          <input
            type="text"
            name="desc"
            placeholder="Write about your self"
            value={desc}
            className="outline-none text-black px-3 py-2 font-semibold rounded-md"
            onChange={(e) => setDesc(e.target.value)}
          />
          <label htmlFor="">Age:</label>
          <input
            type="text"
            name="name"
            placeholder="please your age"
            value={age}
            className="outline-none text-black px-3 py-2 font-semibold rounded-md"
            onChange={(e) => setAge(e.target.value)}
          />
          <input
            type="submit"
            value="Update"
            className="bg-blue-500 py-1 font-semibold rounded-md cursor-pointer
            "
          />
        </form>
      </div>
    </>
  );
};

export default Update;
