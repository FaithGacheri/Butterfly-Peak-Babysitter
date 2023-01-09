import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/Cards.css";
import Search from "./Search";

export default function AvailableNannys() {
  const [nannyData, setNannyData] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const [card, setCard]=useState(0);
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

  const nanny= nannyData.map((data, key) =>
    
      <div className="ui four column grid all">
      <div className="ui column">
        <div className="ui card">
          <div className="image">
            <img alt="Image not found" src={data.nanny_url} />
          </div>

          <div className="content">
            <div className="header">{data.name}</div>
            <div className="meta text-wrap">
              <small>{data.nannyLocation}</small>
            </div>
            <div className="meta text-wrap">
              <small>{data.rating}</small>
            </div>
            <div className="meta text-wrap">
              <small>{data.nannyPrice}</small>
            </div>
          </div>

          <div className="extra content">
            <span>
              <div className="ui center aligned segment basic">
                <button className="ui mini  button">Book</button>

                <button
                  className="fav-button"
                  onClick={() => favouritenanny(data)}
                >
                  Favourite
                </button>
                <div className="#">
                  <button onClick={()=>setCard(data.id)}>
                    <small>
                      <Link to="/cards/card-item">
                        <small>view more...</small>
                      </Link>
                    </small>
                  </button>
                </div>
              </div>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
  return (
    <>
      <Search change={change} />

      <div className="stock-container">
        {nanny}
      </div>
    </>
  );
}


