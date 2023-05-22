import {useState} from "react";

const App = () => {
  const [showPassword, setShowPassword] = useState("password");
  const handleChange = () => {
    // set the state for password input
    let result = event.target.checked ? "text" : "password";
    setShowPassword(result);
  };

  return (
    <>
      <h1>I am the Password Demo</h1>

      <form action="" method="get">
        <label>
          Username:
          <input type="text" />
        </label>
        <br />
        <label>
          Password:
          <input type={showPassword} />
        </label>
        <label>
          <input type="checkbox" onChange={handleChange}/>
          Show Password
        </label>
      </form>
    </>
  )
}

export default App;