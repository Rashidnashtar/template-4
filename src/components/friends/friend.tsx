import freindImg from "../../assets/image/friend-01.jpg";
interface props {
  photo: string;
  name: string;
  proff: string;
  friendsCount: number;
  projectsCount: number;
  acticlesCount: number;
  joiningDate: string;
  isVIP: boolean;
}
const Friend: React.FC<props> = ({
  photo,
  name,
  proff,
  friendsCount,
  projectsCount,
  acticlesCount,
  isVIP,
}) => {
  return (
    <div className="friend">
      <div className="hero">
        <img src={photo} alt="" />
        <h4>{name}</h4>
        <p>{proff}</p>
      </div>
      <div className="info">
        <p>
          <i className="bi bi-emoji-smile"></i> {friendsCount} friends
        </p>
        <p>
          <i className="bi bi-link"></i> {projectsCount} projects
        </p>
        <p>
          <i className="bi bi-text-paragraph"></i> {acticlesCount} articles
        </p>
        {isVIP && <div className="vip">VIP</div>}
      </div>
      <div className="actions">
        <p>Joined 02/10/2021</p>
        <div className="btns">
          <button className="pro">Profile</button>
          <button className="remove">Remove</button>
        </div>
      </div>
      <div className="floating-icons">
        <div className="phone">
          <i className="bi bi-telephone-fill"></i>
        </div>
        <div className="mail">
          <i className="bi bi-envelope"></i>
        </div>
      </div>
    </div>
  );
};

export default Friend;
