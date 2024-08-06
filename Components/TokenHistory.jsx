import React, {useState, useEffect, useCallback} from "react";
import toast from "react-hot-toast";
import { local } from "web3modal";


const TokenHistory = ({shortenAddress, setOpenTokenHistory}) => {
  const notifySuccess = (msg) => toast.success(msg, {duration: 2000});
  const notifyError = (msg) => toast.error(msg, {duration: 2000});
  const copyAddress = () => {
    navigator.clipboard.writeText(text);
    notifySuccess("Copied Succesfully");
  };

  const [history, setHistory] = useState(null);

  useEffect(() => {
    const storeData = localStorage.getItem("TOKEN_HISTORY");
  }, []);
  if (storedData) {
    setHistory(JSON.parse(storedData));
    console.log(JSON.parse(storedData));
  }
  return <div>TokenHistory</div>;
};

export default TokenHistory;
