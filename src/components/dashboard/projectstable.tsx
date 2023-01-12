import team1 from "../../assets/image/team-01.png";
import team2 from "../../assets/image/team-02.png";
import team3 from "../../assets/image/team-03.png";
import team4 from "../../assets/image/team-04.png";
const ProjectsTable: React.FC = () => {
  return (
    <div className="projects-table">
      <h3>Projects</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Finish Date</th>
            <th>Client</th>
            <th>Price</th>
            <th>Team</th>
            <th>Status</th>
          </tr>
        </thead>
        <tr>
          <td>Ministry Wikipedia</td>
          <td>10 May 2022</td>
          <td>Ministry</td>
          <td>$5300</td>
          <td className="imgs">
            <img src={team1} alt="team" />
            <img src={team2} alt="team" />
            <img src={team3} alt="team" />
            <img src={team4} alt="team" />
          </td>
          <td>
            <span className="pending">pending</span>
          </td>
        </tr>
        <tr>
          <td>Elzero Shop</td>
          <td>12 Oct 2021</td>
          <td>Elzero Company</td>
          <td>$1500</td>
          <td className="imgs">
            <img src={team2} alt="team" />
            <img src={team3} alt="team" />
            <img src={team4} alt="team" />
          </td>
          <td>
            <span className="in-progress">in progress</span>
          </td>
        </tr>
        <tr>
          <td>Bouba App </td>
          <td>05 Sep 2021</td>
          <td>Bouba</td>
          <td>$800</td>
          <td className="imgs">
            <img src={team1} alt="team" />
            <img src={team2} alt="team" />
          </td>
          <td>
            <span className="completed">Completed</span>
          </td>
        </tr>
        <tr>
          <td>Mahmoud Website </td>
          <td>22 May 2021</td>
          <td>mahmod</td>
          <td>$600</td>
          <td className="imgs">
            <img src={team1} alt="team" />
            <img src={team2} alt="team" />
          </td>
          <td>
            <span className="completed">Completed</span>
          </td>
        </tr>
        <tr>
          <td>Sayed Website </td>
          <td>24 May 2021</td>
          <td>Sayed</td>
          <td>$300</td>
          <td className="imgs">
            <img src={team1} alt="team" />
            <img src={team2} alt="team" />
          </td>
          <td>
            <span className="rejected">Rejected</span>
          </td>
        </tr>
        <tr>
          <td>Arena Application</td>
          <td>01 Mar 2021</td>
          <td>Arena Company </td>
          <td>$2600</td>
          <td className="imgs">
            <img src={team1} alt="team" />
            <img src={team2} alt="team" />
            <img src={team3} alt="team" />
            <img src={team4} alt="team" />
          </td>
          <td>
            <span className="completed">Completed</span>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default ProjectsTable;
