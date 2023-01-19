import proImg from "../../assets/image/profile-img.webp";
import { useState } from "react";
const MainProfileWidget = () => {
  const [isActive, setIsActive] = useState([false, false, false, false]);
  const updateActive = (n: number) => {
    let newIsActive = isActive;

    if (newIsActive[n - 1]) newIsActive[n - 1] = false;
    if (!newIsActive[n - 1]) newIsActive[n - 1] = true;

    setIsActive([...newIsActive]);
  };
  return (
    <div className="main-profile-widget">
      <div className="hero">
        <img src={proImg} alt="profile" />
        <h3>Rashid Nashtar</h3>
        <p>Level 23</p>
        <div className="progress">
          <span data-width="70%" style={{ width: "70%" }}></span>
        </div>
        <div className="stars">
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
        </div>
        <p className="rate">500 Rating</p>
      </div>
      <div className="details">
        <div className="detail-item">
          <h4>General Information</h4>
          <div className="info">
            <p>
              Full Name <span>Rashid Nashtar</span>
            </p>
            <p>
              Gender: <span>Male</span>
            </p>
            <p>
              Country: <span>Syria</span>
            </p>
            <label
              onClick={() => {
                updateActive(1);
              }}
              htmlFor="a1"
              className={`${isActive[0] ? "active" : ""}`}
            >
              <input type="checkbox" name="active" id="a1" />
              <span></span>
            </label>
          </div>
        </div>
        <div className="detail-item">
          <h4>Personal Information</h4>
          <div className="info">
            <p>
              Email: <span>o@nn.a</span>
            </p>
            <p>
              Phone: <span>0958712199</span>
            </p>
            <p>
              Date Of Birth: <span>31/10/202</span>
            </p>
            <label
              className={`${isActive[1] ? "active" : ""}`}
              onClick={() => {
                updateActive(2);
              }}
              htmlFor="a2"
            >
              <input type="checkbox" name="active" id="a2" />
              <span></span>
            </label>
          </div>
        </div>
        <div className="detail-item">
          <h4>Job Information </h4>
          <div className="info">
            <p>
              Title: <span>Front-End Developer</span>
            </p>
            <p>
              Programming Language :<span>JavaScript</span>
            </p>
            <p>
              Years Of Experince: <span>3+</span>
            </p>
            <label
              className={`${isActive[2] ? "active" : ""}`}
              onClick={() => {
                updateActive(3);
              }}
              htmlFor="a3"
            >
              <input type="checkbox" name="active" id="a3" />
              <span></span>
            </label>
          </div>
        </div>
        <div className="detail-item">
          <h4>Billing Information</h4>
          <div className="info">
            <p>
              Payment Method:<span>Paypal</span>
            </p>
            <p>
              Email: <span>rashid@paypal.com</span>
            </p>
            <p>
              Subscription: <span>Monthly</span>
            </p>
            <label
              className={`${isActive[3] ? "active" : ""}`}
              onClick={() => {
                updateActive(4);
              }}
              htmlFor="a4"
            >
              <input type="checkbox" name="active" id="a4" />
              <span></span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainProfileWidget;
