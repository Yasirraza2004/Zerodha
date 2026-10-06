function RightSection({
  imageURL,
  imageStyle,
  productName,
  productNameStyle,
  productDescription,
  productDescriptionStyle,
  link1,
}) {
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div
            className="col-5 mt-5 pt-5"
            style={productDescriptionStyle}>
            <h4 className="mb-3" style={productNameStyle}>{productName}</h4>
            <p style={{ fontSize: "19px" }}>{productDescription}</p>
            {link1}
          </div>

          <div className="col-7">
            <img src={imageURL} style={imageStyle} />
          </div>
        </div>
      </div>
    </>
  );
}

export default RightSection;
