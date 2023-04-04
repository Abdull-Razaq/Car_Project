import React from "react";

function Login() {
    return (
        <div class="container">
      <div class="form-container">
        <h1>Login</h1>
        <form action="" method="post">
          <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div class="form-group">
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required />
          </div>
          <div class="form-group">
            <button type="submit" class="btn">Login</button>
          </div>
        </form>
      </div>

      <div class="form-container">
        <h1>Sign Up</h1>
        <form action="" method="post">
          <div class="form-group">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div class="form-group">
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required />
          </div>
          <div class="form-group">
            <label for="confirm-password">Confirm Password:</label>
            <input type="password" id="confirm-password" name="confirm-password" required />
          </div>
          <div class="form-group">
            <button type="submit" class="btn">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
    );
};

export default Login;