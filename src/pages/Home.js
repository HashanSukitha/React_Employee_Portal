import React from "react";
import Login from "../components/Login";
import ApplyButton from "../components/ApplyButton";
import cpsLog from "../images/cps-new-logo-1.png";

  
const Home = () => {
  return (
    <><div className="topBnner">
          <img src={cpsLog} />
          <h1>This web site is for demonstration perposes only</h1>
      </div><div className="Container">


              <div className="leftColumn">

                  <ApplyButton />

              </div>

              <div className="rightColumn">

                  <Login />

              </div>



          </div></>
  );
};
  
export default Home;