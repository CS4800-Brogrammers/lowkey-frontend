import React, {useRef} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Form} from 'react-bootstrap'
import "./PhotoUploader.css";
import {AiOutlineCloudUpload} from "react-icons/ai";



const PhotoUploader = (props) => {
    const fileUpload = useRef(null); 
    const uploadPhotos = () => {
        fileUpload.current.click();
        console.log("here");
    }
    return(
        <Form.Group className="mb-4" controlId="ShopPhotos">
            <Form.Label>{props.label}</Form.Label>
            <div className = "upload" onClick = {uploadPhotos}>
                <AiOutlineCloudUpload id = "icon" size = "30"/>
                <p>Browse Files to Upload</p>
                <Form.Control ref = {fileUpload} type = "file" multiple hidden/>
            </div>
        </Form.Group>
    )
    
};

export default PhotoUploader; 