const WidgetsControl = () => {
  return (
    <div className="settings-widget widget-control">
      <h3>Widgets Control</h3>
      <p>Show/Hide Widgets</p>
      <div className="chose">
        <input type="checkbox" id="quick" />
        <label htmlFor="quick">Quick Draft</label>
      </div>
      <div className="chose">
        <input type="checkbox" id="yearly" />
        <label htmlFor="yearly">Yearly Targets</label>
      </div>
      <div className="chose">
        <input type="checkbox" id="tickets" />
        <label htmlFor="tickets">Tickets Statistics</label>
      </div>
      <div className="chose">
        <input type="checkbox" id="latest" />
        <label htmlFor="latest">Latest News</label>
      </div>
      <div className="chose">
        <input type="checkbox" id="tasks" />
        <label htmlFor="tasks">Latest Tasks</label>
      </div>
      <div className="chose">
        <input type="checkbox" id="top" />
        <label htmlFor="top"> Top Search Items</label>
      </div>
    </div>
  );
};

export default WidgetsControl;
