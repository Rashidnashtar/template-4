import profileImg from "../../assets/image/profile-img.webp";
const Welcome: React.FC = () => {
  return (
    <div className="welcome">
      <div className="heading">
        <h4>Welcome</h4>
        <h5>Rashid</h5>
        <img src={profileImg} alt="profile-img" />
      </div>
      <div className="content">
        <div className="status">
          <div className="dev">
            <h5>Rashid Nashtar</h5>
            <p>Developer</p>
          </div>
          <div className="proj">
            <h5>20</h5>
            <p>Projects</p>
          </div>
          <div className="earn">
            <h5>$90000</h5>
            <p>Earned</p>
          </div>
        </div>
        <button className="btn">Profile</button>
      </div>
    </div>
  );
};

export default Welcome;
