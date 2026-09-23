
function OpenAccount() {
  return (
    <>
      <div className="container openAccount" style={{marginTop:"90px"}}>
        <div className="row">
          <h2
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Open a Zerodha account
          </h2>
          <p
            className="mt-4 text-muted"
            style={{
              fontSize: "19px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
            F&O trades.
          </p>
          <a href="/signup"
            className="btn text-white mt-3"
            style={{
              backgroundColor: "#387ed1",
              width: "16%",
              fontSize:"20px",
              borderRadius: "3px",
              display: "flex",
              margin: "auto",
              justifyContent: "center",
              alignItems: "center",
              fontWeight:"500",
              marginBottom:"100px"
            }}
          >
            Sign up for free
          </a>
        </div>
      </div>
    </>
  );
}

export default OpenAccount;
