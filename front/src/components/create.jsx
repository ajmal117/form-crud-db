import React, { useState } from "react";
import "./styles.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function Create() {
  const history = useNavigate();

  const [count, setCount] = useState(0);
  const initialValue = {
    username: "",
    email: "",
    password: "",
  };

  const [data, setData] = useState(initialValue);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCount(count + 1);
    axios
      // .post("http://localhost:8000/add", {
      .post("https://form-crud-db.vercel.app/add", {
        data: data,
      })
      .then((result) => history(`/read`))
      .catch((err) => {
        console.log(err);
      });
    // alert("Data added in the Database");
    Swal.fire({
      title: "Data saved",
      icon: "success",
    });
  };
  console.log(count);
  return (
    <div>
      <form action="" className="formSubmit" onSubmit={handleSubmit}>
        <h1>user data form</h1>
        <input
          type="text"
          name="username"
          placeholder="username"
          onChange={handleChange}
        />
        <input
          type="text"
          name="email"
          placeholder="email"
          onChange={handleChange}
        />
        <input
          type="text"
          name="password"
          placeholder="password"
          onChange={handleChange}
        />

        <button type="submit" className="buttonSubmit">
          Submit Data
        </button>
        <Link to="/read">
          <button type="submit" className="buttonRead">
            Read Data
          </button>
        </Link>
      </form>
    </div>
  );
}

export default Create;
