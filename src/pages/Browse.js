import React, {useState, useEffect, useContext, useMemo} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Form, Button, Container, Row, Col} from 'react-bootstrap'
import "./Browse.css";
import axios from 'axios';
import {GoogleMap, useLoadScript, Marker} from "@react-google-maps/api";
import ProductCard from "../components/ProductCard";
import Error from "../components/Error";
import Loading from "../components/Loading";
import PriceRange from '../components/PriceRange';
import BrowseStarRating from '../components/BrowseStarRating';
import ServerHostnameContext from "../context/ServerHostnameContext";
const Browse = () => {
    //Google Maps API 
    const {isLoaded} = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    });
    const serverHostname = useContext(ServerHostnameContext);
    const productsURL = `http://${serverHostname}:8000/product/?format=json`;
    const [isLoading, setIsLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [isresultFiltered, setIsResultFiltered] = useState(false);
    const [filterConfig, setFilterConfig] = useState({price: 0 , starRating: 0});
    const [price, setPrice] = useState(0);
    const [filterRating, setFilterRating]= useState(0);

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
                    image={product["image"]}
                />
            </Col>
        );
        });
    const filteredProductList = filteredProducts.map((product, index) => {
        return (
            <Col key={index} className="px-2 pb-3" md="auto">
                <ProductCard
                    key={index}
                    id={product["product_id"]}
                    title={product["product_name"]}
                    price={product["price"]}
                    rating={product["rating"]}
                    shop={product["shop"]}
                    image={product["image"]}
                />
            </Col>
        );
        });
    
    const starFilter= () => {
        const starList=[];
        for(let i=5; i> 0; i--){
            starList.push(<BrowseStarRating rating= {i} ratingColor= "00A6A6" setFilterRating= {setFilterRating} filterConfig={filterConfig} setFilterConfig={setFilterConfig} starSize={25} message= {i + " stars & up"}></BrowseStarRating>);
        }
        return(
            starList.map( (star, index)=>{
                return star;
            })
            // <div>
            //     { {for(let i=5; i> 0; i--){
            //         return <BrowseStarRating rating= {i}></BrowseStarRating>;
            //     }} }
            // </div>
        )
    };

    // rating component
    // update filter object
    //either make second get request or filter manually on my own

    // const filterResult= (products, filter) =>{ 
    //     products.filter((product) =>{
    //         return product["price"] <= filter["price"];
    //     })
    // };

        // const handleOnchangePrice = (e)  => {
        //     e.target.value;
        //     setFilter();
        // }; 

    // <form >
    //     <starRating onChange>

    //     </starRating>
    //     <PriceRange>

    //     </PriceRange>
    //     <input type= "range" onChange= {handleOnchangePrice}></input>
    //     <button onClick={(setfilter)}></button>

    // </form>


    useEffect(() => {
        axios
          .get(productsURL)
          .then((response) => {
            setProducts(response.data);
            console.log(response.data);
          })
          .catch((error) => {
            setErrorMessage(error.message);
          })
          .finally(() => setIsLoading(false));
      }, [productsURL]);

    const filterResult = () =>{
        const filterQuery= "price$" + filterConfig["price"] + "&" + "rating" + filterConfig["starRating"];
        axios
            .get(productsURL, {params: {price: filterConfig["price"], rating: filterConfig["starRating"], q: filterQuery }})
            .then((response) => {
            setFilteredProducts(response.data);
            console.log("this is the starRating " + filterConfig["starRating"]);
            })
            .catch((error) => {
            setErrorMessage(error.message);
            })
            .finally(() => setIsLoading(false),
                () => setIsResultFiltered(true)
            );
    }
    console.log(filterConfig);

    
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

    if(!isLoaded){
        return <div>Loading...</div>;
    } 
    return (
        // <div className="browse-page">
        <Container fluid>
            <Row>
                <div className="col-3 browse-border">
                    <div className= "row mb-3">
                    Filters
                    </div>
                    <Row>
                        <div className= "container mb-3">
                            <div className= "row filterBarBottomLine">
                                Price Range
                                <PriceRange price= {price} setPrice = {setPrice} filterConfig={filterConfig} setFilterConfig={setFilterConfig}></PriceRange>
                            </div>
                            <div className= "row filterBarBottomLine">
                                Rating
                                {/* <BrowseStarRating starSize = {35} ratingColor= "#00A6A6" ></BrowseStarRating> */}
                                {starFilter()}
                                {/* "119DA4" */}
                            </div>
                        </div>
                    </Row>
                    <Button onClick= {() => filterResult()}> Filter </Button>
                    </div>
                <div className ="col-6">
                    {isresultFiltered ? filteredProductList : productList}
                </div>
                <div className="col-3">
                    <Map/>
                </div>
            </Row>
           
        </Container>
           

        
        // </div>
        // <div>
        //     <Map/>
        // </div>
    );
}
export default Browse; 


//Map component
const Map = () => {
    const center = useMemo(() => ({lat: 44, lng: -80}), []); 
    return (
        // <Container>
        //     <Row>
        //         <Col xs ={3}>
        //         </Col>
        //         <Col xs= {6}> 
        //         </Col>
        //         <Col xs= {3}>
        //             <GoogleMap zoom = {10} center = {center} mapContainerClassName = "map-container">
        //                 <Marker position = {center}/>
        //             </GoogleMap>
        //         </Col>
        //     </Row>
        // </Container>

        <GoogleMap zoom = {10} center = {center} mapContainerClassName = "map-container">
            <Marker position = {center}/>
        </GoogleMap>
    );
}