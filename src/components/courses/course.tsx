import conImg from "../../assets/image/team-01.png";
import courseImg from "../../assets/image/course-01.jpg";
interface props {
  instarctorImg: string;
  backImg: string;
  title: string;
  subTitles: string;
  watchers: string;
  price: string;
}
const Course: React.FC<props> = ({
  instarctorImg,
  backImg,
  title,
  subTitles,
  watchers,
  price,
}) => {
  return (
    <div className="course">
      <div className="main-img" style={{ backgroundImage: `url(${backImg})` }}>
        {/* <img src={backImg} alt="course" /> */}
      </div>
      <div className="content">
        <h4>{title}</h4>
        <p>{subTitles}</p>
      </div>
      <div className="footer">
        <p className="people">
          <i className="bi bi-person"></i>
          {watchers}
        </p>
        <button>Course Info</button>
        <p className="cash">$ {price}</p>
      </div>
      <img className="inst-img" src={instarctorImg} alt="Instracor" />
    </div>
  );
};

export default Course;
