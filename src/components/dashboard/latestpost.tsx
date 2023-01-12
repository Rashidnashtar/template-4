import profile from "../../assets/image/profile-img.webp";
const LatestPost: React.FC = () => {
  return (
    <div className="latest-post">
      <h3>Latest Post</h3>
      <div className="head">
        <img src={profile} alt="profile" />
        <div className="content">
          <h4>Rashid Nashtar</h4>
          <p>About 3 Hours Ago</p>
        </div>
      </div>
      <p>
        you can fool all of the poeple some of the time , and some of the people
        all of the time ,but you can't fool all of the people all of the time
      </p>
      <div className="footer">
        <div className="like">
          <i className="bi bi-heart"></i>
          <span> 1.8K</span>
        </div>
        <div className="comment">
          <i className="bi bi-chat"></i>
          <span> 500</span>
        </div>
      </div>
    </div>
  );
};

export default LatestPost;
