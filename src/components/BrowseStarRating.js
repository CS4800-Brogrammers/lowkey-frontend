import React, {useState} from 'react';
// import "./StarRating.css";
import {FaStar} from "react-icons/fa";
import "./BrowseStarRating.css";

const BrowseStarRating = (props) => {
    const rating = props.rating;
    const ratingColor= props.ratingColor
    const {filterConfig, setFilterConfig}= props;

    const handleOnClick = (event) => {
        setFilterConfig({...filterConfig, starRating : rating})
    //    console.log("event target id is " + event.target.id+ " " + filterConfig["starRating"] + " and " + rating);

        console.log(event);
    };
   
    return(
        // <div className= "starRatingOption">
        //     {[...Array(5)].map((star, i) => {
        //         const ratingValue = i+1; 

        //         return(
        //         <label key = {i}>
        //             <FaStar 
        //                 className = "star spacing" 
        //                 color = {ratingValue <= rating ? ratingColor: "#e4e5e9"}
        //                 size={props.starSize}
        //                 // onClick= {() =>{console.log("this is star " + i)}}
        //             />
        //         </label>
        //         ); 
        //     })}         
        // </div>
        <div className= "starRatingOption" onClick={handleOnClick} id="starRating">
            {[...Array(5)].map((star, i) => {
                const ratingValue = i+1; 

                return(
                <label key = {i}>
                    <FaStar 
                        className = "star spacing" 
                        color = {ratingValue <= rating ? ratingColor: "#e4e5e9"}
                        size={props.starSize}
                        // onClick= {() =>{console.log("this is star " + i)}}
                    />
                </label>
                ); 
            })}
            <label> {props.message}</label>
            
        </div>

       
    );
}; 

export default BrowseStarRating; 