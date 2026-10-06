
function TrustSection() {
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-5 text-start">

            <h3 style={{marginLeft:"90px"}} className=" mt-5 mb-5">Trust with confidence</h3>

            <h5 style={{margin: "30px 0 10px 90px"}} >Customer-first always</h5>
            <p className="mb-4 text-muted" style={{marginLeft:"90px", lineHeight:"1.7"}} >
              That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh
              crores of equity investments, making us India’s largest broker;
              contributing to 15% of daily retail exchange volumes in India.
            </p>

            <h5 style={{margin: "30px 0 10px 90px"}} >No spam or gimmicks</h5>
            <p className="mb-4 text-muted " style={{marginLeft:"90px", lineHeight:"1.7"}}>
              No gimmicks, spam, "gamification", or annoying push notifications.
              High quality apps that you use at your pace, the way you like.
              <a style={{textDecoration:"none"}} href="#"> Our philosophies.</a>
            </p>

            <h5 style={{margin: "30px 0 10px 90px"}} >The Zerodha universe</h5>
            <p className="mb-4 text-muted" style={{marginLeft:"90px", lineHeight:"1.7"}}>
              Not just an app, but a whole ecosystem. Our investments in
              30+ fintech startups offer you tailored services
              specific to your needs.
            </p>

            <h5 style={{margin: "30px 0 10px 90px"}} >Do better with money</h5>
            <p className="mb-4 text-muted"style={{marginLeft:"90px", lineHeight:"1.7"}}>
              With initiatives like <a style={{textDecoration:"none"}} href="#"> Nudge</a> and
              <a style={{textDecoration:"none"}} href="#"> Kill Switch</a>, we don't just facilitate
              transactions, but actively help you do better with your money.
            </p>
          </div>

          <div className="col-lg-7 mt-5">
            <img src="/media/images/ecosystem.png" style={{margin:"0 0 15px 80px"}} width={"80%"} alt="img" /> <br />
            <a style={{marginLeft:"210px", textDecoration:"none"}} href="#">Explore our products <i className="fa-solid fa-arrow-right"></i></a>
            <a style={{marginLeft:"22px", textDecoration:"none"}} href="#">Try Kite demo <i className="fa-solid fa-arrow-right"></i></a>
          </div>
        </div>
      </div>
    </>
  );
}

export default TrustSection;
