import React, { useState } from "react";
import "../Styles/CaregiverPage.css";
function CaregiverPage() {
  const [click, setClick] = useState(false);
  return (
    <>
      <div className="c-page">
        <div className="g22-image-section">
          <img
            className="h-48 w-48 rounded-full"
            src="https://pbs.twimg.com/media/FhC3LvHXkAEMEUZ.png"
            alt="Profile"
          />
          <p id="n-page">Name</p>
        </div>
        <div>
          <p>Hurray!!You have a pending appointment</p>
          <p id="p-page">Name</p>
          <p id="p-page">Address</p>
          <p id="p-page">Phone Number</p>
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
