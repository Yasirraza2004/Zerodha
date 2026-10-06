function Pricing() {
  return (
    <>
      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-5 mb-5">
            <h4 className="mb-3" style={{marginLeft:"100px"}}>Unbeatable pricing</h4>
            <p style={{marginLeft:"100px", lineHeight:"1.7"}}>
              We pioneered the concept of discount broking and price
              transparency in India. Flat fees and no hidden charges.
            </p>
            <a href="#" style={{textDecoration:"none", marginLeft:"100px"}}>
              See pricing <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>

          <div className="col-7 mb-5" style={{display:"flex", marginTop:"20px"}}>
            <div>
              <img src="media/images/pricing0.svg" width={"50%"} />
              <p className="text-muted ms-4" style={{fontSize:"10px"}}>
                Free account <br />
                opening
              </p>
            </div>

            <div>
              <img src="media/images/pricingEquity.svg" width={"50%"} />
              <p className="text-muted ms-4" style={{fontSize:"10px"}}>
                Free equity delivery <br />
                and direct mutual funds
              </p>
            </div>

            <div>
              <img src="media/images/intradayTrades.svg" width={"50%"} />
              <p className="text-muted ms-3" style={{fontSize:"10px"}}>
                Intraday and <br />
                F&O
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pricing;