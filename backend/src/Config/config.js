require("dotenv").config();

if(!process.env.MONGO_URI) {
    throw new Error("MONGO_URI is not defined in environment variables");
}

if(!process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET is not defined in environment variables");
}

if(!process.env.RESEND_API_KEY) {
    throw new Error("RESEND_API_KEY is not defined in environment variables");
}

if(!process.env.EMAIL_FROM) {
    throw new Error("EMAIL_FROM is not defined in environment variables");
}

if(!process.env.MSG91_AUTH_KEY) {
    throw new Error("MSG91_AUTHKEY is not defined in environment variables");
}

if(!process.env.MSG91_WIDGET_ID) {
    throw new Error("MSG91_WIDGET_ID is not defined in environment variables");
}

const config = {
    PORT : process.env.PORT || 8080,
    Mongo_URI : process.env.MONGO_URI,
    JWT_SECRET : process.env.JWT_SECRET,
    RESEND_API_KEY : process.env.RESEND_API_KEY,
    EMAIL_FROM : process.env.EMAIL_FROM,
    MSG91_AUTH_KEY : process.env.MSG91_AUTH_KEY,
    MSG91_WIDGET_ID : process.env.MSG91_WIDGET_ID,
}

module.exports = config;
