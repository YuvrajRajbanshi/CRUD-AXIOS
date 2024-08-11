import React, { useEffect, useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [val, getValue] = useState([]);
  const navigate = useNavigate();

  const handleDelete = async (id) => {
    console.log("Hello I am handleButton");
    await axios
      .delete(`http://localhost:8000/delete/${id}`)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log("The error causes becuase of deletion functionality", err);
      });
  };

  useEffect(() => {
    axios
      .get("http://localhost:8000/getUsers")
      .then((datas) => {
        // console.log(datas);
        getValue(datas.data);
      })
      .catch((err) => {
        console.log("Sorry for reterving data err", err);
      });
  }, [handleDelete]);

  return (
    <>
      <div className="flex items-center justify-center  flex-col ">
        <div className="  bg-zinc-700  w-[500px] rounded-md p-3">
          <h2 className="bg-pink-600 px-2 py-2 rounded-md cursor-pointer ">
            <Link to="/update/:id" n className=" text-center ">
              Update User
            </Link>
          </h2>

          {val.map((v) => {
            return (
              <div className="flex items-center ">
                <div className="gap-20 p-3 " key={v._id}>
                  <h1 className=" font-bold">
                    Name:
                    <span className="font-semibold text-blue-400">
                      {" "}
                      {v.name}{" "}
                    </span>
                  </h1>
                  <h1 className=" font-bold">
                    Description:
                    <span className="font-semibold text-blue-400">
                      {""}
                      {v.desc}{" "}
                    </span>
                  </h1>
                  <h1 className=" font-bold">
                    Age:
                    <span className="font-semibold text-blue-400">
                      {" "}
                      {v.age}{" "}
                    </span>
                  </h1>
                </div>
                <div className="">
                  <Link
                    to={`/update/${v._id}`}
                    className="bg-blue-500 p-2 rounded-md font-bold text-right"
                  >
                    Update
                  </Link>
                  <button
                    className="bg-red-700 p-1 m-2 font-bold rounded-sm "
                    onClick={(e) => handleDelete(v._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
