import React from "react";
import cpsLog from "../images/cps-new-logo-1.png";


const EmployeeProfile = () => {
  return (
    <>

      <div className="TopRightContainer">
          <ul>
            <li>My Profile</li>
            <li>Log Out</li>
          </ul>
      </div>
      <div className="EmpProfTopBnner">
          <img src={cpsLog} />  
      </div>
      <div className="EmpProfMenuBar">
        <ul>
          <li>Home</li>
          <li>Apply Leaves</li>
          <li>Generate Docs</li>
          <li>Courses</li>
          <li>Pay Sheets</li>
        </ul>
      </div>

      <div className="BodyContainer">
        
      </div>
    </>
  );
};
  
export default EmployeeProfile;