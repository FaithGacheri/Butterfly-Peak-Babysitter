import React, { useEffect, useState } from "react";
import "../Styles/Cards.css";
import Search from "./Search";


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
    
    return (
        <>
 
            <Search change={change} />
       
            <div className="stock-container">
                {nannyData.map((data, key) => {
                    return (
                        <div key={key}>
                            <Nanny
                                key={key}
                                name={data.name}
                                nannyLocation={data.nannyLocation}
                                rating={data.rating}
                                nannyPrice={data.nannyPrice}
                                nanny_url={data.nanny_url}
                                handleDelete={handleDelete}
                            />
                        </div>
                    );
                })}
            </div>
        </>
    );
  
};
const Nanny = ({ name, nannyLocation, rating, nannyPrice, nanny_url, handleDelete}) => {
    if (!name) return <div />;
    return (
  
 <div className="ui four column grid all">
        <div className="ui column" >
            <div className="ui card">
                <div className="image">
                    <img alt="Image not found" src={nanny_url} />
                </div>

            <div className="content">
             <div className="header">
               {name}
             </div>
                <div className="meta text-wrap">
                   <small>{nannyLocation}</small>
                 </div>
                 <div className="meta text-wrap">
                   <small>{rating}</small>
                 </div>
                 <div className="meta text-wrap">
                   <small>{nannyPrice}</small>
                 </div>
            </div>


         <div className="extra content">
              <span>
                <div className="ui center aligned segment basic">
                    <button
                    className="ui mini  button"
                    >
                    Book
                    </button>
                     <button
                    className="favourite "
                    onClick={handleDelete}
                    >
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