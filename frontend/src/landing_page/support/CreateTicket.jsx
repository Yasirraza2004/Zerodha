import TicketBox from "./TicketBox";

function CreateTicket() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-8">
          <TicketBox
            title="Account Opening"
            links={[
              "Resident individual",
              "Minor",
              "Non Resident Indian (NRI)",
              "Company, Partnership, HUF and LLP",
              "Glossary",
            ]}
            icons="fa-solid fa-circle-plus"
          />

          <TicketBox
            title="Your Zerodha Account"
            links={[
              "Login credentials",
              "Profile",
              "Account details",
              "Password",
            ]}
            icons="fa-regular fa-circle-user"
          />

          <TicketBox
            title="Kite"
            links={["Kite overview", "Orders", "Positions", "Holdings"]}
            icons="fa-regular fa-square-caret-left"
          />

          <TicketBox
            title="Funds"
            links={["Kite overview", "Orders", "Positions", "Holdings"]}
            icons="fa-solid fa-indian-rupee-sign"
          />

          <TicketBox
            title="Console"
            links={["Kite overview", "Orders", "Positions", "Holdings"]}
            icons="fa-solid fa-circle-notch"
          />

          <TicketBox
            title="Coin"
            links={["Kite overview", "Orders", "Positions", "Holdings"]}
            icons="fa-solid fa-coins"
          />
        </div>

        <div className="col-4">
          <div
            className="border-left ms-4"
            style={{
              backgroundColor: "#FFF4E5",
              width: "352px",
              height: "145px",
              position: "absolute",
              borderLeft: "9px solid #FF9100",
            }}
          >
            <ul style={{ color: "#387ed1", fontSize:"16px"}}>
              <li className="mt-3">
                <a href="#">
                  Current Takeovers and Delisting – <br /> 
                  September 2026
                </a>
              </li>
              <li className="mt-3">
                <a href="#">
                  Surveillance measure on scrips - <br /> 
                  September 2026
                </a>
              </li>
            </ul>
          </div>

          <div
            className="border"
            style={{
              position: "relative",
              top: "200px",
              width:"330px",
              marginLeft:"25px",
              marginTop:"-35px"
            }}
          >
            <div style={{backgroundColor:"#f5f5f5", padding:"3px" }}>
            <p style={{marginLeft:"10px", position: "relative", top:"10px", left:"7px" }}>Quick links</p>
            </div>
            <div className="border-bottom mb-4 mt-4 ">
              <a
                href="#"
                style={{
                  textDecoration: "none",
                  position: "relative",
                  left: "18px",
                  bottom: "10px",
                }}
              >
                1. Track account opening
              </a>
            </div>

            <div className="border-bottom mb-4">
              <a
                href="#"
                style={{
                  textDecoration: "none",
                  position: "relative",
                  left: "18px",
                  bottom: "10px",
                }}
              >
                2. Track segment activation
              </a>
            </div>

            <div className="border-bottom mb-4">
              <a
                href="#"
                style={{
                  textDecoration: "none",
                  position: "relative",
                  left: "18px",
                  bottom: "10px",
                }}
              >
                3. Intraday margins
              </a>
            </div>

            <div className="border-bottom mb-4">
              <a
                href="#"
                style={{
                  textDecoration: "none",
                  position: "relative",
                  left: "18px",
                  bottom: "10px",
                }}
              >
                4. Kite user manual
              </a>
            </div>

            <div>
              <a
                href="#"
                style={{
                  textDecoration: "none",
                  position: "relative",
                  left: "18px",
                  bottom: "10px",
                }}
              >
                5. Learn how to create a ticket
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
