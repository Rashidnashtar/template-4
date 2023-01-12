const SocialStats: React.FC = () => {
  return (
    <div className="social">
      <h3>Social Media Stats</h3>
      <div className="media">
        <div className="icon">
          <i className="bi bi-twitter"></i>
        </div>
        <p>90K Followers</p>
        <span>Follow</span>
      </div>
      <div className="media">
        <div className="icon">
          <i className="bi bi-facebook"></i>
        </div>
        <p>2M Like</p>
        <span>Like</span>
      </div>
      <div className="media">
        <div className="icon">
          <i className="bi bi-youtube"></i>
        </div>
        <p>1M Subs</p>
        <span>Subscribe</span>
      </div>
      <div className="media">
        <div className="icon">
          <i className="bi bi-linkedin"></i>
        </div>
        <p>70K</p>
        <span>Follow</span>
      </div>
    </div>
  );
};

export default SocialStats;
