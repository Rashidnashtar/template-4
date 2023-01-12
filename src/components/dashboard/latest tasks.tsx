const LatestTasks: React.FC = () => {
  return (
    <div className="latest-tasks">
      <h3>Latest Tasks</h3>
      <div className="task-cont">
        <div className="content">
          <h5>Record One New Video</h5>
          <p>Record Python Create Exe Project</p>
        </div>
        <div className="icon">
          <i className="bi bi-trash3"></i>
        </div>
      </div>
      <div className="task-cont">
        <div className="content">
          <h5>Write Artical</h5>
          <p>Write Low Level vs High Level Languages </p>
        </div>
        <div className="icon">
          <i className="bi bi-trash3"></i>
        </div>
      </div>
      <div className="task-cont">
        <div className="content">
          <h5>Finish Project</h5>
          <p> Publish Academy Programming Project </p>
        </div>
        <div className="icon">
          <i className="bi bi-trash3"></i>
        </div>
      </div>
      <div className="task-cont content-done">
        <div className="content ">
          <h5>Attend The meeting</h5>
          <p>Attend The Project Businiss Analyisis Meeting </p>
        </div>
        <div className="icon">
          <i className="bi bi-trash3"></i>
        </div>
      </div>
      <div className="task-cont">
        <div className="content">
          <h5>Finish Lesson</h5>
          <p>Finish Teaching Flex Box</p>
        </div>
        <div className="icon">
          <i className="bi bi-trash3"></i>
        </div>
      </div>
    </div>
  );
};

export default LatestTasks;
