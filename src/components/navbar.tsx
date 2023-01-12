import "../assets/Css/navbar.css";
import dasImg from "../assets/svgs/dashboard.svg";
import setImg from "../assets/svgs/settings.svg";
import proImg from "../assets/svgs/profile.svg";
import projImg from "../assets/svgs/projects.svg";
import courImg from "../assets/svgs/courses.svg";
import friImg from "../assets/svgs/friends.svg";
import filImg from "../assets/svgs/files.svg";
import plaImg from "../assets/svgs/plans.svg";

const Navbar: React.FC = () => {
  return (
    <div className="main-navbar ">
      <h3 className="nav-heading ">
        Rashid <span></span>
      </h3>
      <ul className="nav-list">
        <li className="nav-item active">
          <img src={dasImg} alt="dashboard-icon" /> <span>Dashboard</span>
        </li>
        <li className="nav-item">
          <img src={setImg} alt="settings-icon" /> <span>Settings</span>
        </li>
        <li className="nav-item">
          <img src={proImg} alt="profile-icon" /> <span>Profile</span>
        </li>
        <li className="nav-item">
          <img src={projImg} alt="projects-icon" /> <span>Projects</span>
        </li>
        <li className="nav-item">
          <img src={courImg} alt="courses-icon" /> <span>Courses</span>
        </li>
        <li className="nav-item">
          <img src={friImg} alt="friends-icon" /> <span>Friends</span>
        </li>
        <li className="nav-item">
          <img src={filImg} alt="files-icon" /> <span>Files</span>
        </li>
        <li className="nav-item">
          <img src={plaImg} alt="plans-icon" /> <span>Plans</span>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
