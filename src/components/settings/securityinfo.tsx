const SecurityInfo = () => {
  return (
    <div className="settings-widget security-info">
      <h3>Security Info</h3>
      <p>Security Information About Your Account</p>
      <div className="password">
        <div className="content">
          <h4>Password</h4>
          <p>Last Change On 25/10/2022</p>
        </div>
        <button>Change</button>
      </div>
      <div className="two">
        <div className="content">
          <h4>Two-Factor Authentication</h4>
          <p>Enable/Disable The Feature</p>
        </div>
        <label htmlFor="two">
          <input type="checkbox" name="two" id="two" />
          <span></span>
        </label>
      </div>
      <div className="devices">
        <div className="content">
          <h4>Devices</h4>
          <p>Check The Login Devices List</p>
        </div>
        <button>Devices</button>
      </div>
    </div>
  );
};

export default SecurityInfo;
