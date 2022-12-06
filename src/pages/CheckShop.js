import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Error from "../components/Error";
import Loading from "../components/Loading";
import ServerHostnameContext from "../context/ServerHostnameContext";
import { Navigate, useNavigate } from "react-router-dom";
import CreateShop from "./CreateShop";
import ShopView from "./ShopView";

const CheckShop = () => {

    const serverHostname = useContext(ServerHostnameContext);
    const getUserShopURL = `http://${serverHostname}:8000/user/shops/?format=json`;

    const [userShop, setUserShop] = useState(null);
    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);

    useEffect(() => {
        axios
            .get(getUserShopURL, {
              headers: {
                Authorization: localStorage.getItem("authTokens")
                  ? "JWT " + JSON.parse(localStorage.getItem("authTokens")).access
                  : null,
              },
            })
          .then((response => {
            setUserShop(response.data[0]);
            
          })
            
          )
          .catch((error) => {
            setErrorMessage(error.message);
          })
          .finally(() => {
            setIsLoading(false);
            
          });
    }, []);
    
      if (isLoading)
        return (
          <div>
            <Loading />
          </div>
        );
      else if (errorMessage)
        return (
          <div>
            <Error />
          </div>
        );


    if (userShop == null){
        return <CreateShop/>
    } else {
        return <ShopView id = {userShop.shop_id}/>
    }
            
}
export default CheckShop;