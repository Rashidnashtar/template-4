import { useState } from "react";
import { useLocation } from "react-router-dom";
import "../assets/Css/navbar.css";
import dasImg from "../assets/svgs/dashboard.svg";
import setImg from "../assets/svgs/settings.svg";
import proImg from "../assets/svgs/profile.svg";
import projImg from "../assets/svgs/projects.svg";
import courImg from "../assets/svgs/courses.svg";
import friImg from "../assets/svgs/friends.svg";
import filImg from "../assets/svgs/files.svg";
import plaImg from "../assets/svgs/plans.svg";
import { useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
  const location = useLocation();
  const locationMap = {
    "/": 0,
    "/settings": 1,
    "/profile": 2,
    "/projects": 3,
    "/courses": 4,
    "/friends": 5,
    "/files": 6,
    "/plans": 7,
  };
  const navigate = useNavigate();
  const [isActiveArr, setIsActivearr] = useState(
    //@ts-ignore
    locationMap[location.pathname]
  );
  console.log(location.pathname);

  return (
    <div className="main-navbar ">
      <h3 className="nav-heading ">
        Rashid <span></span>
      </h3>
      <ul className="nav-list">
        <li
          onClick={() => {
            setIsActivearr(0);
            navigate("/");
          }}
          className={`nav-item ${isActiveArr == 0 ? "active" : ""}`}
        >
          <img src={dasImg} alt="dashboard-icon" /> <span>Dashboard</span>
        </li>
        <li
          onClick={() => {
            setIsActivearr(1);
            navigate("/settings");
          }}
          className={`nav-item ${isActiveArr == 1 ? "active" : ""}`}
        >
          <img src={setImg} alt="settings-icon" /> <span>Settings</span>
        </li>
        <li
          onClick={() => {
            setIsActivearr(2);
            navigate("/profile");
          }}
          className={`nav-item ${isActiveArr == 2 ? "active" : ""}`}
        >
          <img src={proImg} alt="profile-icon" /> <span>Profile</span>
        </li>
        <li
          onClick={() => {
            setIsActivearr(3);
            navigate("/projects");
          }}
          className={`nav-item ${isActiveArr == 3 ? "active" : ""}`}
        >
          <img src={projImg} alt="projects-icon" /> <span>Projects</span>
        </li>
        <li
          onClick={() => {
            setIsActivearr(4);
            navigate("/courses");
          }}
          className={`nav-item ${isActiveArr == 4 ? "active" : ""}`}
        >
          <img src={courImg} alt="courses-icon" /> <span>Courses</span>
        </li>
        <li
          onClick={() => {
            setIsActivearr(5);
            navigate("/Friends");
          }}
          className={`nav-item ${isActiveArr == 5 ? "active" : ""}`}
        >
          <img src={friImg} alt="friends-icon" /> <span>Friends</span>
        </li>
        <li
          onClick={() => {
            setIsActivearr(6);
          }}
          className={`nav-item ${isActiveArr == 6 ? "active" : ""}`}
        >
          <img src={filImg} alt="files-icon" /> <span>Files</span>
        </li>
        <li
          onClick={() => {
            setIsActivearr(7);
          }}
          className={`nav-item ${isActiveArr == 7 ? "active" : ""}`}
        >
          <img src={plaImg} alt="plans-icon" /> <span>Plans</span>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
