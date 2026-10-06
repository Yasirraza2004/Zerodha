import { createContext, useState } from "react";

import BuyActionWindow from "./BuyActionWindow";
// import SellActionWindow from "./SellActionWindow";

const GeneralContext = createContext({
  openBuyWindow:  () => {},
  closeBuyWindow: () => {},
  // openSellWindow: () => {},
  // closeSellWindow: () => {},
});

export const GeneralContextProvider = (props) => {
  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  // const [isSellWindowOpen, setIsSellWindowOpen] = useState(false);
  const [selectedStockUID, setSelectedStockUID] = useState("");

  const handleOpenBuyWindow = (uid) => {
    setIsBuyWindowOpen(true);
    setSelectedStockUID(uid);
  };

  const handleCloseBuyWindow = () => {
    setIsBuyWindowOpen(false);
    setSelectedStockUID("");
  };

  // const handleOpenSellWindow = (uid) => {
  //   setIsSellWindowOpen(true);
  //   setSelectedStockUID(uid);
  // };

  // const handleCloseSellWindow = () => {
  //   setIsSellWindowOpen(false);
  // }
  

  const [refresh, setRefresh] = useState(false);

  const handleRefresh = () => {
  setRefresh((prev) => !prev);
};

  return (
    <GeneralContext.Provider
      value={{
        openBuyWindow: handleOpenBuyWindow,
        closeBuyWindow: handleCloseBuyWindow,
        // openSellWindow: handleOpenSellWindow,
        // closeSellWindow: handleCloseSellWindow,
        refresh,
        handleRefresh,
      }}
    >
      {props.children}
      {isBuyWindowOpen && <BuyActionWindow uid={selectedStockUID} />}
      {/* {isSellWindowOpen && <SellActionWindow uid={selectedStockUID} />} */}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;