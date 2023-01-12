import "../assets/Css/heading.css";
import searchImg from "../assets/svgs/search.svg";
import bellImg from "../assets/svgs/bell.svg";
import profileImg from "../assets/image/profile-img.webp";
const Heading: React.FC = () => {
  return (
    <div className="site-heading">
      <div className="search-wrapper">
        <input type="text" placeholder="Type A keyword"></input>
        <img src={searchImg} alt="search-icon" />
      </div>
      <div className="content">
        <span></span>
        <img className="bell" src={bellImg} alt="bell-icon" />
        <img className="profile-img" src={profileImg} alt="profile-img" />
      </div>
    </div>
  );
};

export default Heading;
