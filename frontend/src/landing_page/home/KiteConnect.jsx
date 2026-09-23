function KiteConnect() {
  return (
    <>
      <div className="container-fluid mt-4 pb-5">
        <div className="row" style={{backgroundColor:"#F6FBFF"}}>
          <div className="col-3 mt-2">
              <img
                src="media/images/zerodha-kite-logo-png_seeklogo-487028-removebg-preview.png"
                style={{ width: "17%", marginLeft: "150px"}}
                alt="logo"
              />
              <span style={{fontSize:"18px"}}><b> Kite Connect</b></span>
          </div>

          <div className="col-6 mt-3" style={{color:"grey"}}>
            <p>
              Need more? Build your own trading and investing experience with
              Kite Connect, simple HTTP APIs to place orders, stream market
              data, manage your account, and more. <a style={{textDecoration:"none"}} href="#">Explore <i className="fa-solid fa-arrow-right small"></i> </a>
            </p>
          </div>

          <div className="col-3 mt-3">
            <img src="media/images/zerodha-kite-space-icon.png" style={{ width: "65%"}} alt="logo" />
          </div>
        </div>
      </div>
    </>
  );
}

export default KiteConnect;
