import React, { useState} from "react";
import { Link} from "react-router-dom";
import { StarIcon } from "@heroicons/react/20/solid";
import "../Styles/Cards.css";
import "../Styles/TestFile.css";

export default function AvailableNannys({ data }) {
  const [isShown, setIsShown] = useState(false);

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  function favouritenanny(data) {
    fetch(`http://localhost:3000/favouriteNannys`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        name: data.name,
        nannyLocation: data.nannyLocation,
        rating: data.rating,
        nannyPrice: data.nannyPrice,
        nanny_url: data.nanny_url,
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((err) => console.error(err.message));
  }


    const reviews = data.reviews.map((rating) => rating.ratings);
    const individualReviews =
      reviews.reduce((a, b) => a + b, 0) / reviews.length;
    return (
      <div
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
        className="bg-gray-900 h-auto"
      >
        <div className="lg:flex flex-col md:flex justify-center h-fill mb-10">
          <div className="h-64 w-full">
            <figure className="snip0016">
              <img
                className=" lg:h-64 lg:w-full lg:max-w-full md:h-48 md:w-full"
                src={data.image.image1}
                alt="Image_not_found"
              />
              <figcaption>
                <h2>
                  <div></div>
                  <span>{data.location.city}</span>
                  <h3 className="text-center text-2xl">{data.username}</h3>
                </h2>
                <p>
                  At things that don't make sense, we couldn't react to a lot of
                  life.
                </p>
              </figcaption>
            </figure>
          </div>
          <div className="flex justify-around pt-6 pb-3">
            <div className="text-white">
              <h1>{data.username}</h1>
            </div>
            <div className="text-white flex justify-center items-center">
              Ratings:
              {[0, 1, 2, 3, 4].map((rating) => (
                <StarIcon
                  key={data.rating}
                  className={classNames(
                    individualReviews > rating
                      ? "text-yellow-400"
                      : "text-gray-200",
                    "h-5 w-5 flex-shrink-0"
                  )}
                  aria-hidden="true"
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col mb-4 mt-3">
            <div className="flex flex-row justify-between h-10 pl-4 pr-4">
              <button className="w-1/4 p-1 rounded-md border border-transparent bg-gradient-to-r from-teal-500 to-cyan-600 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                Book Now
              </button>
              <button className="p-3 text-center fav-button"
              onClick={favouritenanny(data)}
              >Favourite</button>
            </div>
            {isShown ? (
              <div className="flex justify-center pt-10">
                <Link to={`/cards/${data.id}`}>
                  <button className="w-full p-3 rounded-md border border-transparent bg-gradient-to-r from-teal-500 to-cyan-600 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                    View More
                  </button>
                </Link>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    );
  
}
