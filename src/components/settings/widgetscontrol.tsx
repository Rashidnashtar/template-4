const WidgetsControl = () => {
  return (
    <div className="settings-widget widget-control">
      <h3>Widgets Control</h3>
      <p>Show/Hide Widgets</p>
      <div className="chose">
        <input type="checkbox" name="quick" />
        <label htmlFor="quick">Quick Draft</label>
      </div>
      <div className="chose">
        <input type="checkbox" name="yearly" />
        <label htmlFor="yearly">Yearly Targets</label>
      </div>
      <div className="chose">
        <input type="checkbox" name="tickets" />
        <label htmlFor="tickets">Tickets Statistics</label>
      </div>
      <div className="chose">
        <input type="checkbox" name="latest" />
        <label htmlFor="latest">Latest News</label>
      </div>
      <div className="chose">
        <input type="checkbox" name="tasks" />
        <label htmlFor="tasks">Latest Tasks</label>
      </div>
      <div className="chose">
        <input type="checkbox" name="top" />
        <label htmlFor="top"> Top Search Items</label>
      </div>
    </div>
  );
};

export default WidgetsControl;
