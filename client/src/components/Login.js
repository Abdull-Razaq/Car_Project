import React, { useState } from 'react';

function LoginSignupForm() {
  const [activeForm, setActiveForm] = useState('login');

  const handleLoginClick = () => {
    setActiveForm('login');
  }

  const handleSignupClick = () => {
    setActiveForm('signup');
  }

  const handleHideForms = () => {
    setActiveForm(null);
  }

  return (
    <div className={activeForm ? "cont_forms cont_forms_active_" + activeForm : "cont_forms"}>
      <div className="cont_form_login" style={{ display: activeForm === 'login' ? 'block' : 'none', opacity: activeForm === 'login' ? 1 : 0 }}>
        <h1>Login</h1>
        <form action="" method="post">
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
          </div>
          <div className="form-group">
            <button type="submit" className="btn">Login</button>
          </div>
        </form>
      </div>

      <div className="cont_form_sign_up" style={{ display: activeForm === 'signup' ? 'block' : 'none', opacity: activeForm === 'signup' ? 1 : 0 }}>
        <h1>Sign Up</h1>
        <form action="" method="post">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
          </div>
          <div className="form-group">
            <label htmlFor="confirm-password">Confirm Password:</label>
            <input type="password" id="confirm-password" name="confirm-password" required />
          </div>
          <div className="form-group">
            <button type="submit" className="btn">Sign Up</button>
          </div>
        </form>
      </div>

      <div className="form-switch" style={{ display: activeForm ? 'block' : 'none' }}>
        {activeForm === 'login' ? (
          <p>Don't have an account? <a href="#" onClick={handleSignupClick}>Sign up</a></p>
        ) : (
          <p>Already have an account? <a href="#" onClick={handleLoginClick}>Login</a></p>
        )}
      </div>

      {activeForm && (
        <div className="form-overlay" onClick={handleHideForms}></div>
      )}
    </div>
  );
}

export default LoginSignupForm;
