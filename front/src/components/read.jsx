import React, { useState, useEffect } from "react";
import "./styles.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Read() {
  const history = useNavigate();
  // const [count, setCount] = count(0);
  const [readData, setReadData] = useState([]);

  useEffect(() => {
    // setCount(count + 1);
    axios
      .get("https://form-crud-db.vercel.app/get")
      .then((res) => {
        setReadData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
   
  }, []);

  const handleDelete = (id) => {
    // console.log(id);
    axios
      .delete("https://form-crud-db.vercel.app/delete/" + id)
      .then((res) => window.location.reload())
      .catch((err) => {
        console.log(err);
      });
  };

  const handleUpdate = (id) => {
    history(`/update/${id}`);
  };

  // console.log(readData);

  return (
    <div className="readDiv">
      <Link to="/create">
        <button>create</button>
      </Link>
      <table className="tableData">
        <thead>
          <tr>
            <th>Id</th>
            <th>Username</th>
            <th>Email</th>
            <th>password</th>
            <th>Delete</th>
            <th>Edit</th>
          </tr>
        </thead>

        <tbody>
          {readData.map((item) => {
            // console.log(item);

            return (
              <>
                <tr key={item._id}>
                  <td>{item._id}</td>
                  <td>{item.username}</td>
                  <td>{item.email}</td>
                  <td>{item.password}</td>
                  <td>
                    <button
                      className="deletebtn"
                      onClick={() => handleDelete(item._id)}
                    >
                      {" "}
                      X
                    </button>
                  </td>
                  <td>
                    {/* <Link to="/update/:id"> */}
                    <button
                      className="edit"
                      onClick={() => handleUpdate(item._id)}
                    >
                      Update
                    </button>
                    {/* </Link> */}
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Read;
