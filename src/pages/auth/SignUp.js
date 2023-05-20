import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [user, setUser] = useState({
    fullname: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    localStorage.setItem("users", JSON.stringify(user));
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        style={{ width: "500px", margin: "50px auto" }}
      >
        <input
          type="text"
          name="fullname"
          value={user.fullname}
          onChange={handleChange}
          placeholder="Please enter fullname"
        />
        <br /> <br />
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
          placeholder="Please enter email"
        />
        <br /> <br />
        <input
          type="phone"
          name="phone"
          value={user.phone}
          onChange={handleChange}
          placeholder="Please enter phone"
        />
        <br /> <br />
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={handleChange}
          placeholder="Please enter password"
        />{" "}
        <br /> <br />
        <div>
          <span>
            if you have already an account please <Link to="/login">login</Link>
          </span>
        </div>{" "}
        <br />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
