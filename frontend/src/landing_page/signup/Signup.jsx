import "./Signup.css";
import OpenAccount from "../OpenAccount.jsx";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Signup() {

  const [phoneNumber, setPhoneNumber] = useState("");
  const navigate = useNavigate();

  const handleGetOtp = async () => {
    try {
      const response = await axios.post("http://localhost:8080/sendOtp", {
        phoneNumber,
      });

      console.log("Response Data: ", response.data);

      // User already registered
    if (response.data.userExists === true) {
      alert("User already registered");
      navigate("/login");
      return;
    }

      // Backend returns the MSG91 request ID as reqId.
      const reqId = response.data.reqId;

      // Go to OTP page
      navigate("/verify-otp", {
        state: {
          reqId
        }
      });
    } catch (error) {
      console.log("STATUS:", error.response?.status);
  console.log("MSG91 ERROR:", error.response?.data);
  console.log("MESSAGE:", error.message);
    }
  };

  return (
    <>
      <div className="signup-container">
        <h3>Open a free demat and trading account online</h3>

        <h5 className="text-muted mt-3">
          Start investing brokerage free and join a community of 1.6+ crore
          investors and traders
        </h5>

        <div className="signup-page">
          <div className="signup-left">
            <img src="/media/images/account_open.svg" alt="Open account" />
          </div>

          <div className="signup-right">
            <h1>Signup now</h1>

            <p>Or track your existing application</p>

            
              <>
                <div className="phone-input">
                  <div className="country-code">
                    <span>🇮🇳</span>
                    <span>+91</span>
                  </div>

                  <input
                    type="tel"
                    placeholder="Enter your mobile number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>

                <button className="otp-btn" onClick={handleGetOtp}>
                  Get OTP
                </button>
              </>
            

            <p className="terms">
              By proceeding, you agree to the Zerodha
              <a href="#"> terms</a> & <a href="#">privacy policy</a>
            </p>

            <hr />

            <p className="nri">
              Looking to open NRI account? <a href="#">Click here</a>
            </p>
          </div>
        </div>
      </div>

      <div className="text-center">
        <h4>Already have a demat account?</h4>
        <p className="text-muted mt-3">
          Move your holdings to Zerodha and we'll cover your transfer costs, up
          to ₹500, learn more.
        </p>
      </div>

      <div className="text-center" style={{ marginTop: "90px" }}>
        <h4>Investment options with Zerodha demat account</h4>
      </div>

      <div className="container-fluid" style={{ marginTop: "70px" }}>
        <div className="row">
          <div className="col-6">
            <div
              style={{ margin: "0 0 0 320px", display: "flex", gap: "25px" }}
            >
              <img src="/media/images/stocks-acop.svg" alt="logo" />
              <div style={{ marginTop: "10px", lineHeight: "1.5" }}>
                <h5>Stocks</h5>
                <p className="text-muted">
                  Invest in all exchange-listed <br /> securities
                </p>
              </div>
            </div>

            <div
              style={{ margin: "40px 0 0 295px", display: "flex", gap: "35px" }}
            >
              <img src="/media/images/ipo-acop.svg" alt="logo" />
              <div style={{ marginTop: "10px", lineHeight: "1.5" }}>
                <h5>IPO</h5>
                <p className="text-muted">
                  Apply to the latest IPOs instantly <br /> via UPI
                </p>
              </div>
            </div>
          </div>

          <div className="col-6">
            <div style={{ margin: "0 0 0 50px", display: "flex", gap: "25px" }}>
              <img src="/media/images/mf-acop.svg" alt="logo" />
              <div style={{ marginTop: "10px", lineHeight: "1.5" }}>
                <h5>Mutual funds</h5>
                <p className="text-muted">
                  Invest in commission-free direct <br /> mutual funds
                </p>
              </div>
            </div>

            <div style={{ margin: "40px", display: "flex", gap: "40px" }}>
              <img src="/media/images/fo-acop.svg" alt="logo" />
              <div style={{ marginTop: "10px", lineHeight: "1.5" }}>
                <h5>Futures & options</h5>
                <p className="text-muted">
                  Hedge and mitigate market risk <br /> through simplified F&O
                  trading
                </p>
              </div>
            </div>
          </div>
        </div>
        <a
          href="#"
          className="btn text-white mt-3"
          style={{
            backgroundColor: "#387ed1",
            width: "16%",
            borderRadius: "3px",
            display: "flex",
            margin: "auto",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "20px",
            fontWeight: "500",
          }}
        >
          Explore Investments
        </a>
      </div>

      <div
        className="container-fluid"
        style={{
          backgroundColor: "#f8f8f8",
          marginTop: "100px",
          minHeight: "430px",
        }}
      >
        <div className="row">
          <h4 className="text-center mt-5 mb-5">
            Steps to open a demat account with Zerodha
          </h4>
          <div className="col mt-3 text-end">
            <img src="/media/images/steps-acop.svg" width={"60%"} alt="logo" />
          </div>

          <div className="col mt-5 ms-5">
            <h5> 01. Enter the requested details</h5>
            <hr style={{ color: "grey", width: "370px" }} />
            <h5 className="mt-4">02. Complete e-sign & verification</h5>
            <hr style={{ color: "grey", width: "370px" }} />
            <h5 className="mt-4">03. Start investing!</h5>
          </div>
        </div>
      </div>


      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col text-center" style={{marginTop:"140px"}}>
            <img src="/media/images/acop-benefits.svg" width={"50%"} style={{marginLeft:"200px"}} alt="logo" />
            <h4 style={{margin:"30px 0 0 190px"}}>Benefits of opening a Zerodha demat account</h4>
          </div>

          <div className="col">
            <div className="mt-5">
              <h5>Unbeatable pricing</h5>
              <p className="mt-4  text-muted">
                Zero charges for equity & mutual fund investments. Flat ₹20 fees
                for <br /> intraday and F&O trades.
              </p>
            </div>

            <div className="mt-5">
              <h5>Best investing experience</h5>
              <p className="mt-4  text-muted">
                Simple and intuitive trading platform with an easy-to-understand
                user <br /> interface.
              </p>
            </div>

            <div className="mt-5">
              <h5>No spam or gimmicks</h5>
              <p className="mt-4  text-muted">
                Committed to transparency — no gimmicks, spam, "gamification",
                or <br /> intrusive push notifications.
              </p>
            </div>

            <div className="mt-5">
              <h5>The Zerodha universe</h5>
              <p className="mt-4 text-muted">
                More than just an app — gain free access to the entire ecosystem
                of <br /> our partner products.
              </p>
            </div>
          </div>
        </div>
      </div>
      <OpenAccount />
    </>
  );
}

export default Signup;
