import "./login.css";
import axios from "axios";
import { useState } from "react";
import { useAuth } from "./AuthContext";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { setAccessToken } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    try {
      setLoading(true);

      const response = await axios.post(
        "http://localhost:8080/login",
        {
          email: email.trim().toLowerCase(),
          password,
        },
        {
          withCredentials: true,
        }
      );

      console.log("LOGIN RESPONSE:", response.data);

      // Save access token
      setAccessToken(response.data.accessToken);

      alert("Login successful!");

      window.location.href = "http://localhost:5174";

    } catch (error) {
      console.error(
        "LOGIN ERROR:",
        error.response?.data || error
      );

      alert(
        error.response?.data?.message ||
        "Login failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">

      <div className="login-box">

        <img
          className="kite-logo"
          src="/media/images/logo.svg"
          alt="Kite"
        />

        <h1>Login to Kite</h1>

        <form onSubmit={handleLogin}>

          {/* Email */}
          <div className="input-group">
            <label>Email</label>

            <input
              type="email"
              autoFocus
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password */}
          <div className="password-box">

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <span className="eye">◉</span>

          </div>

          {/* Login */}
          <button
            type="submit"
            className="login-btn"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>

        </form>

        <a href="#" className="forgot">
          Forgot user ID or password?
        </a>

      </div>

      <div className="login-footer">

        <div className="app-icons">
          <span>▶</span>
          <span>●</span>
        </div>

        <div className="zerodha-footer">
          ◐ ZERODHA
        </div>

        <p>
          Don't have an account?
          <a href="/signup"> Sign up for free!</a>
        </p>

        <small>
          Zerodha Broking Limited: Member of NSE, BSE, MCX - SEBI Reg.
          <br />
          no. INZ000316333, CDSL - SEBI Reg. no. IN-DP-431-2019 |
          <br />
          <u>Smart Online Dispute Resolution</u> |
          <u>SEBI SCORES</u>
        </small>

        <div className="version">
          v3.0.0
        </div>

      </div>

    </div>
  );
}

export default Login;