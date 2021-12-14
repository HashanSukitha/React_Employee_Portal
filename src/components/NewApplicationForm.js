import React  from 'react';
import profilePic from "../images/defaultProfilePic.png";



const NewApplicationForm = () =>{

    return(     
    <>
        <div className="fields">
            <div className="field" id="profPicField">
                <label className="fieldName">Picture</label>
                <img className="profilePic" src={profilePic} />
                <button className="editProfPicBtn">edit</button>
            </div>

            <div className="field">
                <babel className="fieldName">First Name</babel>
                <input type="text"/>
            </div>

            <div className="field">
                <babel className="fieldName">Last Name</babel>
                <input type="text"/>
            </div>

            <div className="field">
                <babel className="fieldName">Address</babel>
                <input type="text"/>
            </div>

            <div className="field">
                <babel className="fieldName">E-mail Address</babel>
                <input type="text"/>
            </div>

            <div className="field">
                <babel className="fieldName">Phone Number</babel>
                <input type="text"/>
            </div>

            <div className="field">
                <babel className="fieldName">Country</babel>
                <input type="text"/>
            </div>

            <div className="field">
                <babel className="questionField">Are you a Permenant Resident or Cetizen in Australia?</babel> 
                <div className="questionFieldAnswers">
                    <input type="radio" value="Yes" id='Yes' ></input>
                    <label for="Yes">Yes</label>
                    <input type="radio" value="No" id='No'></input>
                    <label for="No">No</label>
                </div>
                
            </div>
        </div>
    </>
    );
};




export default NewApplicationForm;