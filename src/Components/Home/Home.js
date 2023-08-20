import "./Home.css";
import FoodTruck from "../../asstes/foodTruck.png";

import Pizza from "../../asstes/Rectangle 400.png";

function Home() {
  return (
    <div>
      <div className="Box">
        <div className="flex-row">
          <div className="left-column">
            <div className="icon">
              <img src={FoodTruck} alt="foof truck" />
            </div>
            <div className="heading">
              <div className="heading1">
                Discover the
                <span className="best"> Best</span> Food and Drinks
              </div>
              <div className="para">
                <p>
                  Naturally made Healthcare Products for the better care &
                  support of your body.
                </p>
              </div>
              <div>
                <button className="button">Explore Now!</button>
              </div>
            </div>
          </div>
          <div className="right-column">
            <div className="img">
              <img src={Pizza} alt="img1" className="Pizza" />
              <svg
                className="wecanit"
                xmlns="http://www.w3.org/2000/svg"
                width="752"
                height="839"
                viewBox="0 0 752 839"
                fill="none"
              >
                <path
                  d="M111.512 36.3371C40.9348 45.1719 7.76349 15.7936 0 0L752 1.42498V835.396C484.285 867.417 547.679 676.51 560.03 640.173C572.381 603.836 657.779 365.152 547.679 190.591C437.579 16.031 199.733 25.2934 111.512 36.3371Z"
                  fill="#E23744"
                />
              </svg>
              <div className="buttonone">
                <button className="btmtext">Get In Touch</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
