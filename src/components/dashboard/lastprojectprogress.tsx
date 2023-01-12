import rocket from "../../assets/image/project.png";
const LastProjectProgress: React.FC = () => {
  return (
    <div className="last-project">
      <h3>Last Project Progress</h3>
      <div className="progress-wrapper">
        <div className="progress">
          <span className="active"></span>
          <span className="active"></span>
          <span className="active"></span>
          <span></span>
          <span></span>
        </div>
        <div className="text">
          <p>Got The Project</p>
          <p>Started The Project</p>
          <p>The Project About To Finish</p>
          <p>Test The Project</p>
          <p>Finish The Project & Got The Money</p>
        </div>
      </div>
      <img src={rocket} alt="rocket-img" />
    </div>
  );
};

export default LastProjectProgress;
