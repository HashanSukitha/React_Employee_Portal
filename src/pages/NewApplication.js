import React from "react";
import cpsLog from "../images/cps-new-logo-1.png";
import ApplicationForm from "../components/NewApplicationForm"


  
const NewApplication = () => {
  return (
    <>

      <div className="EmpProfTopBnner">
          <img src={cpsLog} />  
      </div>
     

      <div className="BodyContainer">
        
        
            <ApplicationForm />
          
            
        
      </div>
    </>
  );
};
  
export default NewApplication;