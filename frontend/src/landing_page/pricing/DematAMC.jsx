function DematAMC() {
  return (
    <div className="container mt-5 mb-5">
      <h4 className="mb-4" style={{ marginLeft: "110px" }}>
        Demat AMC (Annual Maintenance Charge)
      </h4>

      <div
        style={{
          display: "inline-block",
          backgroundColor: "#f5f9fc",
          borderLeft: "3px solid #387ed1",
          padding: "6px 16px",
          fontSize: "17.5px",
          color: "#424242",
          marginLeft: "110px",
          marginTop: "15px",
        }}
      >
        Free for first year*
      </div>
      <p style={{ fontSize: "12.5px", marginLeft: "110px", marginTop: "29px" }}>
        From second year onwards, for BSDA accounts:
      </p>

      <div className="table-responsive mt-2">
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
              <th style={{ width: "25%", fontWeight: "400", padding:"15px" }}>
                Value of holdings
              </th>
              <th style={{ width: "50%", fontWeight: "400", paddingBottom:"11px" }}>AMC</th>
            </tr>
          </thead>

          <tr>
            <td style={{ padding: "17px" }}>Up to ₹4 lakh</td>
            <span
              style={{
                display: "inline-block",
                backgroundColor: "#3aaa55",
                color: "white",
                fontSize: "11px",
                fontWeight: "600",
                padding: "4px 12px",
                borderRadius: "2px",
                marginTop:"18px"
              }}
            >
              FREE
            </span>
          </tr>

          <tr style={{ lineHeight: "2px", backgroundColor: "#f8f8f8" }}>
            <td style={{ padding: "17px" }}>₹4 lakh – ₹10 lakh</td>
            <td>₹100 per year + 18% GST, charged quarterly</td>
          </tr>

          <tr>
            <td style={{ padding: "17px" }}>Above ₹10 lakh</td>
            <td>₹300 per year + 18% GST, charged quarterly</td>
          </tr>
        </table>
        <p style={{ fontSize: "12.5px", marginLeft: "110px", marginTop: "20px" }}>
          For a non-BSDA account, AMC is ₹300 per year + 18% GST, regardless of
          holdings value, charged quarterly.
        </p>
        <p style={{ fontSize: "12.5px", marginLeft: "110px", marginTop: "20px" }}>
          To learn more about BSDA, click here. To learn more about AMC, click
          here.
        </p>
        <p
          className="mb-4"
          style={{ fontSize: "12.5px", marginLeft: "110px", marginTop: "20px" }}
        >
          *Resident individual accounts only.
        </p>
      </div>
    </div>
  );
}

export default DematAMC;
