import React from "react";

import { SHORTEN_ADDRESS, copyAddress } from "../Context";
import { FaRegCopy } from "./ReactICON";
const Notification = ({ poolDetails, page }) => {
  const notificationArray = poolDetails?.notifications ?? [];

  return (
    <div className="section">
      <div className="container">
        <div className="row">
          {page != "activity" && (
            <div className="col-12 col-md-10 offset-md-1 col-lg-6 offset-lg-2 col-xl-6 offset-xl-3">
              <div className="section__title">
                <h2>Active live</h2>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Omnis, cumque provident. Molestias mollitia sequi cum error
                  numquam, velit nihil suscipit perspiciatis inventore quae
                  necessitatibus ratione explicabo eaque quia voluptatem ullam.
                </p>
              </div>
            </div>
          )}
          <div className="col-12">
            <div
              className="deals scrollable-div"
              style={{
                overflowX: "scroll",
              }}
            >
              <table className="deals__table">
                <thead>
                  <tr>
                    <th>TypeOf</th>
                    <th>Token</th>
                    <th>User</th>
                    <th>Pool ID</th>
                    <th>Amount</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {notificationArray
                    .map((notify, index) => (
                      <tr key={index}>
                        <td>
                          <div className="deals__text">{notify?.typeOf}</div>
                        </td>
                        <td>
                          <div className="deals__exchange">
                            <img src="img/exchanges/ethereum.png" alt="" />
                            <span className="green">
                              {poolDetails?.rewardToken.symbol}{" "}
                              {poolDetails?.rewardToken.name}
                            </span>
                            <span className="red">
                              &nbsp; &nbsp;{" "}
                              <FaRegCopy
                                onClick={() =>
                                  copyAddress(poolDetails?.rewardToken.address)
                                }
                              />
                            </span>
                          </div>
                        </td>
                        <td>
                          <div className="deals__text deals__text--green">
                            {SHORTEN_ADDRESS(notify.user)} &nbsp; &nbsp;{" "}
                            <FaRegCopy
                              onClick={() => copyAddress(notify.user)}
                            />
                          </div>
                        </td>
                        <td>
                          <div className="deals__text">
                            {`#00-${notify?.poolID}`}
                          </div>
                        </td>
                        <td>
                          <div className="deals__text deals__text--sell">
                            {`${notify?.amount}`}{" "}
                            {poolDetails?.rewardToken.symbol}
                          </div>
                        </td>
                        <td>
                          <div className="deals__text deals__text--sell">
                            {`#00-${notify?.timestamp}`}
                          </div>
                        </td>
                      </tr>
                    ))
                    .slice(0, 10)}
                </tbody>
              </table>
            </div>
          </div>
          {page != "activity" && (
            <div className="col-12">
              <div className="section__btns">
                <a href="/activities" className="section__btn">
                  View all activities
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Notification;
