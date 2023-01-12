import pdf from "../../assets/svgs/pdf.svg";
import avi from "../../assets/svgs/avi.svg";
import psd from "../../assets/svgs/psd.svg";
import zip from "../../assets/svgs/zip.svg";
import dll from "../../assets/svgs/dll.svg";
import eps from "../../assets/svgs/eps.svg";
const LatestUpdates = () => {
  return (
    <div className="latest-updates">
      <h3>Latest Uploads</h3>
      <div className="update-item">
        <img src={pdf} alt="pdf" />
        <div className="content">
          <h5>My-file.pdf</h5>
          <p>Elzero</p>
        </div>
        <p>2.9mb</p>
      </div>
      <div className="update-item">
        <img src={avi} alt="" />
        <div className="content">
          <h5>My-Video-File.avi</h5>
          <p>Admin</p>
        </div>
        <p>4.9mb</p>
      </div>
      <div className="update-item">
        <img src={psd} alt="" />
        <div className="content">
          <h5>My-Psd-File.pdf</h5>
          <p>Rashid</p>
        </div>
        <p>4.5mb</p>
      </div>
      <div className="update-item">
        <img src={zip} alt="" />
        <div className="content">
          <h5>My-Zip-file</h5>
          <p>User</p>
        </div>
        <p>8.9mb</p>
      </div>
      <div className="update-item">
        <img src={dll} alt="" />
        <div className="content">
          <h5>My-Dll-File.pdf</h5>
          <p>Admin</p>
        </div>
        <p>4.9mb</p>
      </div>
      <div className="update-item">
        <img src={eps} alt="" />
        <div className="content">
          <h5>My-Eps-File.pdf</h5>
          <p>Designer</p>
        </div>
        <p>8.9mb</p>
      </div>
    </div>
  );
};

export default LatestUpdates;
