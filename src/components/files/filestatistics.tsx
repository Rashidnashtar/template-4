const FileStatistics = () => {
  return (
    <div className="file-stats">
      <h4>Files Statistics</h4>
      <div className="stat pdf">
        <div className="icon">
          <i className="bi bi-filetype-pdf"></i>
        </div>
        <div className="content">
          <h5>PDF Files</h5>
          <p>130</p>
        </div>
        <p>6.5GB</p>
      </div>
      <div className="stat img">
        <div className="icon">
          <i className="bi bi-images"></i>
        </div>
        <div className="content">
          <h5>Images</h5>
          <p>115 Files</p>
        </div>
        <p>3.5GB</p>
      </div>
      <div className="stat word">
        <div className="icon">
          <i className="bi bi-file-earmark-word"></i>
        </div>
        <div className="content">
          <h5>Word Files</h5>
          <p>110 Files</p>
        </div>
        <p>3.2GB</p>
      </div>
      <div className="stat csv">
        <div className="icon">
          <i className="bi bi-filetype-csv"></i>
        </div>
        <div className="content">
          <h5>CSV Files</h5>
          <p>99 Files</p>
        </div>
        <p>2.9GB</p>
      </div>
      <button>
        <i className="bi bi-chevron-double-up"></i>
        Upload
      </button>
    </div>
  );
};

export default FileStatistics;
