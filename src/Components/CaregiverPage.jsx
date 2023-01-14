import React, { useState } from "react";
import "../Styles/CaregiverPage.css";
function CaregiverPage() {
  const [click, setClick] = useState(false);


  return (
    <>
      <div className="c-page">
        <div className="g22-card">
          <div className="g22-image-section">
            <img
              className="h-48 w-48 rounded-full"
              src="https://pbs.twimg.com/media/FhC3LvHXkAEMEUZ.png"
              alt="Profile"
            />
          </div>

          <div className="g22-content">
            <div className="flex justify-between items-center ">
              <h3 id="c-name">Name</h3>
            </div>
            {/* <Link to="/blog/blog1"><button id="g-btn">Read More</button></Link> */}
          </div>
        </div>
        <div className="c-det">
          <h2 className="md:text-3xl  pb-4">
            Hurray!You have a pending appointment
          </h2>
          <div className="flex justify-between items-center mt-8 border-b">
            <h3>Name</h3>
          </div>

          <div className="flex justify-between items-center mt-8 border-b">
            <h3>Address </h3>
          </div>
          <div className="flex justify-between items-center mt-8 border-b">
            <h3>Phone Number </h3>
          </div>
        </div>
      </div>
      <div className="c-btn">
        <button onClick={() => setClick(true)} id="acc">
          Accept
        </button>
        <button id="dec">Decline</button>
      </div>
      {click ? (
        <div className="c-btn">
          <button id="acc">Call</button>
          <button id="mes">Message</button>
        </div>
      ) : null}
    </>
  );
}

export default CaregiverPage;
