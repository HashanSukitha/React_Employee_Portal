import React  from 'react';
import { useHistory } from "react-router-dom";





const Button = () =>{

    const history = useHistory();
    const onApplyClick = () => {

        //<Link to="/NewApplication">
        //</Link>
        history.push("/NewApplication")
        
     }

    return(
        <div className="ApplyButtonWrapper">
          <h2>New Applicents</h2>
            
                <button             
                    className='btn'
                    onClick={onApplyClick}>Apply Here
                </button> 
             
        </div>

    )
}

Button.defaultProps = {
    color:'blue'
}


export default Button