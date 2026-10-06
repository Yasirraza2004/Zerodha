import { useState } from "react";

function TicketBox({ title, links, icons }) {
  const [open, setOpen] = useState(false);

  const linkStyle = {
    textDecoration: "none",
    color: "#387ed1",
    fontSize: "16px",
  };

  return (
    <div
      style={{
        border: "1px solid #e0e0e0",
        borderRadius: "3px",
        overflow: "hidden",
        marginBottom: "29px",
      }}
    >
      {/* Header */}
      <div
        onClick={() => setOpen(!open)}
        style={{
          height: "55px",
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
          backgroundColor: "#fff",
        }}
      >
        {/* Plus box */}
        <div
          style={{
            width: "68px",
            height: "55px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#f8fbfd",
            borderRight: "1px solid #eee",
          }}
        >
          <i
            class={icons}
            style={{
              color: "#387ed1",
              fontSize: "25px",
            }}
          ></i>
        </div>

        {/* Title */}
        <div
          style={{
            paddingLeft: "16px",
            fontSize: "18px",
            color: "#424242",
            flex: 1,
          }}
        >
          {title}
        </div>

        {/* Arrow */}
        <div
          style={{
            paddingRight: "25px",
            color: "#387ed1",
            fontSize: "20px",
          }}
        >
          <i
            className={`fa-solid ${open ? "fa-angle-up" : "fa-angle-down"}`}
          ></i>
        </div>
      </div>

      {/* Content */}
      <div
        style={{
          maxHeight: open ? "310px" : "0px",
          overflow: "hidden",
          transition: "max-height 0.25s ease",
          borderTop: open ? "1px solid #eee" : "none",
        }}
      >
        <div
          style={{
            padding: "20px 0 25px 70px",
          }}
        >
          <ul
            style={{
              margin: 0,
              paddingLeft: "10px",
              color: "#387ed1",
            }}
          >
            {links.map((link, index) => (
              <li
                key={index}
                style={{
                  marginBottom: index === links.length - 1 ? "0" : "20px",
                }}
              >
                <a href="#" style={linkStyle}>
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TicketBox;