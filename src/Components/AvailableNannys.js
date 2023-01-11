import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { StarIcon } from "@heroicons/react/20/solid";
import "../Styles/Cards.css";
import "../Styles/TestFile.css";
import Search from "./Search";

export default function AvailableNannys() {
  const [nannyData, setNannyData] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const [card, setCard] = useState(0);
  console.log(card);

  useEffect(() => {
    fetch(`http://localhost:3000/nannyData`)
      .then((res) => res.json())
      .then((nannyData) => {
        // console.log(nannyData)
        setNannyData(nannyData);
        setSearchResult(nannyData);
      });
  }, []);

  //event listener watching change on search component
  const change = (e) => {
    setNannyData(
      searchResult.filter((nannyData) =>
        nannyData.name.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

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

  const nanny = nannyData.map((data) => (
    <div>
      <div className="bg-gray-900 flex flex-col justify-center">
        <div className="image">
          <figure className="snip0016">
            <img src={data.nanny_url} alt="Image not found" />
            <figcaption>
              <h2>
                <div>{data.name}</div> <span>{data.nannyLocation}</span>
              </h2>
              <p>
                At things that don't make sense, we couldn't react to a lot of
                life.
              </p>
              <a href="#"></a>
            </figcaption>
          </figure>
        </div>

        <div className="">
          <div className="ml-1 flex justify-center items-center">
            {[0, 1, 2, 3, 4].map((rating) => (
              <StarIcon
                key={data.rating}
                className={classNames(
                  data.rating > rating ? "text-yellow-400" : "text-gray-200",
                  "h-5 w-5 flex-shrink-0"
                )}
                aria-hidden="true"
              />
            ))}
          </div>
          <div className="flex justify-center text-white">
            <small>Price Tag: {data.nannyPrice}</small>
          </div>
        </div>

        <div className="extra content">
          <span>
            <div className="flex flex-row justify-between h-10 pl-4 pr-4">
              <button className="w-1/4 p-1 rounded-md border border-transparent bg-gradient-to-r from-teal-500 to-cyan-600 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                Book Now
              </button>

              <button
                className="fav-button"
                onClick={() => favouritenanny(data)}
              >
                Favourite
              </button>
            </div>
            <div>
              <button
                className="w-1/4 p-1 rounded-md border border-transparent bg-gradient-to-r from-teal-500 to-cyan-600 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                onClick={() => setCard(data.id)}
              >
                <small>
                  <Link to="/cards/card-item">
                    <small>view more...</small>
                  </Link>
                </small>
              </button>
            </div>
          </span>
        </div>
      </div>
    </div>
  ));
  return (
    <>
      <Search change={change} />

      <div className="whole">{nanny}</div>
    </>
  );
}
