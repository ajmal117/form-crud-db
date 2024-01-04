import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Update() {
  const { id } = useParams();
  // const history = useNavigate();

  // console.log(id);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    axios
      .get("https://form-crud-db.vercel.app/get")
      .then((res) => {
        setUsername(res.data.find((item) => (item._id = id)).username);
        setEmail(res.data.find((item) => (item._id = id)).email);
        setPassword(res.data.find((item) => (item._id = id)).password);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  console.log(username);
  console.log(email);
  console.log(password);

  const handleSubmit = () => {
    axios
      .put(`https://form-crud-db.vercel.app/put/${id}`, {
        data: {
          username: username,
          email: email,
          password: password,
        },
      })
      .then((result) => {
        // history("/read");
        window.location.assign("/read");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <form action="" className="formSubmit" onSubmit={handleSubmit}>
        <h1>user data form</h1>
        <input
          type="text"
          name="username"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          placeholder="username"
        />
        <input
          type="text"
          name="email"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          type="text"
          name="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />

        <button type="submit" className="buttonSubmit">
          Update Data
        </button>
      </form>
    </div>
  );
}

export default Update;
