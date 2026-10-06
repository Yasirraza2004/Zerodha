function Footer() {
  const linkStyle = {
    display: "block",
    textDecoration: "none",
    fontSize: "15px",
    marginBottom: "-15px",
    lineHeight: "30px"
  };

  return (
    <>
      <footer
        className="border-top"
        style={{ backgroundColor: "#fbfbfb" }}
      >
        <div className="container mt-4">
          <div
            className="row"
            style={{ paddingLeft: "150px", paddingRight: "150px" }}
          >
            <div
              className="col"
              style={{
                paddingRight: "25px",
              }}
            >
              {/* Logo */}
              <img
                src="media/images/logo.svg"
                alt="logo"
                style={{
                  width: "140px",
                  margin: "10px -35px 10px  ",
                }}
              />

              {/* Copyright */}
              <p
                className="text-muted"
                style={{
                  fontSize: "14px",
                  lineHeight: "1.6",
                  margin: "0 0 18px -35px ",
                }}
              >
                © 2010 - 2026, Zerodha Broking Ltd.
                <br />
                All rights reserved.
              </p>

              {/* First social row */}
              <div
                style={{
                  display: "flex",
                  gap: "13px",
                  alignItems: "center",
                  marginBottom: "25px",
                  marginLeft: "-35px",
                  color: "grey",
                  fontSize:"21px"
                }}
              >
                <i className="fa-brands fa-x-twitter"></i>
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-linkedin-in"></i>
              </div>

              {/* Divider */}
              <hr
                style={{
                  border: "0",
                  borderTop: "1px solid grey",
                  marginLeft:"-36px"
                }}
              />

              {/* Second social row */}
              <div
                style={{
                  display: "flex",
                  gap: "13px",
                  alignItems: "center",
                  marginBottom: "35px",
                  marginLeft: "-35px",
                  marginTop:"25px",
                  color: "grey",
                  fontSize:"21px"
                }}
              >
                <i className="fa-brands fa-youtube"></i>
                <i className="fa-brands fa-whatsapp"></i>
                <i className="fa-brands fa-telegram"></i>
              </div>

              {/* App badges */}
              <div
                style={{
                  display: "flex",
                  gap: "8px",
                  alignItems: "center",
                  marginLeft:"-35px"
                }}
              >
                <img
                  src="media/images/google-play-badge-light.svg"
                  alt="Google Play"
                  style={{
                    width: "120px",
                    height: "auto",
                  }}
                />

                <img
                  src="media/images/appstore-badge-light.svg"
                  alt="App Store"
                  style={{
                    width: "110px",
                    height: "auto",
                  }}
                />
              </div>
            </div>

            <div className="col">
              <p>Account</p>
              <a className="text-muted" style={linkStyle} href="#">
                Open demat account
              </a>
              <br />
              <a className="text-muted" style={linkStyle} href="#">
                Minor demat account
              </a>
              <br />
              <a className="text-muted" style={linkStyle} href="#">
                NRI demat account
              </a>
              <br />
              <a className="text-muted" style={linkStyle} href="#">
                HUF demat account
              </a>
              <br />
              <a className="text-muted" style={linkStyle} href="#">
                Commodity
              </a>
              <br />
              <a className="text-muted" style={linkStyle} href="#">
                Dematerialisation
              </a>
              <br />
              <a className="text-muted" style={linkStyle} href="#">
                Fund transfer
              </a>
              <br />
              <a className="text-muted" style={linkStyle} href="#">
                MTF
              </a>
            </div>

            <div className="col">
              <p>Support</p>

              <a className="text-muted" style={linkStyle} href="#">
                Contact us
              </a>
              <br />
              <a className="text-muted" style={linkStyle} href="#">
                Support portal
              </a>
              <br />
              <a className="text-muted" style={linkStyle} href="#">
                How to file a complaint?
              </a>
              <br />
              <a className="text-muted" style={linkStyle} href="#">
                Status of your complaints
              </a>
              <br />
              <a className="text-muted" style={linkStyle} href="#">
                Bulletin
              </a>
              <br />
              <a className="text-muted" style={linkStyle} href="#">
                Circular
              </a>
              <br />
              <a className="text-muted" style={linkStyle} href="#">
                Z-Connect blog
              </a>
              <br />
              <a className="text-muted" style={linkStyle} href="#">
                Downloads
              </a>
              <br />
            </div>

            <div className="col">
              <p>Company</p>

              <a className="text-muted" style={linkStyle} href="#">
                About
              </a>
              <br />
              <a className="text-muted" style={linkStyle} href="#">
                Philosophy
              </a>
              <br />
              <a className="text-muted" style={linkStyle} href="#">
                Press & media
              </a>
              <br />
              <a className="text-muted" style={linkStyle} href="#">
                Careers
              </a>
              <br />
              <a className="text-muted" style={linkStyle} href="#">
                Zerodha Cares (CSR)
              </a>
              <br />
              <a className="text-muted" style={linkStyle} href="#">
                Zerodha.tech
              </a>
              <br />
              <a className="text-muted" style={linkStyle} href="#">
                Open source
              </a>
              <br />
              <a className="text-muted" style={linkStyle} href="#">
                Referral program
              </a>
            </div>

            <div className="col">
              <p>Quick links</p>

              <a className="text-muted" style={linkStyle} href="#">
                Upcoming IPOs
              </a>
              <br />
              <a className="text-muted" style={linkStyle} href="#">
                Brokerage charges
              </a>
              <br />
              <a className="text-muted" style={linkStyle} href="#">
                Market holidays
              </a>
              <br />
              <a className="text-muted" style={linkStyle} href="#">
                Economic calendar
              </a>
              <br />
              <a className="text-muted" style={linkStyle} href="#">
                Calculators
              </a>
              <br />
              <a className="text-muted" style={linkStyle} href="#">
                Markets
              </a>
              <br />
              <a className="text-muted" style={linkStyle} href="#">
                Sectors
              </a>
              <br />
              <a className="text-muted" style={linkStyle} href="#">
                Gift Nifty
              </a>
            </div>
          </div>

          <div className="row mt-4">
            <div
              className="mt-4"
              style={{
                maxWidth: "100%",
                textAlign: "left",
                fontSize: "12px",
                lineHeight: "1.8",
                paddingLeft: "100px",
                paddingRight: "100px",
                color: "grey",
              }}
            >
              <p>
                Zerodha Broking Ltd.: Member of NSE, BSE, MCX & MSEI – SEBI
                Registration no.: INZ000031633 CDSL/NSDL: Depository services
                through Zerodha Broking Ltd. – SEBI Registration no.:
                IN-DP-431-2019 Registered Address: Zerodha Broking
                Ltd.,#153/154, 4th Cross, Dollars Colony, Opp. Clarence Public
                School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka,
                India. For any complaints pertaining to securities broking
                please write to complaints@zerodha.com, for DP related to
                dp@zerodha.com. Please ensure you carefully read the Risk
                Disclosure Document as prescribed by SEBI | ICF
              </p>
              <p>
                Procedure to file a complaint on SEBI SCORES: Register on SCORES
                portal. Mandatory details for filing complaints on SCORES: Name,
                PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
                Communication, Speedy redressal of the grievances
              </p>
              <a style={{ textDecoration: "none" }} href="#">
                Smart Online Dispute Resolution | Grievances Redressal Mechanism
              </a>
              <p>
                Investments in securities market are subject to market risks;
                read all the related documents carefully before investing.
              </p>
              <p>
                Attention investors: 1) Stock brokers can accept securities as
                margins from clients only by way of pledge in the depository
                system w.e.f September 01, 2020. 2) Update your e-mail and phone
                number with your stock broker / depository participant and
                receive OTP directly from depository on your e-mail and/or
                mobile number to create pledge. 3) Check your securities / MF /
                bonds in the consolidated account statement issued by NSDL/CDSL
                every month.
              </p>

              <p>
                India's largest broker based on networth as per NSE. NSE broker
                factsheet
              </p>

              <p>
                "Prevent unauthorised transactions in your account. Update your
                mobile numbers/email IDs with your stock brokers/depository
                participants. Receive information of your transactions directly
                from Exchange/Depositories on your mobile/email at the end of
                the day. Issued in the interest of investors. KYC is one time
                exercise while dealing in securities markets - once KYC is done
                through a SEBI registered intermediary (broker, DP, Mutual Fund
                etc.), you need not undergo the same process again when you
                approach another intermediary." Dear Investor, if you are
                subscribing to an IPO, there is no need to issue a cheque.
                Please write the Bank account number and sign the IPO
                application form to authorize your bank to make payment in case
                of allotment. In case of non allotment the funds will remain in
                your bank account. As a business we don't give stock tips, and
                have not authorized anyone to trade on behalf of others. If you
                find anyone claiming to be part of Zerodha and offering such
                services, please create a ticket here.
              </p>

              <p>
                *Customers availing insurance advisory services offered by Ditto
                (Tacterial Consulting Private Limited | IRDAI Registered
                Corporate Agent (Composite) License No CA0738) will not have
                access to the exchange investor grievance redressal forum, SEBI
                SCORES/ODR, or arbitration mechanism for such products.
              </p>

              <p>
                Fixed deposit products offered on this platform are third-party
                products (TPP) and are not Exchange traded products. These are
                offered through Blostem Fintech Private Limited. Zerodha Broking
                Limited (SEBI Registration No.: INZ000031633) is acting solely
                as a distributor for these products. Any disputes arising with
                respect to such distribution activity will not have access to
                SEBI SCORES/ODR, Exchange Investor Grievance Redressal Forum, or
                Arbitration mechanism. Fixed deposits are regulated by the
                Reserve Bank of India (RBI).
              </p>
            </div>

              <div className="mb-3" style={{
                textAlign: "center",
                fontSize: "14px"}}>
                <a  style={{textDecoration: "none", paddingRight:"20px", color:"grey"}} href="#">
                  NSE
                </a>
                <a  style={{textDecoration: "none", paddingRight:"20px", color:"grey"}} href="#">
                  BSE
                </a>
                <a  style={{textDecoration: "none", paddingRight:"20px", color:"grey"}} href="#">
                  MCX
                </a>
                <a  style={{textDecoration: "none", paddingRight:"20px", color:"grey"}} href="#">
                  MSEI
                </a>
                <a  style={{textDecoration: "none", paddingRight:"20px", color:"grey"}} href="#">
                  Terms & conditions
                </a>
                <a  style={{textDecoration: "none", paddingRight:"20px", color:"grey"}} href="#">
                  Policies & procedures
                </a>
                <a  style={{textDecoration: "none", paddingRight:"20px", color:"grey"}} href="#">
                  Privacy policy
                </a>
                <a  style={{textDecoration: "none", paddingRight:"20px", color:"grey"}} href="#">
                  Disclosure
                </a>
                <a  style={{textDecoration: "none", paddingRight:"20px", color:"grey"}} href="#">
                  For investor's attention
                </a>
                <a  style={{textDecoration: "none", paddingRight:"20px", color:"grey"}} href="#">
                  Investor charter
                </a>
                <a  style={{textDecoration: "none", paddingRight:"20px", color:"grey"}} href="#">
                  Sitemap
                </a>
              </div>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Footer;
