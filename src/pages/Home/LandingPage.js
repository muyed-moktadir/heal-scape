import React from "react";
import doctorp from "../../assets/images/doctorp.png"
import dd from "../../assets/images/dd.gif"

const LandingPage = () => {
  return (
    <>
      <div className="hero min-h-screen bg-base-200 mt-16 z-[-1]">
        <div className="hero-content flex-col lg:flex-row">
          <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
         <img src={dd} class="max-w-sm" alt=""/>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
