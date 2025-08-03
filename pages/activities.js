import React, { useEffect, useState } from "react";
import {
  Header,
  Footer,
  Loader,
  ICOSale,
  Statistics,
  Notification,
} from "../Components/index";

import { CONTRACT_DATA } from "../Context/index";
import { useAccount } from "wagmi";
const activities = () => {
  const { address } = useAccount();
  const [loader, setLoader] = useState(false);
  const [poolDetails, setPoolDetails] = useState();
  const LOAD_DATA = async () => {
    if (address) {
      console.log(address);
      setLoader(true);

      const data = await CONTRACT_DATA(address);

      setPoolDetails(data);

      setLoader(false);
    }
  };

  useEffect(() => {
    LOAD_DATA();
  }, [address]);
  return (
    <>
      <Header page={"activity"} />
      <div className="new-margin"></div>
      <Statistics poolDetails={poolDetails} />
      <Notification page={"activity"} poolDetails={poolDetails} />

      <Footer />
      <ICOSale setLoader={setLoader} />
      {loader && <setLoader />}
    </>
  );
};

export default activities;
