import "../assets/Css/settings.css";
import SectionHeading from "./section-heading";
import SiteControl from "./settings/sitecontrol";
import GeneralInfo from "./settings/generalinfo";
import SecurityInfo from "./settings/securityinfo";
import SocialInfo from "./settings/socialinfo";
import WidgetsControl from "./settings/widgetscontrol";
import BackupManager from "./settings/backupmanager";
const Settings: React.FC = () => {
  return (
    <div className="settings">
      <SectionHeading title="Settings" />
      <div className="settings-container">
        <SiteControl />
        <GeneralInfo />
        <SecurityInfo />
        <SocialInfo />
        <WidgetsControl />
        <BackupManager />
      </div>
    </div>
  );
};

export default Settings;
