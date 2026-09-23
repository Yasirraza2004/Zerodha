function PricingHero() {
  return (
    <>
      <div className="container text-center"
      style={{
        maxWidth: "1080px",
        marginTop: "85px",
        marginBottom: "60px",
      }}
      >
        <div className="row">
          <h3>Charges</h3>
          <h5 className="text-muted mb-5 mt-2">List of all charges and taxes</h5>

          <div className="col-4 mt-5">
            <img src="media/images/pricing-eq.svg" style={{ width: "70%"}} />
            <h3 className="mt-3">Free equity delivery</h3>
            <p className="mt-4 text-muted">
              All equity delivery investments (NSE, BSE), <br />
              are absolutely free — ₹ 0 brokerage.
            </p>
          </div>
          <div className="col-4 mt-5">
            <img src="media/images/other-trades.svg" style={{ width: "70%" }} />
            <h3 className="mt-3">Intraday and F&O trades</h3>
            <p className="mt-4 text-muted">
              Flat ₹ 20 or 0.03% (whichever is lower) per <br />
              executed order on intraday trades across <br />
              equity, currency, and commodity trades. <br />
              Flat ₹20 on all option trades.
            </p>
          </div>
          <div className="col-4 mt-5">
            <img src="media/images/pricing-eq.svg" style={{ width: "70%"}} />
            <h3 className="mt-3 text">Free direct MF</h3>
            <p className="mt-4 text-muted">
              All direct mutual fund investments are <br />
              absolutely free — ₹ 0 commissions & DP <br />
              charges..
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default PricingHero;
