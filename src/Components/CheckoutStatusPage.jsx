import React, { useEffect, useState } from "react";
import StatusPage from "./StatusPage";

export default function CheckoutstatusPage({ user }) {
  const [caregiver, setCaregiver] = useState([]);
  useEffect(() => {
    fetch(`/caregivers/booked_by_parent/${user.id}`)
      .then((r) => r.json())
      .then((data) => {
        setCaregiver(data);
      });
  }, []);
  
  return (
    <>
      {caregiver.map((bb) => (
        <StatusPage key={bb.id} bb={bb}/>
      ))}
    </>
  );
}
