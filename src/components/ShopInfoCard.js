import axios from "axios";
import React, {useState, useEffect, useContext} from "react";
import "./ShopInfoCard.css";
import StarRating from "./StarRating";
import {ImLocation} from "react-icons/im";
import ShopContactInfo from "./ShopContactInfo";
import ServerHostnameContext from "../context/ServerHostnameContext";
import Error from "../components/Error";
import Loading from "../components/Loading";

const ShopInfoCard = (props) => {
    const [shopInfo, setShopInfo] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState();

    const {id} = props;
    const serverHostname = useContext(ServerHostnameContext);
    const getShopUrl = `http://${serverHostname}:8000/shops/${id}/?format=json`;

    useEffect(() =>{
        axios.get(getShopUrl)
        .then((response) =>{
            setShopInfo(response.data);
            console.log(response.data);
        })
        .catch((error) =>{
            setErrorMessage(error.message);
        })
        .finally(() => {
            setIsLoading(false);

        })
    },[]);
    if(isLoading)
        return(
            <div>
                <isLoading/>
            </div>

        );
    else if(errorMessage)
        return(
            <div>
                <Error/>
            </div>
        );
    return(
        <div className= "row infoCard"> 
            <div className="row">
                {/* was col-5 originally when we had section for followers*/}
                <div className= "col-7 shopName"> {shopInfo.name} </div>
                <div className= "col-3 positionAlign">
                    <StarRating rating = {shopInfo.rating} starSize={25} ratingColor= "#00A6A6"></StarRating>
                </div>
                {/* <div className= "col-2 followers positionAlign">Followers</div> */}
                <div className= "col-2 positionAlign">
                    <ShopContactInfo email={shopInfo.email} phoneNum= {shopInfo.phone_number}></ShopContactInfo>
                </div>
            </div>
            <div className="row">
                <div className= "col-1"> 
                    <ImLocation className= "locationIcon "></ImLocation> 
                </div>
                <div className= "col-11 locationText"> {shopInfo.address} </div>
            </div>
            <div className="row">
                <div className= "col">
                    <p className= "shopDescription cutOffText"> {shopInfo.description} </p>
                    <input className= "expand-btn" type= "checkbox" />
                </div>
            </div>
        </div>
    );

}



export default ShopInfoCard;