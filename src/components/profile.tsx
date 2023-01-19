import "../assets/Css/profile.css";
import SectionHeading from "./section-heading";
import MainProfileWidget from "./profile/mainprofilewidget";
const Profile = () => {
  return (
    <div className="profile">
      <SectionHeading title="Profile" />
      <div className="profile-container">
        <MainProfileWidget />
      </div>
    </div>
  );
};

export default Profile;
