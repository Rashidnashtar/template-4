const Tickets: React.FC = () => {
  return (
    <div className="tickets">
      <h3>Tickets Statistics</h3>
      <p>Everything About Support Tickets</p>
      <div className="tickets-wrapper">
        <div className="ticket-item">
          <i
            style={{ color: "#f59e0b" }}
            className="bi bi-ticket-perforated total"
          ></i>
          <h3>2500</h3>
          <p>Total</p>
        </div>
        <div className="ticket-item">
          <i style={{ color: "#2180ff" }} className="bi bi-arrow-clockwise pending"></i>
          <h3>500</h3>
          <p>Pending</p>
        </div>
        <div className="ticket-item">
          <i style={{ color: "#2ac764" }} className="bi bi-check-circle"></i>
          <h3>1900</h3>
          <p>closed</p>
        </div>
        <div className="ticket-item">
          <i style={{ color: "#f65747" }} className="bi bi-x-square"></i>
          <h3>100</h3>
          <p>Deleted</p>
        </div>
      </div>
    </div>
  );
};

export default Tickets;
