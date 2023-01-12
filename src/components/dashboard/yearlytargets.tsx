import personImg from "../../assets/svgs/profile.svg";
const YearlyTargets: React.FC = () => {
  return (
    <div className="yearly-container">
      <h3>Yearly Targets</h3>
      <p>Targets Of The Year</p>
      <div className="status-wrapper">
        <div className="money">
          <div className="img">$</div>
          <div className="content">
            <h6>Money</h6>
            <p>$20.000</p>
            <div className="progress">
              <span data-width="80%" style={{ width: "80%" }}></span>
            </div>
          </div>
        </div>
        <div className="projects">
          <div className="img">{"</>"}</div>
          <div className="content">
            <h6>Projects</h6>
            <p>24</p>
            <div className="progress">
              <span data-width="55%" style={{ width: "55%" }}></span>
            </div>
          </div>
        </div>
        <div className="team">
          <div className="img">
            <i className="bi bi-person-fill"></i>
          </div>
          <div className="content">
            <h6>Team</h6>
            <p>12</p>
            <div className="progress">
              <span data-width="80%" style={{ width: "80%" }}></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YearlyTargets;
