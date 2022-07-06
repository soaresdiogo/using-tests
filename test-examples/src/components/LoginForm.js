import { useState } from "react";

const LoginForm = ({ onLoginSuccess }) => {
  const [loginCredentials, setLoginCredentials] = useState({
    password: "",
    email: "",
  });
  const [errors, setErrors] = useState(false);

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("https://reqres.in/api/login", {
      method: "post",
      body: JSON.stringify(loginCredentials),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    const data = await response.json();

    if (data.error) {
      setErrors(true);
    } else {
      onLoginSuccess();
    }
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <div>
        <input
          type={"text"}
          placeholder="email"
          onChange={(e) =>
            setLoginCredentials((prevState) => ({
              ...prevState,
              email: e.target.value,
            }))
          }
        />
      </div>

      <div>
        <input
          type={"password"}
          placeholder="password"
          onChange={(e) =>
            setLoginCredentials((prevState) => ({
              ...prevState,
              password: e.target.value,
            }))
          }
        />
      </div>

      {errors && <div>Something went wrong</div>}
      <button type="submit">Submit</button>
    </form>
  );
};

export default LoginForm;