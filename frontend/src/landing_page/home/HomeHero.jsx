function HomeHero() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 text-center mt-5">
          <img
            src="/media/images/landing.svg"
            className="img-fluid home-hero "
            alt="home"
          />

          <h3 className="mt-5">Invest in everything</h3>

          <h5 className="text-muted mt-3">
            Online platform to invest in stocks, derivatives, mutual funds,
            ETFs, bonds, and more.
          </h5>

          <a
            href="/signup"
            className="btn text-white mt-5"
            style={{
              backgroundColor: "#387ed1",
              width: "15%",
              borderRadius: "3px",
              fontSize:"19px",
              fontWeight:"500"
            }}
          >
            Sign up for free
          </a>
        </div>
      </div>
    </div>
  );
}

export default HomeHero;
