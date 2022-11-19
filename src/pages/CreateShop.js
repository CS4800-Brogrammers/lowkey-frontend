import React, {useState, useContext, useRef} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Form, Button, Container, Row} from 'react-bootstrap'
import "./CreateShop.css";
import axios from 'axios';
import {AiOutlineCloudUpload} from "react-icons/ai";
import Error from "../components/Error";
import Loading from "../components/Loading";
import {Navigate, useNavigate } from "react-router-dom";
import {GoogleMap, useLoadScript, Marker} from "@react-google-maps/api";
import usePlacesAutocomplete, {getGeocode, getLatLng} from 'use-places-autocomplete';
import {Combobox, ComboboxInput, ComboboxPopover, ComboboxList, ComboboxOption} from "@reach/combobox";
import "@reach/combobox/styles.css";
import ServerHostnameContext from "../context/ServerHostnameContext";

const CreateShop = () => {
    const serverHostname = useContext(ServerHostnameContext);
    const shopsURL = `http://${serverHostname}:8000/shops/`;

    const [post, setPost] = useState(null);
    const [shopName, setShopName] = useState('');
    const [shopAddress, setShopAddress] = useState('');
    const [shopDescription, setShopDescription] = useState('');
    const [shopPhotos, setShopPhotos] = useState('');
    const [shopCategory, setShopCategory] = useState('');

    const [errorMessage, setErrorMessage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
        
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        axios
            .post(shopsURL, {
                name: shopName,
                address: shopAddress,
                category: shopCategory,
                description: shopDescription,
                
            })
            .then((response) => {
                setPost(response.data);
                console.log(response);
            })
            .catch((error) => {
                //setErrorMessage(error.message);
            })
            .finally(() => {
                setIsLoading(false);
                // navigate('/');
            });
        console.log(shopName);
        console.log(shopAddress);
        console.log(shopDescription);
        console.log(shopCategory);
        console.log(shopPhotos);
    
    }
    //handle click to upload and trigger file input 
    const fileUpload = useRef(null); 
    const uploadPhotos = () => {
        fileUpload.current.click();
    }
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

    return (
      
        <Container className = "form p-5">
            <Row className = "mb-5">
                <h1>Create Your Shop</h1>
            </Row>
            <Form onSubmit ={handleSubmit}>
                <Form.Group className="mb-4" controlId="name">
                    <Form.Label>Name Your Shop</Form.Label>
                    <Form.Control 
                        type = "text" 
                        value = {shopName} 
                        onChange = {(e) => setShopName(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-4" controlId="address">
                    <Form.Label>Shop Address</Form.Label>
                    <div className = "places-container">
                        {/* Pass in setSelected function as prop */}
                        <PlacesAutoComplete setShopAddress = {setShopAddress} />
                    </div>
                </Form.Group>

                <Form.Group className="mb-4" controlId="categroy">
                    <Form.Label>Shop Category</Form.Label>
                    <Form.Control 
                        type = "text"  
                        value = {shopCategory} 
                        onChange = {(e) => setShopCategory(e.target.value)}
                        />
                </Form.Group>

                <Form.Group className="mb-4" controlId="description">
                    <Form.Label>Shop Description</Form.Label>
                    <textarea
                        type = "textarea" 
                        placeholder = "Let customers know a little bit about your shop" 
                        value = {shopDescription} 
                        className = "form-control"
                        onChange = {(e) => setShopDescription(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-4" controlId="photos">
                    <Form.Label>Show off your shop with photos</Form.Label>
                        <div className = "upload" onClick = {uploadPhotos}>
                            <AiOutlineCloudUpload id = "icon" size = "30"/>
                            <p>Browse Files to Upload</p>
                            <Form.Control 
                                ref = {fileUpload} 
                                type = "file" multiple 
                                hidden
                                onChange = {(e) => setShopPhotos(e.target.files)}
                                />
                        </div>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Create Shop
                </Button>
            </Form>
        </Container>
      );
};
export default CreateShop; 

//Component recieves setSelected as prop
const PlacesAutoComplete = ({setShopAddress}) => {
    const {
        ready,
        value, 
        setValue,
        suggestions: {status, data}, 
        clearSuggestions,
    } = usePlacesAutocomplete();

    const handleSelect = (address) => {
        setValue(address, false);
        clearSuggestions(); 
        setShopAddress(address);
    }
    //return combobox component which handles the autocomplete api
    return(
        <Combobox onSelect = {handleSelect}>
            <ComboboxInput 
                value = {value} 
                onChange = {e => setValue(e.target.value)} 
                disabled = {!ready}
                className = "combobox-input"
                placeholder = "Search for your address"
            />
            <ComboboxPopover>
                <ComboboxList>
                    {status === "OK" && 
                        data.map(({place_id, description}) => (
                            <ComboboxOption 
                                key = {place_id} 
                                value = {description}
                            />
                        ))}
                </ComboboxList>
            </ComboboxPopover>
        </Combobox>
    )
    
}