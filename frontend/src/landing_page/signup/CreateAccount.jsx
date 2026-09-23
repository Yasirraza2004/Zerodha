import "./Create.css";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateAccount = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [emailOtp, setEmailOtp] = useState("");
  const [showOtp, setShowOtp] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    if (!username || !email || !password) {
      alert("Please fill all fields.");
      return;
    }
    const signupToken = sessionStorage.getItem("signupToken");

    if (!signupToken) {
      alert("Please verify your phone number first.");
      navigate("/signup");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:8080/signup",
        {
          username: username.trim(),
          email: email.trim().toLowerCase(),
          password,
        },
        {
          headers: {
            Authorization: `Bearer ${signupToken}`,
          },
        },
      );

      console.log("SIGNUP RESPONSE:", response.data);

      // Signup request succeeded
      setShowOtp(true);

      // Remove temporary token after account creation
      sessionStorage.removeItem("signupToken");
    } catch (error) {
      console.error("SIGNUP ERROR:", error.response?.data);

      alert(error.response?.data?.message || "Unable to create account");
    }
  };

  const handleVerifyEmail = async () => {
    if (!emailOtp) {
      alert("Please enter the OTP");
      return;
    }
    try {
      const response = await axios.post("http://localhost:8080/verify-email", {
        email: email.trim().toLowerCase(),
        otp: emailOtp,
      });

      console.log(response.data);

      alert("Email verified successfully!");

      navigate("/login");

    } catch (error) {
      console.log(error.response?.data);
      
      alert(error.response?.data?.message || "Invalid OTP");
    }
  };

  return (
    <div className="create-page">
      {" "}
      <nav className="create-navbar">
        {" "}
        <div className="logo"> Zerodha </div>{" "}
        <div className="login-text">
          {" "}
          Already registered? <a href="/login">Login</a>{" "}
        </div>{" "}
      </nav>{" "}
      <main className="create-container">
        {" "}
        <div className="create-card">
          {" "}
          <h1>Create your account</h1>{" "}
          <p className="subtitle"> Start investing and trading with Zerodha </p>{" "}
          {!showOtp ? (
            <form onSubmit={handleSignup}>
              {" "}
              <div className="input-group">
                {" "}
                <label>Username</label>{" "}
                <input
                  type="text"
                  placeholder="Enter username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />{" "}
              </div>{" "}
              <div className="input-group">
                {" "}
                <label>Email</label>{" "}
                <input
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />{" "}
              </div>{" "}
              <div className="input-group">
                {" "}
                <label>Password</label>{" "}
                <input
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />{" "}
              </div>{" "}
              <button type="submit" className="create-btn">
                {" "}
                Create Account{" "}
              </button>{" "}
            </form>
          ) : (
            <div className="otp-section">
              {" "}
              <h3>Verify your email</h3>{" "}
              <p>
                {" "}
                We sent an OTP to <br /> <strong>{email}</strong>{" "}
              </p>{" "}
              <div className="input-group">
                {" "}
                <label>Email OTP</label>{" "}
                <input
                  type="text"
                  placeholder="Enter 6-digit OTP"
                  value={emailOtp}
                  onChange={(e) => setEmailOtp(e.target.value)}
                  maxLength={6}
                />{" "}
              </div>{" "}
              <button
                type="button"
                className="create-btn"
                onClick={handleVerifyEmail}
              >
                {" "}
                Verify Email{" "}
              </button>{" "}
            </div>
          )}{" "}
          <p className="terms">
            {" "}
            By continuing, you agree to our Terms and Privacy Policy.{" "}
          </p>{" "}
        </div>{" "}
      </main>{" "}
    </div>
  );
};
export default CreateAccount;
