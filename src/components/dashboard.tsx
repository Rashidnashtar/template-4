import "../assets/Css/dashboard.css";
import SectionHeading from "./section-heading";
import Welcome from "./dashboard/welcome";
import QuickDraft from "./dashboard/quickdraft";
import YearlyTargets from "./dashboard/yearlytargets";
import Tickets from "./dashboard/tickets";
import LatestNews from "./dashboard/latest news";
import LatestTasks from "./dashboard/latest tasks";
import TopSearch from "./dashboard/topsearch";
import LatestUpdates from "./dashboard/latestupdates";
import LastProjectProgress from "./dashboard/lastprojectprogress";
import Reminders from "./dashboard/Reminders";
import LatestPost from "./dashboard/latestpost";
import SocialStats from "./dashboard/socialstats";
import ProjectsTable from "./dashboard/projectstable";
const Dashboard: React.FC = () => {
  return (
    <div className="dashboard">
      <SectionHeading title="Dashboard" />
      <div className="section-container">
        <Welcome />
        <QuickDraft />
        <YearlyTargets />
        <Tickets />
        <LatestNews />
        <LatestTasks />
        <TopSearch />
        <LatestUpdates />
        <LastProjectProgress />
        <Reminders />
        <LatestPost />
        <SocialStats />
        <ProjectsTable />
      </div>
    </div>
  );
};

export default Dashboard;
