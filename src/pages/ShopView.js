import axios from "axios";
import { useParams} from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import tempImg from "../images/image_placeholder.jpg";
import cupcakes from "../images/cupcakes.jpg";
import Image from "react-bootstrap/Image";
import "./ShopView.css";
import ShopInfoCard from "../components/ShopInfoCard";

const ShopView = () => {
    const { id } = useParams();
    return(
        <div className="shopContainer">
            <div className="shopBanner">
                <img className="BannerImage" src= {cupcakes}/> 
                <ShopInfoCard id= {id}></ShopInfoCard>
            </div>     
            <div className="announcements">
               <div> 
                    Announcements
                    <div className="announceDetails"> - First bullet point</div>
                    <div className="announceDetails"> - Second bullet point</div>
               </div>
            </div>
            <div> </div>
            <div className="products">
                <div > Bottom Half</div>
                <div > Bottom Half</div>
                <div > Bottom Half</div>
                <div > Bottom Half</div>
                <div > Bottom Half</div>
                <div > Bottom Half</div>
                <div > Bottom Half</div>
                <div > Bottom Half</div>
                <div > Bottom Half</div>
                <div > Bottom Half</div>
                <div > Bottom Half</div>
                <div > Bottom Half</div>
                <div > Bottom Half</div>
                <div > Bottom Half</div>
                <div > Bottom Half</div>
                <div > Bottom Half</div>
                <div > Bottom Half</div>
                <div > Bottom Half</div>
                <div > Bottom Half</div>
                <div > Bottom Half</div>
                <div > Bottom Half</div>
                <div > Bottom Half</div>
                <div > Bottom Half</div>
                <div > Bottom Half</div>
                <div > Bottom Half</div>
                <div > Bottom Half</div>
                <div > Bottom Half</div>
                <div > Bottom Half</div>
                <div > Bottom Half</div>
                <div > Bottom Half</div>
                <div > Bottom Half</div>
                <div > Bottom Half</div>
                <div > Bottom Half</div>
                <div > Bottom Half</div>
                <div > Bottom Half</div>
                <div > Bottom Half</div>
                <div > Bottom Half</div>
                <div > Bottom Half</div>
                <div > Bottom Half</div>
                <div > Bottom Half</div>
                <div > Bottom Half</div>
                <div > Bottom Half</div>
                <div > Bottom Half</div>
                <div > Bottom Half</div>
                <div > Bottom Half</div>
                <div > Bottom Half</div>
                <div > Bottom Half</div>
                <div > Bottom Half</div>
            </div>
        </div>

    );
    

}



export default ShopView;