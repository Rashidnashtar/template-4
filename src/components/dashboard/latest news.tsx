import firstImg from "../../assets/image/first-latest.jfif";
import secondImg from "../../assets/image/second-latest.jpg";
import thirdImg from "../../assets/image/third-latest.jpg";
import fourthImg from "../../assets/image/fourth-latest.png";
const LatestNews = () => {
  return (
    <div className="latestnews">
      <h3>Latest News</h3>
      <div className="latest-item">
        <img src={firstImg} alt="img" />
        <div className="content">
          <h5>Created SASS Section</h5>
          <p>New SASS Exampels & Tutorials</p>
        </div>
        <p>3 Days Ago</p>
      </div>
      <div className="latest-item">
        <img src={secondImg} alt="img" />
        <div className="content">
          <h5>Changed The Design</h5>
          <p>A Brand New Website Design</p>
        </div>
        <p>5 Days Ago</p>
      </div>
      <div className="latest-item">
        <img src={thirdImg} alt="img" />
        <div className="content">
          <h5>Team Increased</h5>
          <p>3 Developers joined The Team</p>
        </div>
        <p>7 Days Ago</p>
      </div>
      <div className="latest-item">
        <img src={fourthImg} alt="img" />
        <div className="content">
          <h5>Added Payment Gateway</h5>
          <p>Many New Payment Gateways Added</p>
        </div>
        <p>9 Days Ago</p>
      </div>
    </div>
  );
};

export default LatestNews;
