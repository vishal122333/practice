import { useState } from "react";

const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmitEvent = (e) => {
    e.preventDefault();
    if (input.email !== "" && input.password !== "") {
      // Call your login action, e.g. via context or API
    } else {
      alert("Please provide valid input");
    }
  };

  return (
    <form onSubmit={handleSubmitEvent}>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          placeholder="example@yahoo.com"
          onChange={handleInput}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          onChange={handleInput}
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
