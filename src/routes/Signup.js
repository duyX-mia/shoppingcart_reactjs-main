import './Layout.css';
import React from 'react';

function Signup() {
  return (
    <div className="form-container">
      <style>
        {/* {`
          body {
            background-color: #f0f8ea;
            font-family: "Arial", sans-serif;
          }

          h1 {
            color: #354259;
            text-align: center;
          }

          form {
            max-width: 300px;
            margin: 20px auto;
            padding: 20px;
            background-color: #fff;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          }

          label {
            display: block;
            margin-bottom: 8px;
            color: #354259;
          }

          input {
            width: 100%;
            padding: 10px;
            margin-bottom: 15px;
            border: 1px solid #ccc;
            border-radius: 4px;
            box-sizing: border-box;
          }

          input[type="submit"] {
            background-color: #354259;
            color: #fff;
            cursor: pointer;
          }

          input[type="submit"]:hover {
            background-color: #1e2a38;
          }
        `} */}
      </style>
      <form autoComplete="on">
        <h1>SignUp</h1>
        <p>
          <label htmlFor="username">Username:</label>
          <input type="text" name="username" id="username" required />
        </p>
        <p>
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" id="password" required />
        </p>
        <p>
          <input type="submit" value="SignUp" id="signUpBtn" />
        </p>
      </form>
    </div>
  );
}

export default Signup;
