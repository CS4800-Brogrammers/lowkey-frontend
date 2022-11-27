import {BsChatRightTextFill} from "react-icons/bs";
import {Button } from "react-bootstrap";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import "./ShopContactInfo.css";
import "./ShopInfoCard.css";

const ShopContactInfo = () =>{
    const popover = (
        <Popover id="popover-basic">
          <Popover.Header as="h3">Contact Info</Popover.Header>
          <Popover.Body>
            <div className= "bottomLine">
              Email: sampleemail@gmail
            </div>
            <div>
              Phone Number: <strong>N/A</strong>
            </div>
          </Popover.Body>
        </Popover>
      ); 
    return (
        <OverlayTrigger trigger="click" placement="right" overlay={popover}>
            <Button className="contactButton btn-icon">
                <BsChatRightTextFill 
                    className="chatButtonFill"                
                /> 
            </Button>
        </OverlayTrigger>

    );

};



export default ShopContactInfo;