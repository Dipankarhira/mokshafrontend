import React from "react";
import "./footer.css";
function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-xs-12">
            <div className="first">
              <h4>Desire Duplex</h4>
              <p> Nirmal Bhabn</p>
              <p> BT college</p>
              <p> West Byt-lane</p>
              <p> Lachit nagar</p>
              <p> PIN=781007</p>
            </div>
          </div>
          <div className="col-md-4 col-xs-12">
            <div className="second">
              <h4> Events</h4>
              <ul>
                <li>Birthday</li>
                <li>Anniversary</li>
                <li>Friends Get-together</li>
              </ul>
            </div>
          </div>
          {/* <div className="col-md-4 col-xs-12">
        <div className="third">
          <h4> Trayaksh Homestay</h4>
          <ul>
            <li>Hill View </li>
            <li />
            <li>
              <i className="far fa-envelope" /> andreea@andreeabunget.co.uk
            </li>
            <li>
              <i className="far fa-envelope" /> email@yahoo.com
            </li>
            <li>
              <i className="fas fa-map-marker-alt" /> London, UK{" "}
            </li>
          </ul>
        </div>
      </div> */}
          <div className="col-md-4 col-xs-12">
            <div className="first">
              <h4>Trayaksh Homestay</h4>
              <p> Hill-View Apartment</p>
              <p> Zonali Path</p>
              <p> Ambikagiri Nagar</p>
              <p> Flat- F206</p>
              <p> PIN= 781024</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="line" />
            <div className="second2">
              <a href="https://codepen.io/AndreeaBunget" target="_blank">
                {" "}
                <i className="fab fa-codepen fa-2x margin" />
              </a>
              <a href="https://github.com/WebDeveloperCodeRep" target="_blank">
                {" "}
                <i className="fab fa-github fa-2x margin" />
              </a>
              <a
                href="https://www.linkedin.com/in/andreea-mihaela-bunget-a4248812b/"
                target="_blank"
              >
                {" "}
                <i className="fab fa-linkedin fa-2x margin" />
              </a>
              <a
                href="https://www.youtube.com/channel/UCX674BUbomzBCakbb75lhfA?view_as=subscriber"
                target="_blank"
              >
                <i className="fab fa-youtube fa-2x margin" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
