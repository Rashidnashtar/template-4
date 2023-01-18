const SiteControl = () => {
  return (
    <div className="settings-widget site-control ">
      <h3>Site Control</h3>
      <p>Control The Website If There Is Maintenance</p>
      <div className="toggle-control">
        <div className="content">
          <h4>Website Control</h4>
          <p>Open/Close Website And Type The Reasone</p>
        </div>
        <label htmlFor="active">
          <input type="checkbox" name="active" id="active" />
          <span></span>
        </label>
      </div>
      <textarea name="tex" placeholder="Close Message Content" />
    </div>
  );
};

export default SiteControl;
