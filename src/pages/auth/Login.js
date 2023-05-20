import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    // console.log(e.target.name, e.target.value);
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    let userAuth = localStorage.getItem("users");
    if (userAuth !== null) {
      navigate("/");
    } else {
      alert("Please enter valid credentials");
    }
  };

  return (
    <div>
      <form
        style={{ width: "500px", margin: "50px auto" }}
        onSubmit={handleSubmit}
      >
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
          placeholder="Please enter email"
        />
        <br /> <br />
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={handleChange}
          placeholder="Please enter password"
        />
        <br /> <br />
        <div>
          <span>
            if you don't have an account please <Link to="/signup">signup</Link>
          </span>
        </div>{" "}
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
