function LeftSection({
  imageURL,
  imageStyle,
  productName,
  productNameStyle,
  productDescription,
  productDescriptionStyle,
  link1,
  link2,
}) {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <img src={imageURL} style={imageStyle} />
          </div>

          <div
            className="col-6 mt-5"
            style={{ paddingLeft: "190px", lineHeight: "23px" }}
          >
            <h4 className="mb-3" style={productNameStyle}>{productName}</h4>
            <p style={productDescriptionStyle}>{productDescription}</p>
            <div>
                {link1}
                {link2}
            </div>

            <div className="mt-4">
              <a href="#">
                <img src="media/images/googlePlayBadge.svg" style={{ width: "30%"}}/>
              </a>
              <a href="#">
                <img
                  src="media/images/appstoreBadge.svg"
                  style={{ marginLeft: "20px", width: "27%" }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LeftSection;
