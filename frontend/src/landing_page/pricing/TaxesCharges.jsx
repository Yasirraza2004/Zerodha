function TaxesCharges() {
  return (
    <>
      <div
        className="container"
        style={{
          maxWidth: "1110px",
          marginTop: "60px",
          marginBottom: "60px",
        }}
      >
        <div className="row">
          <h4 style={{ marginBottom: "37px" }}>Charges explained</h4>
          <div className="col-6" style={{ alignItems: "left" }}>
            <p style={{ fontSize: "17px" }}>
              Securities/Commodities transaction tax
            </p>

            <p style={{ fontSize: "12.5px" }}>
              Tax by the government when transacting on the exchanges. Charged
              as above on both buy <br />
              and sell sides when trading equity delivery. Charged only on
              selling side when trading <br /> intraday or on F&O.
            </p>

            <p style={{ fontSize: "12.5px" }}>
              When trading at Zerodha, STT/CTT can be a lot more than the
              brokerage we charge. <br /> Important to keep a tab.
            </p>

            <p style={{ fontSize: "17px" }}>Transaction/Turnover Charges </p>

            <p style={{ fontSize: "12.5px" }}>
              Charged by exchanges (NSE, BSE, MCX) on the value of your
              transactions.
            </p>
            <p style={{ fontSize: "12.5px" }}>
              BSE has revised transaction charges in XC, XD, XT, Z and ZP groups
              to ₹10,000 per crore <br /> w.e.f 01.01.2016. (XC and XD groups
              have been merged into a new group X w.e.f 01.12.2017)
            </p>
            <p style={{ fontSize: "12.5px" }}>
              BSE has revised transaction charges in SS and ST groups to
              ₹1,00,000 per crore of gross <br /> turnover.
            </p>
            <p style={{ fontSize: "12.5px" }}>
              BSE has revised transaction charges for group A, B and other non
              exclusive scrips (non- <br />
              exclusive scrips from group E, F, FC, G, GC, W, T) at ₹375 per
              crore of turnover on flat rate <br /> basis w.e.f. December 1,
              2022.
            </p>
            <p style={{ fontSize: "12.5px" }}>
              BSE has revised transaction charges in M, MT, TS and MS groups to
              ₹275 per crore of gross <br /> turnover.
            </p>

            <p style={{ fontSize: "17px" }}>Call & trade</p>
            <p style={{ fontSize: "12.5px" }}>
              Additional charges of ₹50 per order for orders placed through a
              dealer at Zerodha including <br /> auto square off orders.
            </p>

            <p style={{ fontSize: "17px" }}>Stamp charges</p>
            <p style={{ fontSize: "12.5px" }}>
              Stamp charges by the Government of India as per the Indian Stamp
              Act of 1899 for <br /> transacting in instruments on the stock
              exchanges and depositories.
            </p>

            <p style={{ fontSize: "17px" }}>NRI brokerage charges</p>
            <p style={{ fontSize: "12.5px" }}>
              <ul>
                <li>
                  For a non-PIS account, 0.5% or ₹50 per executed order for
                  equity and F&O (whichever is <br /> lower).
                </li>
                <li>
                  For a PIS account, 0.5% or ₹200 per executed order for equity
                  (whichever is lower).
                </li>
                <li>
                  ₹500 + GST as yearly account maintenance charges (AMC)
                  charges.
                </li>
              </ul>
            </p>

            <p style={{ fontSize: "17px" }}>Account with debit balance</p>
            <p style={{ fontSize: "12.5px" }}>
              If the account is in debit balance, any order placed will be
              charged ₹40 per executed order instead of ₹20 per <br />
              executed order.
            </p>

            <p style={{ fontSize: "17px" }}>
              Charges for Investor's Protection Fund Trust (IPFT) by NSE
            </p>
            <p style={{ fontSize: "12.5px" }}>
              <ul>
                <li>
                  Equity and Futures - ₹0.01 per crore + GST of the traded
                  value.
                </li>
                <li>
                  Options - ₹0.01 per crore + GST traded value (premium value).
                </li>
                <li>
                  Currency - ₹0.05 per lakh + GST of turnover for Futures and ₹2
                  per lakh + GST of <br /> premium for Options.
                </li>
              </ul>
            </p>

            <p style={{ fontSize: "17px" }}>Margin Trading Facility (MTF)</p>
            <p style={{ fontSize: "12.5px" }}>
              <ul>
                <li>
                  MTF Interest: 0.04% per day (₹40 per lakh) on the funded
                  amount. The <br />
                  interest is applied <br /> from T+1 day until the day MTF
                  stocks are sold.
                </li>
                <li>
                  MTF Brokerage: 0.3% or Rs. 20/executed order, whichever is
                  lower.
                </li>
                <li>
                  MTF pledge charge: ₹15 + GST per pledge and unpledge request
                  per ISIN.
                </li>
              </ul>
            </p>
          </div>

          <div className="col-6">
            <p style={{ fontSize: "17px" }}>GST</p>
            <p style={{ fontSize: "12.5px" }}>
              Tax levied by the government on the services rendered. 18% of (
              brokerage + SEBI charges <br />+ transaction charges)
            </p>

            <p style={{ fontSize: "17px" }}>SEBI Charges</p>
            <p style={{ fontSize: "12.5px" }}>
              Charged at ₹10 per crore + GST by Securities and Exchange Board of
              India for regulating the <br /> markets.
            </p>

            <p style={{ fontSize: "17px" }}>
              DP (Depository participant) charges
            </p>
            <p style={{ fontSize: "12.5px" }}>
              ₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST) is
              charged on the trading <br /> account ledger when stocks are sold,
              irrespective of quantity.
            </p>
            <p style={{ fontSize: "12.5px" }}>
              Female demat account holders (as first holder) will enjoy a
              discount of ₹0.25 per transaction <br /> on the CDSL fee.
            </p>
            <p style={{ fontSize: "12.5px" }}>
              Debit transactions of mutual funds & bonds get an additional
              discount of ₹0.25 on the CDSL <br /> fee.
            </p>

            <p style={{ fontSize: "17px" }}>Pledging charges</p>
            <p style={{ fontSize: "12.5px" }}>
              ₹30 + GST per pledge request per ISIN.
            </p>

            <p style={{ fontSize: "17px" }}>
              AMC (Account maintenance charges)
            </p>
            <p style={{ fontSize: "12.5px" }}>
              Free for the first year on all new resident individual accounts.
            </p>
            <p style={{ fontSize: "12.5px" }}>
              For BSDA demat account: Zero charges if the holding value is less
              than ₹4,00,000. To learn <br /> more about BSDA
            </p>
            <p style={{ fontSize: "12.5px" }}>
              For non-BSDA demat accounts: ₹300/year + 18% GST charged quarterly
              (90 days). To learn <br /> more about AMC
            </p>

            <p style={{ fontSize: "17px" }}>Corporate action order charges</p>
            <p style={{ fontSize: "12.5px" }}>
              ₹20 plus GST will be charged for OFS / buyback / takeover /
              delisting orders placed through <br /> Console.
            </p>

            <p style={{ fontSize: "17px" }}>Off-market transfer charges</p>
            <p style={{ fontSize: "12.5px" }}>₹25 per transaction.</p>

            <p style={{ fontSize: "12.5px" }}>Physical CMR request</p>
            <p style={{ fontSize: "12.5px" }}>
              First CMR request is free. ₹20 + ₹100 (courier charge) + 18% GST
              for subsequent requests.
            </p>

            <p style={{ fontSize: "17px" }}>Payment gateway charges</p>
            <p style={{ fontSize: "12.5px" }}>
              ₹9 + GST (Not levied on transfers done via UPI)
            </p>

            <p style={{ fontSize: "17px" }}>Delayed Payment Charges</p>
            <p style={{ fontSize: "12.5px" }}>
              Interest is levied at 18% a year or 0.05% per day on the debit
              balance in your trading <br />
              account. Learn more.
            </p>

            <p style={{ fontSize: "17px" }}>
              Trading using 3-in-1 account with block functionality
            </p>
            <p style={{ fontSize: "12.5px" }}>
              <ul>
                <li>Delivery & MTF Brokerage: 0.5% per executed order.</li>
                <li>Intraday Brokerage: 0.05% per executed order.</li>
              </ul>
            </p>
          </div>
          <p style={{ fontSize: "17px", marginTop:"15px" }}>Disclaimer</p>
          <p style={{ fontSize: "12.5px" }}>
            {" "}
            For Delivery based trades, a minimum of ₹0.01 will be charged per
            contract note. Clients who opt to receive physical contract notes
            will be charged ₹20 per contract note plus courier charges. <br />
            Brokerage will not exceed the rates specified by SEBI and the
            exchanges. All statutory and regulatory charges will be levied at
            actuals. Brokerage is also charged on expired, exercised, and <br />
            assigned options contracts. Free investments are available only for
            our retail individual clients. Companies, Partnerships, Trusts, and
            HUFs need to pay 0.1% or ₹20 (whichever is less) as delivery <br />{" "}
            brokerage. A brokerage of 0.25% of the contract value will be
            charged for contracts where physical delivery happens. For netted
            off positions in physically settled contracts, a brokerage of 0.1%{" "}
            <br /> will be charged.
          </p>
        </div>
      </div>
    </>
  );
}

export default TaxesCharges;
