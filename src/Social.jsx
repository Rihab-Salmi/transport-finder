import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faGooglePlus,
} from "@fortawesome/free-brands-svg-icons";
import "./social.css";

function Social() {
  return (
    <ul>
      <li>
        <a className="facebook" href="#">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
      </li>
      <li>
        <a className="twitter" href="#">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </li>
      <li>
        <a className="instagram" href="#">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </li>
      <li>
        <a className="google" href="#">
          <FontAwesomeIcon icon={faGooglePlus} />
        </a>
      </li>
    </ul>
  );
}

export default Social;
