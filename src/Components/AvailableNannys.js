import React, { useEffect, useState } from "react";
import "../Styles/Cards.css";
import Search from "./Search";



export default function AvailableNannys () {
    const [nannyData, setNannyData] = useState([]);
    const [searchResult, setSearchResult] = useState([])
   
    useEffect(() => {
        fetch(`http://localhost:3000/nannyData`)
            .then((res) => res.json())
            .then((nannyData) => {
                // console.log(nannyData)
                setNannyData(nannyData)
                setSearchResult(nannyData)
            })
    }, [])

    //event listener watching change on search component
    const change = (e) => {
        setNannyData(searchResult.filter(nannyData =>
            nannyData.name.toLowerCase()
                .includes(e.target.value.toLowerCase())))

    }
    function favouritenanny(data) {
        fetch(`http://localhost:3000/favouriteNanny`, {
            method: 'POST',
            headers: {"content-type":"application/json"},
            body: JSON.stringify({
                name:data.name,
                nannyLocation:data.nannyLocation,
                rating:data.rating,
                nannyPrice:data.nannyPrice,
                nanny_url:data.nanny_url
            })

        } )
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch(err => console.error(err.message))

    
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
                                data={data}
                                name={data.name}
                                nannyLocation={data.nannyLocation}
                                rating={data.rating}
                                nannyPrice={data.nannyPrice}
                                nanny_url={data.nanny_url}
                                favouritenanny={favouritenanny}
                            />
                        </div>
                    );
                })}
            </div>
        </>
    );

};
// const favouriteNanny
const Nanny = ({ name, data, nannyLocation, rating, nannyPrice, nanny_url, favouritenanny}) => {
  
   console.log(data);
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
                       className="fav-button"
                       onClick={()=>favouritenanny(data)}
                    >   
                       Favourite
                     </button>

                </div>
              </span>
         </div>


        </div>
        </div>
     </div> 
     
    );
    };