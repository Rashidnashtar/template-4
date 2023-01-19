import actImg1 from "../../assets/image/activity-01.png";
import actImg2 from "../../assets/image/activity-02.png";
import actImg3 from "../../assets/image/activity-03.png";
const LatestActivitise = () => {
  return (
    <div className="profile-widget-container  latest-activitise">
      <h3>Latest Activites</h3>
      <p>Latest Activites Done By The User</p>
      <div className="activity">
        <img src={actImg1} alt="activity" />
        <div className="text">
          <h5>Store</h5>
          <p>Bought The Mastering Python Course</p>
        </div>
        <div className="time">
          <p>18:10</p>
          <p>Yesterday</p>
        </div>
      </div>
      <div className="activity">
        <img src={actImg2} alt="activity" />
        <div className="text">
          <h5>Academy</h5>
          <p>Got The PHP Certificate</p>
        </div>
        <div className="time">
          <p>16:05</p>
          <p>Yesterday</p>
        </div>
      </div>
      <div className="activity">
        <img src={actImg3} alt="activity" />
        <div className="text">
          <h5>Badges</h5>
          <p>Unlock The 10 Skills badge</p>
        </div>
        <div className="time">
          <p>18:05</p>
          <p>Yesterday</p>
        </div>
      </div>
      <div className="activity">
        <img src={actImg1} alt="activity" />
        <div className="text">
          <h5>Store</h5>
          <p>Bought The Mastering Typescr Course</p>
        </div>
        <div className="time">
          <p>12:05</p>
          <p>Yesterday</p>
        </div>
      </div>
    </div>
  );
};

export default LatestActivitise;
