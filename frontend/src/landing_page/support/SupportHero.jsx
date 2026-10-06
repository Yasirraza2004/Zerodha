function SupportHero() {
  return (
    <div
      style={{
        backgroundColor: "#f5f5f5",
        padding: "50px",
      }}
    >
      <div className="container">
        {/* Heading + My tickets */}
        <div className="d-flex justify-content-between align-items-center mb-5">
          <h1
            style={{
              fontSize: "37px",
              fontWeight: "700",
              color: "#424242",
              marginTop: "-40px",
              marginLeft:"10px"
            }}
          >
            Support Portal
          </h1>

          <button
            className="btn"
            style={{
              backgroundColor: "#387ed1",
              color: "white",
              fontSize: "17px",
              padding: "7px 15px",
              borderRadius: "4px",
              marginRight:"20px",
              marginTop:"-10px",
              marginBottom:"30px"
            }}
          >
            My tickets
          </button>
        </div>

        {/* Search box */}
        <div
          className="d-flex align-items-center"
          style={{
            width:"99%",
            height: "60px",
            backgroundColor: "#fff",
            border: "1px solid #d9e2ec",
            borderRadius: "4px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
            padding: "0 28px",
            marginTop:"-47px"
          }}
        >
          <i
            className="fa-solid fa-magnifying-glass"
            style={{
              fontSize: "20px",
              color: "#555",
              marginRight: "20px",
            }}
          ></i>

          <input
            type="text"
            placeholder="Eg: How do I open my account, How do i activate F&O..."
            style={{
              border: "none",
              outline: "none",
              width: "100%",
              fontSize: "18px",
              color: "#555",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default SupportHero;