import React, { useState } from "react";

//INTERNAL IMPORT
import UploadLogo from "../Components/UploadLogo";
import Input from "../Components/Input";
import Button from "../Components/Button";

const TokenCreator = ({
  createERC20,
  shortenAddress,
  setOpenTokenCreator,
  setLoader,
  address,
  connectWallet,
  PINATA_AIP_KEY,
  PINATA_SECRECT_KEY,
}) => {
  const [imageURL, setimageURL] = useState();
  const [TokenCreator, setTokenCreator] = useState({
    name: "",
    symbol: "",
    supply: "",
  }); 
  return (
  <div id={"myModal"} className={"modal"}>
    <div className="modal-content">
      <span onClick={()=> setOpenTokenCreator(false)} className="close">
        &times;
      </span>
      <h2 style={{marginBottom: "1rem"}}>Create Token</h2>

      <UploadLogo
      imageURL = {imageURL}
      setimageURL={setimageURL}
      setLoader={setLoader} 
      PINATA_AIP_KEY={PINATA_AIP_KEY}
      PINATA_SECRECT_KEY={PINATA_SECRECT_KEY}
      />
      <div className="input-Container">
        <Input placeholder={"Name"} handleChange={(e)=> setToken({...token, name: e.target.value})} />
        <Input placeholder={"Supply"} handleChange={(e)=> setToken({...token, supply: e.target.value})} />
      </div>
      <div className="button-box" style={{marginTop: "1rem"}}>
        {
          address ? (
            <Button name="Create Token" handleClick={() => createERC20(token, address, imageURL)}/>
          ) : (
            <Button name="Connect Wallet" handleClick={() => connectWallet()}/>
          )
        }
      </div>
    </div>
  </div>
);
};

export default TokenCreator;
