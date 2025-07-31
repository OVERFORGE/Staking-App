import React, { useEffect, useState } from "react";
import ButtonCmp from "./RegularComp/ButtonCmp";
import Title from "./RegularComp/Title";
import InputField from "./RegularComp/InputField";
import ClickButton from "./RegularComp/ClickButton";

import {
  UPDATE_TOKEN,
  UPDATE_TOKEN_PRICE,
  TOKEN_WITHDRAW,
} from "../../Context/index";
import { useAccount } from "wagmi";

const CURRENCY = process.env.NEXT_PUBLIC_CURRENCY;
const ICOToken = ({ setLoader }) => {
  const { address } = useAccount();
  const [tokenDetails, setTokenDetails] = useState();
  const [updateToken, setUpdateToken] = useState();
  const [updatePrice, setUpdatePrice] = useState();

  useEffect(() => {
    const loadToken = async () => {
      const token = await LOAD_TOKEN_ICO();
      setTokenDetails(token);
      console.log(token);
    };
    loadToken();
  }, [address]);

  const CALLING_FUNCTION_UPDATE_TOKEN = async (updateToken) => {
    setLoader(true);
    console.log(updateToken);
    const receipt = await UPDATE_TOKEN(updateToken);
    if (receipt) {
      console.log(receipt);
      setLoader(false);
      window.location.reload();
    }
    setLoader(false);
  };

  const CALLING_FUNCTION_UPDATE_PRICE = async (updatePrice) => {
    setLoader(true);
    console.log(updatePrice);
    const receipt = await UPDATE_TOKEN_PRICE(updatePrice);
    if (receipt) {
      console.log(receipt);
      setLoader(false);
      window.location.reload();
    }
    setLoader(false);
  };

  const CALLING_FUNCTION_WITHDRAW = async () => {
    setLoader(true);

    const receipt = await TOKEN_WITHDRAW();
    if (receipt) {
      console.log(receipt);
      setLoader(false);
      window.location.reload();
    }
    setLoader(false);
  };

  return (
    <div className="tab-pane" id="tab-6" role="tabpanel">
      <div className="row">
        <div className="col-12">
          <div className="profile">
            <ul
              className="nav nav-tabs section__tabs section__tabs--left"
              id="section__profile-tabs2"
              role="tablist"
            >
              <ButtonCmp
                name={"Update Token"}
                tab={"f9"}
                styleClass={"active"}
              />
              <ButtonCmp name={"Update Token Price"} tab={"f10"} />
              <ButtonCmp name={"Withdraw Token"} tab={"f11"} />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ICOToken;
