const Reminders = () => {
  return (
    <div className="reminders">
      <h3>Reminders</h3>
      <div className="reminder-wrapper">
        <div className="content">
          <h5>Check My Tasks List</h5>
          <p>28/09/2022- 12:00am</p>
        </div>
      </div>
      <div className="reminder-wrapper">
        <div className="content">
          <h5>Check My Projects</h5>
          <p>26/10/2022- 12:00am</p>
        </div>
      </div>
      <div className="reminder-wrapper">
        <div className="content">
          <h5>Call All My Clients</h5>
          <p>05/11/2022- 12:00am</p>
        </div>
      </div>
      <div className="reminder-wrapper">
        <div className="content">
          <h5>Finish The Development Workshop</h5>
          <p>20/12/2022- 12:00am</p>
        </div>
      </div>
    </div>
  );
};

export default Reminders;
