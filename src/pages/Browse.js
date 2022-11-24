import React, {useState, useEffect, useRef, useMemo} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Form, Button, Container, Row} from 'react-bootstrap'
import "./Browse.css";
import axios from 'axios';
import {GoogleMap, useLoadScript, Marker} from "@react-google-maps/api";


const Browse = () => {
    //Google Maps API 
    const {isLoaded} = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    });

    if(!isLoaded){
        return <div>Loading...</div>;
    } 
    return (
        <div>
            <Map/>
        </div>
    );
}
export default Browse; 


//Map component
const Map = () => {
    const center = useMemo(() => ({lat: 44, lng: -80}), []); 
    return (
        <GoogleMap zoom = {10} center = {center} mapContainerClassName = "map-container">
            <Marker position = {center}/>
        </GoogleMap>
    );
}

