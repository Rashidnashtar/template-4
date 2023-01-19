import "../assets/Css/profile.css";
import SectionHeading from "./section-heading";
import MainProfileWidget from "./profile/mainprofilewidget";
import MySkills from "./profile/myskills";
import LatestActivitise from "./profile/latest-activitise";
const Profile = () => {
  return (
    <div className="profile">
      <SectionHeading title="Profile" />
      <div className="profile-container">
        <MainProfileWidget />
        <MySkills />
        <LatestActivitise />
      </div>
    </div>
  );
};

export default Profile;
