
function BrokerageCalculator() {
  const tabStyle = {
    fontSize: "23px",
    fontWeight: "400",
    color: "#387ed1",
    margin: "0",
    padding: "0 28px 14px",
    cursor: "pointer",
  };

  const activeTabStyle = {
    ...tabStyle,
    color: "#555",
    borderBottom: "2px solid #387ed1",
  };

  const cellStyle = {
    padding: "12px 13px",
    color: "#424242",
    fontSize: "14.5px",
    lineHeight: "1.6",
  };

  const headingStyle = {
    padding: "14px 15px",
    fontWeight: "400",
    fontSize: "14px",
    color: "#222",
    whiteSpace: "nowrap",
  };

  return (
    <>
      <div
        className="container mt-5 mb-5"
        style={{
          maxWidth: "1100px",
        }}
      >
        {/* Tabs */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            borderBottom: "1px solid #ddd",
            marginBottom: "30px",
          }}
        >
          <h5 style={activeTabStyle}>Equity</h5>

          <h5 style={tabStyle}>Currency</h5>

          <h5 style={tabStyle}>Commodity</h5>
        </div>

        {/* Table */}
        <div
          style={{
            width: "100%",
            overflowX: "auto",
          }}
        >
          <table
            style={{
              width: "100%",
              borderCollapse: "separate",
              borderSpacing: "0",
              border: "1px solid #ddd",
              borderRadius: "3px",
              fontSize: "14px",
              color: "#424242",
            }}
          >
            <thead>
              <tr>
                <th style={{ ...headingStyle, width: "16%" }}></th>

                <th style={{ ...headingStyle, width: "20%" }}>
                  Equity delivery
                </th>

                <th style={{ ...headingStyle, width: "21%" }}>
                  Equity intraday
                </th>

                <th style={{ ...headingStyle, width: "21%" }}>
                  F&O - Futures
                </th>

                <th style={{ ...headingStyle, width: "22%" }}>
                  F&O - Options
                </th>
              </tr>
            </thead>

            <tbody>
              {/* Brokerage */}
              <tr>
                <td style={cellStyle}>Brokerage</td>

                <td style={cellStyle}>Zero Brokerage</td>

                <td style={cellStyle}>
                  0.03% or Rs. 20/executed
                  <br />
                  order whichever is lower
                </td>

                <td style={cellStyle}>
                  0.03% or Rs. 20/executed
                  <br />
                  order whichever is lower
                </td>

                <td style={cellStyle}>
                  Flat Rs. 20 per executed order
                </td>
              </tr>

              {/* STT */}
              <tr style={{ backgroundColor: "#f8f8f8" }}>
                <td style={cellStyle}>STT/CTT</td>

                <td style={cellStyle}>0.1% on buy & sell</td>

                <td style={cellStyle}>0.025% on the sell side</td>

                <td style={cellStyle}>0.05% on the sell side</td>

                <td style={cellStyle}>
                  <ul
                    style={{
                      margin: "0",
                      paddingLeft: "20px",
                    }}
                  >
                    <li style={{ marginBottom: "8px" }}>
                      0.15% of the intrinsic value on
                      options that are bought and
                      exercised
                    </li>

                    <li>0.15% on sell side (on premium)</li>
                  </ul>
                </td>
              </tr>

              {/* Transaction Charges */}
              <tr>
                <td style={cellStyle}>
                  Transaction
                  <br />
                  charges
                </td>

                <td style={cellStyle}>
                  NSE: 0.00307%
                  <br />
                  BSE: 0.00375%
                </td>

                <td style={cellStyle}>
                  NSE: 0.00307%
                  <br />
                  BSE: 0.00375%
                </td>

                <td style={cellStyle}>
                  NSE: 0.00183%
                  <br />
                  BSE: 0
                </td>

                <td style={cellStyle}>
                  NSE: 0.03553% (on premium)
                  <br />
                  BSE: 0.0325% (on premium)
                </td>
              </tr>

              {/* GST */}
              <tr style={{ backgroundColor: "#f8f8f8" }}>
                <td style={cellStyle}>GST</td>

                <td style={cellStyle}>
                  18% on (brokerage + SEBI
                  <br />
                  charges + transaction
                  <br />
                  charges)
                </td>

                <td style={cellStyle}>
                  18% on (brokerage + SEBI
                  <br />
                  charges + transaction
                  <br />
                  charges)
                </td>

                <td style={cellStyle}>
                  18% on (brokerage + SEBI
                  <br />
                  charges + transaction
                  <br />
                  charges)
                </td>

                <td style={cellStyle}>
                  18% on (brokerage + SEBI charges
                  <br />
                  + transaction charges)
                </td>
              </tr>

              {/* SEBI Charges */}
              <tr>
                <td style={cellStyle}>SEBI charges</td>

                <td style={cellStyle}>₹10 / crore</td>

                <td style={cellStyle}>₹10 / crore</td>

                <td style={cellStyle}>₹10 / crore</td>

                <td style={cellStyle}>₹10 / crore</td>
              </tr>

              {/* Stamp Charges */}
              <tr style={{ backgroundColor: "#f8f8f8" }}>
                <td style={cellStyle}>Stamp charges</td>

                <td style={cellStyle}>
                  0.015% or ₹1500 / crore on
                  <br />
                  buy side
                </td>

                <td style={cellStyle}>
                  0.003% or ₹300 / crore on
                  <br />
                  buy side
                </td>

                <td style={cellStyle}>
                  0.002% or ₹200 / crore on
                  <br />
                  buy side
                </td>

                <td style={cellStyle}>
                  0.003% or ₹300 / crore on buy side
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Bottom Link */}
        <div
          style={{
            textAlign: "center",
            marginTop: "32px",
            fontSize: "20px",
            marginBottom:"90px"
          }}
        >
          <a
            href="#"
            style={{
              color: "#387ed1",
              textDecoration: "none",
            }}
          >
            Calculate your costs upfront
          </a>{" "}
          using our brokerage calculator
        </div>
      </div>
    </>
  );
}

export default BrokerageCalculator;


