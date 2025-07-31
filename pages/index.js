import React from "react";
import { useAccount } from "wagmi";

import {
  Header,
  HeroSection,
  Footer,
  Pools,
  PoolsModel,
  WithdrawModel,
  Withdraw,
  Partners,
  Statistics,
  Token,
  Loader,
  Notification,
  ICOSale,
  Contact,
  Ask,
} from "../Components/index";

import {
  CONTRACT_DATA,
  deposit,
  withdraw,
  claimReward,
  addTokenMetaMask,
} from "../Context/index";
const index = () => {
  return (
    <>
      <Header />
      <Footer />
    </>
  );
};

export default index;
