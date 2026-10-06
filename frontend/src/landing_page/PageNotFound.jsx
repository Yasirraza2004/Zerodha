function PageNotFound() {
  return (
    <div
      className="container"
      style={{
        maxWidth: "900px",
        margin: "0 auto",
      }}
    >
      <div
        className="row align-items-center"
        style={{
          minHeight: "510px",
        }}
      >
        {/* LEFT SIDE */}
        <div className="col-6">
          <p
            style={{
              fontSize: "18px",
              marginBottom: "16px",
              paddingLeft:"80px",
              color: "#424242",
            }}
          >
            404
          </p>

          <h1
            style={{
              fontSize: "22px",
              fontWeight: "500",
              marginBottom: "10px",
              paddingLeft:"80px",
              color: "#222",
            }}
          >
            Kiaan couldn’t find that page
          </h1>

          <p
            style={{
              fontSize: "15px",
              lineHeight: "1.5",
              margin: 0,
              paddingLeft:"80px",
              color: "#424242",
            }}
          >
            We couldn’t find the page you were looking for.
            <br />
            Visit{" "}
            <a
              href="/"
              style={{
                color: "#387ed1",
                textDecoration: "none",
              }}
            >
              Zerodha’s home page
            </a>
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div
          className="col-6"
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            src="media/images/kiaan404.jpg"
            alt="404"
            style={{
              width: "75%",
              marginRight:"80px"
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default PageNotFound;