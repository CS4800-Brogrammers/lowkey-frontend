import axios from "axios";
import { useParams} from "react-router-dom";
import { Container, Row, Col} from "react-bootstrap";
import cupcakes from "../images/cupcakes.jpg";
import React, {useState, useContext, useEffect} from 'react';
import "./ShopView.css";
import ShopInfoCard from "../components/ShopInfoCard";
import ProductCard from "../components/ProductCard";
import Error from "../components/Error";
import Loading from "../components/Loading";
import ServerHostnameContext from "../context/ServerHostnameContext";

const ShopView = () => {
    const { id } = useParams();
    const serverHostname = useContext(ServerHostnameContext);
    const getUserShopURL = `http://${serverHostname}:8000/user/shops/?format=json`;
    
    const [products, setProducts] = useState([]);
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
            .then((response) => {
            setProducts(response.data);
            })
            .catch((error) => {
            setErrorMessage(error.message);
            })
            .finally(() => setIsLoading(false));
    }, [getUserShopURL]);
    

    if(isLoading)
        return(
            <div>
                <Loading/>
            </div>

        );
    else if(errorMessage)
        return(
            <div>
                <Error/>
            </div>
        );


    const productList = products.map((product, index) => {
        return (
          <Col key={index} className="px-2 pb-3" md="auto">
            <ProductCard
              key={index}
              id={product["product_id"]}
              title={product["product_name"]}
              price={product["price"]}
              rating={product["rating"]}
              shop={product["shop"]}
            />
          </Col>
        );
      });
    
    return(
        <Container fluid className="shopContainer">
            <Row className="shopBanner">
                <img className="BannerImage" src= {cupcakes}/> 
                <ShopInfoCard id= {id}></ShopInfoCard>
            </Row>     
            <Row className="announcements"> 
                <Col xs = {3} className = "announcementsHeading">
                    <h5>Announcement</h5>
                </Col>
                <Col xs = {9}>
                    <div className="announceDetails"> Christmas sale start 12/1/22! Everything 10% off!</div>
                    
                </Col>
                
            </Row>
            <Row className="products">
              {productList}
            </Row>
        </Container>

    );
    

}



export default ShopView;
