import React, { useState } from "react";
import axios from "axios";

const Login = props => {
  const [data, setData] = useState({
    username: "",
    password: ""
  });

  const onChange = e => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
    console.log(data);
  };

  const onSubmit = e => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/login", data)
      .then(res => {
        localStorage.setItem("token", JSON.stringify(res.data.payload));
        window.location.href = "/friends";
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label name="username">Username</label>
        <input
          htmlFor="username"
          name="username"
          value={data.username}
          onChange={onChange}
        />
        <label name="password">Password</label>
        <input
          htmlFor="password"
          name="password"
          value={data.password}
          onChange={onChange}
          type="password"
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Login;