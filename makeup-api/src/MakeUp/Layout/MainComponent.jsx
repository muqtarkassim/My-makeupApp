import React from "react"
import { useNavigate } from "react-router-dom";
function MainComponent(){
    const navigate = useNavigate();

    const handleExploreClick = () => {
        // Navigate to the "all products" page
        navigate("list");
      };
    return(
        <div>
      <div>
        {/* Style the h1 tag for makeup styles using Bootstrap classes */}
        <h1 className="display-3 text-uppercase text-center text-danger font-weight-bold">
          Welcome To All Things Beauty
        </h1>
        <button className="btn btn-primary" onClick={handleExploreClick}>
          Explore Now
        </button>
        <p>Your brief description goes here...</p>
       
            </div>
            </div>
    )
}
export default MainComponent;