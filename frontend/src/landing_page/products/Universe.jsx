function Universe() {
  const logoStyle = {
    width: "240px",
    height: "60px",
    objectFit: "contain",
  };

  const descriptionStyle = {
    fontSize: "14px",
    lineHeight: "1.5",
    marginTop: "12px",
    color: "#666",
  };

  return (
    <div
      className="container text-center"
      style={{
        maxWidth: "1100px",
        marginTop: "85px",
        marginBottom: "100px",
      }}
    >
      {/* Top text */}
      <h5
        style={{
          fontWeight: "400",
          marginBottom: "85px",
        }}
      >
        Want to know more about our technology stack? Check out the &nbsp; 
        <a href="#" style={{ textDecoration: "none" }}>
          Zerodha.tech
        </a> &nbsp;
        blog.
      </h5>

      {/* Heading */}
      <h4
        style={{
          fontWeight: "500",
          marginBottom: "23px",
        }}
      >
        The Zerodha Universe
      </h4>

      <p
        style={{
          fontSize: "18px",
          marginBottom: "65px",
        }}
      >
        Extend your trading and investment experience even further with our
        partner platforms
      </p>

      {/* Products */}
      <div
        className="row"
        style={{
          rowGap: "35px",
        }}
      >
        {/* Fund House */}
        <div className="col-4">
          <img
            src="media/images/zerodhafundhouse (1).png"
            style={logoStyle}
            alt="Zerodha Fund House"
          />

          <p style={descriptionStyle}>
            Our asset management venture <br />
            that is creating simple and transparent index <br />
            funds to help you save for your goals.
          </p>
        </div>

        {/* Sensibull */}
        <div className="col-4">
          <img
            src="media/images/sensibull-logo.svg"
            style={logoStyle}
            alt="Sensibull"
          />

          <p style={descriptionStyle}>
            Options trading platform that lets you <br />
            create strategies, analyze positions, and examine <br />
            data points like open interest, FII/DII, and more.
          </p>
        </div>

        {/* Tijori */}
        <div className="col-4">
          <img
            src="media/images/tijori.svg"
            style={logoStyle}
            alt="Tijori"
          />

          <p style={descriptionStyle}>
            Investment research platform <br />
            that offers detailed insights on stocks, <br />
            sectors, supply chains, and more.
          </p>
        </div>

        {/* Streak */}
        <div className="col-4">
          <img
            src="media/images/streak-logo.png"
            style={logoStyle}
            alt="Streak"
          />

          <p style={descriptionStyle}>
            Systematic trading platform <br />
            that allows you to create and backtest <br />
            strategies without coding.
          </p>
        </div>

        {/* Smallcase */}
        <div className="col-4">
          <img
            src="media/images/smallcase-logo.png"
            style={logoStyle}
            alt="Smallcase"
          />

          <p style={descriptionStyle}>
            Thematic investing platform <br />
            that helps you invest in diversified <br />
            baskets of stocks on ETFs.
          </p>
        </div>

        {/* Ditto */}
        <div className="col-4">
          <img
            src="media/images/ditto-logo.png"
            style={logoStyle}
            alt="Ditto"
          />

          <p style={descriptionStyle}>
            Personalized advice on life <br />
            and health insurance. No spam <br />
            and no mis-selling.
          </p>
        </div>
      </div>

      {/* Button */}
      <a href="/signup"
            className="btn text-white mt-5"
            style={{
              backgroundColor: "#387ed1",
              width: "19%",
              fontSize:"20px",
              borderRadius: "3px",
              display: "flex",
              margin: "auto",
              justifyContent: "center",
              alignItems: "center",
              fontWeight:"500",
            }}
          >
            Sign up for free
          </a>
    </div>
  );
}

export default Universe;
