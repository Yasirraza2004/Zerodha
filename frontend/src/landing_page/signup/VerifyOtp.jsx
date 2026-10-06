import { useState } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";

function VerifyOtp() {

    const navigate = useNavigate();
    const location = useLocation();

    const reqId  = location.state.reqId || {};

    const [otp, setOtp] = useState();

  const handleVerifyOtp = async () => {
    console.log("VERIFY BUTTON CLICKED");
    try {
      const response = await axios.post("http://localhost:8080/verifyOtp", {
        reqId,
        otp,
      });

      console.log("BACKEND RESPONSE:", response.data);

       if (response.data.verified === true) {
      alert("Otp already verified");
      navigate("/create-account");
      return;
    }

      // Save temporary signup token
      sessionStorage.setItem("signupToken", response.data.signupToken);

      // Go to account creation page
      navigate("/create-account");

      
    } catch (error) {
      console.log("ERROR DATA:", error.response?.data);
    }
  };
  return (
    <>
      <div className="otp-section">
        <input
          type="text"
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
        />

        <button
          style={{ backgroundColor: "#387ed1" }}
          onClick={handleVerifyOtp}
        >
          Verify OTP
        </button>
      </div>
    </>
  );
}

export default VerifyOtp;
