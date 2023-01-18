import { useState } from "react";
const BackupManager = () => {
  const [active, setActive] = useState(-1);
  return (
    <div className="settings-widget backup-manager">
      <h3>Backup Manager</h3>
      <p>Control Backup Time And Location</p>
      <form className="time">
        <div className="choose">
          <input type="radio" name="time" id="r1" />
          <label htmlFor="r1">Daily</label>
        </div>
        <div className="choose">
          <input type="radio" name="time" id="r2" />
          <label htmlFor="r2">Weekly</label>
        </div>
        <div className="choose">
          <input type="radio" name="time" id="r3" />
          <label htmlFor="r3">Monthly</label>
        </div>
      </form>
      <form className="back">
        <label
          onClick={() => {
            setActive(1);
          }}
          className={`${active == 1 ? "active" : ""}`}
          htmlFor="m"
        >
          <input type="radio" name="meg" id="m" />
          <i className="bi bi-database-fill"></i>
          <p>Megaman</p>
        </label>
        <label
          className={`${active == 2 ? "active" : ""}`}
          onClick={() => {
            setActive(2);
          }}
          htmlFor="z"
        >
          <input type="radio" name="meg" id="z" />
          <i className="bi bi-database-fill"></i>
          <p>Zero</p>
        </label>
        <label
          className={`${active == 3 ? "active" : ""}`}
          onClick={() => {
            setActive(3);
          }}
          htmlFor="s"
        >
          <input type="radio" name="meg" id="s" />
          <i className="bi bi-database-fill"></i>
          <p>Sigma</p>
        </label>
      </form>
    </div>
  );
};

export default BackupManager;
