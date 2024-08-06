import React, {useState, useEffect} from "react";
import toast from "react-hot-toast";

//INTERNAL IMPORT
import { StateContextProvider, useStateContext } from "../Context/index";
import Header from "../components/Header";
import Input from "../components/Input";
import Button from "../components/Button";
import Table from "../components/Table";
import PreSaleList from "../components/PreSaleList";
import UploadLogo from "../components/UploadLogo";
import Loader from "../components/Loader";
import Footer from "../components/Footer";
import ICOMarket from "../components/ICOMarket";
import TokenCreator from "../components/TokenCreator";
import TokenHistory from "../components/TokenHistory";
import Marketplace from "../components/Marketplace";
import CreateICO from "../components/CreateICO";
import Card from "../components/Card";
import BuyToken from "../components/BuyToken";
import WidthdrawToken from "../components/WidthdrawToken";
import TokenTransfer from "../components/TokenTransfer";
import Head from "next/head";

const index = () => {
  const { widthdrawToken, 
        transferTokens, 
        buyToken, 
        createICOSALE, 
        GET_ALL_USER_ICOSALE_TOKEN, 
        GET_ALL_ICOSALE_TOKEN,
        createERC20,
        connectWallet,
        PINATA_API_KEY,
        PINATA_SECRECT_KEY,
        ICO_MARKETPLACE_ADDRESS,
        openBuyToken,
        setOpenBuyToken,
        openWidthdraw, 
        setOpenWidthdrawToken,
        openTransferToken, 
        setOpenTransferToken,
        openTokenCreator, 
        setOpenTokenCreator,
        openCreateICO, 
        setOpenCreateICO,
        address, 
        setAddress,
        accountBalance,
        loader, 
        setLoader,
        currency,
        shortenAddress,
      } = useStateContext();

      const notifySuccess = (msg) => toast.success(msg, {duration: 200});
      const notifyError = (msg) => toast.error(msg, {duration: 200});

      const [allICOs, setAllICOs] = useState();
      const [allUserIcos, setAllUserIcos] = useState();

      //COMPONENT OPEN
      const [openAllICO, setOpenAllICO] = useState(false);
      const [openTokenHistory, setOpenTokenHistory] = useState(false);
      const [openICOMarketplace, setOpenICOMarketplace] = useState(false);

      //BUY ICO TOKEN
      const [buyIco, setBuyIco] = useState();

      const copyAddress = () => {
        navigator.clipboard.writeText(ICO_MARKETPLACE_ADDRESS);
        notifySuccess("Copied Succesfully");
      };

  return (
  <div>
    <Header accountBalance={accountBalance}
    setAddress={setAddress} 
    address={address}
    connectWallet={connectWallet}
    ICO_MARKETPLACE_ADDRESS={ICO_MARKETPLACE_ADDRESS}
    shortenAddress={shortenAddress}
    setOpenAllICO={setOpenAllICO}
    openAllICO={openAllICO}
    setOpenTokenCreator={setOpenTokenCreator}
    openTokenCreator={openTokenCreator}
    setOpenTokenHistory={setOpenTokenHistory}
    openTokenHistory={openTokenHistory}
    setOpenICOMarketplace={setOpenICOMarketplace}
    openICOMarketplace={openICOMarketplace}
    />
    {openAllICO && <ICOMarket />}
    {openTokenCreator && (
      <TokenCreator 
      createERC20={createERC20} 
      shortenAddress={shortenAddress}
      setOpenTokenCreator={setOpenTokenCreator}
      setLoader={setLoader}
      address={address}
      connectWallet={connectWallet}
      PINATA_AIP_KEY={PINATA_API_KEY}
      PINATA_SECRECT_KEY={PINATA_SECRECT_KEY}
      />
    )
  }
    {openTokenHistory && <TokenHistory shortenAddress={shortenAddress} setOpenTokenHistory={setOpenTokenHistory} />}
    {openCreateICO && <CreateICO />}
    {openICOMarketplace && <Marketplace />}
    {openBuyToken && <BuyToken />}
    {openTransferToken && <TokenTransfer />}
    {openWidthdraw && <WidthdrawToken />}

    <Footer />
    {loader && <Loader />}
  </div>
  );
};

export default index;
