import React, { useState, useEffect } from "react";
import Card from "./Card";
import { useParams } from "react-router-dom";

export default function CardItem() {
  const [nanny, setCaregiver] = useState({});
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);
  const [images, setImages]=useState({})
  const [status, setStatus]=useState(null)
  useEffect(() => {
    fetch(`/caregivers/${id}`)
      .then((r) => r.json())
      .then((data) => {
        console.log(data);
        setCaregiver(data);
        setReviews(data.reviews);
        setImages(data.image)
        setStatus(data.is_booked)
      });
  }, []);

  const r = reviews.map((rating) => rating.ratings);

  return (
    <>
      <Card nanny={nanny} r={r} images={images}/>
    </>
  );
}
