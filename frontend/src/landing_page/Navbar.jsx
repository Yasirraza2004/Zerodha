import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar sticky-top">
      <div className="container">
        <div className="nav-row">
          <div className="col-6">
            {/* Logo */}
            <div className="logo">
              <a href="/">
                <img src="/media/images/logo.svg" alt="Zerodha logo" />
              </a>
            </div>
          </div>

          <div className="col-6">
            {/* Desktop Links + Menu */}
            <div className="nav-links ms-auto">
              <a href="/signup">Signup</a>
              <a href="/about">About</a>
              <a href="/product">Products</a>
              <a href="/pricing">Pricing</a>
              <a href="/support">Support</a>

              {/* Hamburger */}
              <button
                className="hamburger ms-4"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                ☰
              </button>

              {/* Collapsible menu */}
              {menuOpen && (
                <div className="hamburger-menu">
                  <div className="hamburger-top">
                    <a href="/login">
                      <img src="/media/images/kite-logo.svg" />
                      <h4>Kite</h4>
                      <p>Trading platform</p>
                    </a>

                    <div>
                      <img src="/media/images/console.svg" />
                      <h4>Console</h4>
                      <p>Backoffice</p>
                    </div>

                    <div>
                      <img src="/media/images/kite-connect.svg" />
                      <h4>Kite Connect</h4>
                      <p>Trading APIs</p>
                    </div>

                    <div>
                      <img src="/media/images/coin.svg" />
                      <h4>Coin</h4>
                      <p>Mutual funds</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
