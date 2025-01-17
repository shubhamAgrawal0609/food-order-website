import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({ email: credentials.email, password: credentials.password });

    const response = await fetch("http://localhost:5000/api/loginuser", {
      // credentials: 'include',
      // Origin:"http://localhost:3000/login",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });

    const json = await response.json();
    console.log(json);
    if (! json.success) {
      alert("Enter Valid Credentials");
    }
    else {
      localStorage.setItem('token', json.authToken)
      console.log(localStorage.getItem("authToken"))
      navigate("/");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className="container">
      <form
        className="w-50 m-auto mt-5 border bg-dark border-success rounded"
        onSubmit={handleSubmit}
      >
        <div className="m-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={credentials.email}
            onChange={onChange}
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone.
          </div>
        </div>
        <div className="m-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            value={credentials.password}
            onChange={onChange}
            name="password"
          />
        </div>
        <button type="submit" className="m-3 btn btn-success">
          Submit
        </button>
        <Link to="/creatuser" className="m-3 mx-1 btn btn-danger">
          New User
        </Link>
      </form>
    </div>
  );
}
