import React, { useEffect, useState } from "react";
import "../Styles/Cards.css";
import Search from "./Search";
import { StarIcon } from "@heroicons/react/20/solid";


export default function Favourite () {

    const [nannyData, setNannyData] = useState([]);
    const [searchResult, setSearchResult] = useState([]);
    const [favouriteNanny, setfavouriteNanny] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3000/favouriteNannys`)
            .then((res) => res.json())
            .then((nannyData) => {
                setNannyData(nannyData)
                setSearchResult(nannyData)
            })
    }, [])


      function handleDelete() {
    fetch(`http://localhost:3000/favouriteNannys/${favouriteNanny.id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => {
        setfavouriteNanny((favouriteNanny) => favouriteNanny.filter((favouriteNann) => favouriteNann.id !== favouriteNanny.id));
        alert("Nanny removed");
      });
  }

    //event listener watching change on search component
    const change = (e) => {
        setNannyData(searchResult.filter(nannyData =>
            nannyData.name.toLowerCase()
                .includes(e.target.value.toLowerCase())))
    }

        function classNames(...classes) {
          return classes.filter(Boolean).join(" ");
        }

    <div className="stock-container">
      {nannyData.map((data, key) => {
        return (
          <div key={key}>
            <Nanny
              key={key}
              name={data.name}
              nannyLocation={data.nannyLocation}
              ratings={data.rating}
              nannyPrice={data.nannyPrice}
              nanny_url={data.nanny_url}
              handleDelete={handleDelete}
            />
          </div>
        );
      })}
    </div>;


const Nanny = ({
  name,
  nannyLocation,
  ratings,
  nannyPrice,
  nanny_url,
  handleDelete,
}) => {
  if (!name) return <div />;
  return (
    <div className="ui four column grid all">
      <div className="ui column">
        <div className="ui card">
          <div className="image">
            <figure className="snip0016">
              <img src={nanny_url} alt="Image not found" />
              <figcaption>
                <h2>
                  <div>{name}</div> <span>{nannyLocation}</span>
                </h2>
                <p>
                  At things that don't make sense, we couldn't react to a lot of
                  life.
                </p>
                <a href="#"></a>
              </figcaption>
            </figure>
          </div>

          <div className="content">
            <div className="ml-1 flex items-center">
              {[0, 1, 2, 3, 4].map((rating) => (
                <StarIcon
                  key={ratings}
                  className={classNames(
                    ratings > rating ? "text-yellow-400" : "text-gray-200",
                    "h-5 w-5 flex-shrink-0"
                  )}
                  aria-hidden="true"
                />
              ))}
            </div>
            <div className="meta text-wrap">
              <small>{nannyPrice}</small>
            </div>
          </div>

          <div className="extra content">
            <span>
              <div className="ui center aligned segment basic">
                <button className="ui mini  button">Book</button>
                <button className="favourite " onClick={handleDelete}>
                  Remove
                </button>
              </div>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
    return (
      <>
        <Search change={change} />

        <div className="whole">{Nanny}</div>
      </>
    );
  
};
