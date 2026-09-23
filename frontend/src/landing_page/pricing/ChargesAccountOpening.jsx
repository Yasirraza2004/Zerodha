function ChargesAccountOpening() {
  return (
    <div className="container mt-5 mb-5">
      <h4 className="mb-4" style={{ marginLeft: "110px" }}>
        Charges for account opening
      </h4>

      <div className="table-responsive">
        <table
          className="table ms-auto me-auto"
          style={{
            border: "1px solid #ddd",
            fontSize: "16px",
            maxWidth: "1080px",
            lineHeight: "11px"
          }}
        >
          <thead>
            <tr>
              <th style={{ width: "25%", padding:"19px", fontWeight: "400" }}>
                Type of account
              </th>
              <th style={{ width: "35%", fontWeight: "400", paddingLeft:"225px", paddingBottom:"20px"}}>Charges</th>
            </tr>
          </thead>

          <tr>
            <td style={{ padding: "19px" }}>Individual account</td>
            <span
              style={{
                display: "inline-block",
                backgroundColor: "#3aaa55",
                color: "white",
                fontSize: "11px",
                fontWeight: "600",
                padding: "5px 12px",
                borderRadius: "2px",
                marginTop: "12px",
                marginLeft:"230px"
              }}
            >
              FREE
            </span>
          </tr>

          <tr style={{backgroundColor: "#f8f8f8" }}>
            <td style={{ padding: "19px" }}>Minor account</td>
            <span
              style={{
                display: "inline-block",
                backgroundColor: "#3aaa55",
                color: "white",
                fontSize: "11px",
                fontWeight: "600",
                padding: "5px 12px",
                borderRadius: "2px",
                marginTop: "12px",
                marginLeft:"230px"
              }}
            >
              FREE
            </span>
          </tr>

          <tr>
            <td style={{ padding: "19px" }}>NRI account</td>
            <td style={{paddingLeft:"230px"}}>₹ 500</td>
          </tr>

          <tr style={{backgroundColor: "#f8f8f8" }}>
            <td style={{ padding: "19px" }}>HUF account</td>
            <span
              style={{
                display: "inline-block",
                backgroundColor: "#3aaa55",
                color: "white",
                fontSize: "11px",
                fontWeight: "600",
                padding: "5px 12px",
                borderRadius: "2px",
                marginTop: "12px",
                marginLeft:"230px"
              }}
            >
              FREE
            </span>
            <span style={{marginLeft:"4px"}}>(online) / ₹ 500 (offline)</span>
          </tr>

          <tr>
            <td style={{ padding: "19px" }}>
              Partnership, LLP, and Corporate accounts (offline only)
            </td>
            <td style={{paddingLeft:"230px"}}>₹ 500</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default ChargesAccountOpening;
