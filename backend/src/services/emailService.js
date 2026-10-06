const config = require ("../Config/config");
const { Resend } = require("resend");

const resend = new Resend(config.RESEND_API_KEY);

module.exports.sendOtpEmail = async (email, otp) => {
    try {
        const response = await resend.emails.send({
            from: config.EMAIL_FROM,
            to: [email],
            subject: "Your Zerodha Clone Email Verification OTP",

            html: `
                <div style="
                    font-family: Arial, sans-serif;
                    max-width: 500px;
                    margin: auto;
                    padding: 30px;
                    border: 1px solid #ddd;
                    border-radius: 10px;
                ">
                    <h2>Email Verification</h2>

                    <p>
                        Use the following OTP to verify your email address:
                    </p>

                    <div style="
                        font-size: 32px;
                        font-weight: bold;
                        letter-spacing: 8px;
                        margin: 25px 0;
                    ">
                        ${otp}
                    </div>

                    <p>
                        This OTP will expire shortly.
                    </p>

                    <p>
                        If you didn't request this OTP, you can safely ignore
                        this email.
                    </p>
                </div>
            `
        });

        if (response.error) {
            console.error("Resend error:", response.error);
            throw new Error("Failed to send email");
        }

        console.log("Email sent:", response.data);

        return response.data;
    } catch (error) {
        console.error("Email service error:", error);
        throw error;
    }
};