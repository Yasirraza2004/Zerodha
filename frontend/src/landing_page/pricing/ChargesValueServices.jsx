function ChargesValueServices() {
    return (
      <div className="container mt-5">
        <h4 className="mb-4" style={{marginLeft:"110px"}}>Charges for optional value added services</h4>

        <div className="table-responsive">
          <table
            className="table ms-auto me-auto"
            style={{
              border: "1px solid #ddd",
              fontSize: "16px",
              maxWidth: "1080px",
            }}
          >
            <thead>
              <tr>
                <th style={{ width: "25%", fontWeight: "400" }}>Service</th>
                <th style={{ width: "40%", fontWeight: "400" }}>
                  Billing Frequency
                </th>
                <th style={{ width: "35%", fontWeight: "400" }}>Charges</th>
              </tr>
            </thead>

            <tr>
              <td style={{padding: "17px"}}>
                Tickertape
              </td>
              <td>Monthly / Quarterly / Annual</td>
              <td>Free: 0 | Pro: 249/699/2399</td>
            </tr>

            <tr style={{lineHeight:"2px", backgroundColor:"#f8f8f8"}}>
              <td style={{padding: "17px"}}>Smallcase</td>
              <td>Per transaction</td>
              <td>Buy & Invest More: 100 | SIP: 10</td>
            </tr>

            <tr>
              <td style={{padding: "17px"}}>Kite Connect</td>
              <td>Monthly</td>
              <td>Connect: 500 | Personal: Free</td>
            </tr>
          </table>
        </div>
      </div>
    );
}

export default ChargesValueServices;
