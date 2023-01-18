const SocialInfo = () => {
  return (
    <div className="settings-widget social-info">
      <h3>Socail Info</h3>
      <p>Social Media Information</p>
      <div className="info">
        <div className="icon">
          <i className="bi bi-twitter"></i>
        </div>
        <p>Twitter Username</p>
      </div>
      <div className="info">
        <div className="icon">
          <i className="bi bi-facebook"></i>
        </div>
        <p>Facebook Username</p>
      </div>
      <div className="info">
        <div className="icon">
          <i className="bi bi-linkedin"></i>
        </div>
        <p>linkedin Username</p>
      </div>
      <div className="info">
        <div className="icon">
          <i className="bi bi-youtube"></i>
        </div>
        <p>Youtube Username</p>
      </div>
    </div>
  );
};

export default SocialInfo;
