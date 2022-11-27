import React, {useState, useEffect} from "react";
import "./ShopInfoCard.css";
import StarRating from "./StarRating";
import {ImLocation} from "react-icons/im";
import ShopContactInfo from "./ShopContactInfo";


const ShopInfoCard = () => {
    return(
        <div className= "row infoCard"> 
            <div className="row">
                <div className= "col-5 shopName"> Shop name </div>
                <div className= "col-3 positionAlign">
                    <StarRating rating = {4} starSize={25} ratingColor= "#00A6A6"></StarRating>
                </div>
                <div className= "col-2 followers positionAlign">Followers</div>
                <div className= "col-2 positionAlign">
                    <ShopContactInfo></ShopContactInfo>
                </div>
            </div>
            <div className="row">
                <div className= "col-1"> 
                    <ImLocation className= "locationIcon "></ImLocation> 
                </div>
                <div className= "col-11 locationText">City, State</div>
            </div>
            <div className="row">
                <div className= "col">
                    <p className= "shopDescription cutOffText">Short description of business. Here is a sample sentence to show how long it can be without overflowing over and past card border. This is a second sentence to add some more length </p>
                    <input className= "expand-btn" type= "checkbox" />
                </div>
            </div>
        </div>
    );

}



export default ShopInfoCard;