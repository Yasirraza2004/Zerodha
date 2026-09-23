function Team() {
  return (
    <>
      <div className="container mb-5">
        <div className="row">
            <h4 className="text-center mb-5 ms-4">People</h4>

          <div className="col mt-2">
                <img src="media/images/nithinKamath.jpg" style={{width:"50%", borderRadius:"50%", marginLeft:"240px"}} alt="owner logo" />
                <p style={{fontSize:"21px", margin:"12px 0 0 320px"}}>Nithin Kamath</p>
                <p style={{fontSize:"16px", margin:"10px 0 0 340px", color:"grey", marginTop:"-3px"}}>Founder, CEO</p>
          </div>

          <div className="col text-start mt-4" style={{fontSize:"17px", paddingRight:"100px"}}>
            <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the <br /> hurdles he faced during his decade long stint as a trader. Today, <br /> Zerodha has changed the landscape of the Indian broking industry.</p>
            <p>He is a member of the SEBI Secondary Market Advisory Committee <br /> (SMAC) and the Market Data Advisory Committee (MDAC).</p>
            <p>Playing basketball is his zen.</p>
            <p>Connect on <a href="/" style={{textDecoration:"none"}}><b>Homepage</b></a> / <a href="/" style={{textDecoration:"none"}}><b>TradingQnA</b></a> / <a href="/" style={{textDecoration:"none"}}><b>Twitter</b></a></p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Team;
