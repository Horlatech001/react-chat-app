import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Login = () => {
  const [err, setErr] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      setErr(true);
    }
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Hayzed Chat</span>
        <span className="logo">Register</span>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          {isLoading ? <button>Loading...</button> : <button>Sign in</button>}
        </form>
        <p>
          You don't have an account? <Link to="/register">Register</Link>
        </p>
        {err && <span>Something went wrong</span>}
      </div>
    </div>
  );
};

export default Login;
