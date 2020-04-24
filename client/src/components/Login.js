import React, {useState} from "react";
import axios from "axios";

const Login = props => {
  const [login, setLogin] = useState({username: "", password: ""});

  const handleChange = e => {
    setLogin({...login, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/login", login)
      .then(res => {
        localStorage.setItem("token", res.data.payload);
        props.history.push("/bubblepage");
      })
      .catch(err => console.log(err))
  }
  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <p>Login</p>
      <div>
        <form onSubmit={handleSubmit}>
          <input
          label="Username"
          type="text"
          name="username"
          placeholder="Username"
          value={login.username}
          onChange={handleChange}
          />
          <input
          label="Password"
          type="password"
          name="password"
          placeholder="password"
          value={login.password}
          onChange={handleChange}
          />
          <br />
          <br />
          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
};

export default Login;
