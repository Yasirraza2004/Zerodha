

function Education() {
  return (
    <>
    <div className="container mt-5 mb-5">
      <div className="row">

        <div className="col-6 mb-5">
          <img src="media/images/education.svg" style={{width:"70%", margin:"40px 0 0 100px"}} alt="logo" />
        </div>

        <div className="col-6 mt-5">
          <h3>Free and open market education</h3>
          <h5 className="mt-3 text-muted" style={{lineHeight:"1.8"}}>Varsity, the largest online stock market education book in the world <br /> covering everything from the basics to advanced trading.</h5>
          <a href="#" style={{textDecoration:"none"}}>Varsity <i className="fa-solid fa-arrow-right small"></i></a>

          <h5 className="mt-5 text-muted"style={{lineHeight:"1.8"}}>TradingQ&A, the most active trading and investment community in <br /> India for all your market related queries.</h5>
          <a href="#" style={{textDecoration:"none"}}>TradingQ&A <i className="fa-solid fa-arrow-right small"></i></a>

        </div>

      </div>
    </div>
    </>
  );
}

export default Education;