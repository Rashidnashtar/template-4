import SectionHeading from "./section-heading";
import "../assets/Css/courses.css";
import istimg1 from "../assets/image/team-01.png";
import istimg2 from "../assets/image/team-02.png";
import istimg3 from "../assets/image/team-03.png";
import istimg4 from "../assets/image/team-04.png";
import istimg5 from "../assets/image/team-05.png";
import backimg1 from "../assets/image/course-01.jpg";
import backimg2 from "../assets/image/course-02.jpg";
import backimg3 from "../assets/image/course-03.jpg";
import backimg4 from "../assets/image/course-04.jpg";
import backimg5 from "../assets/image/course-05.jpg";
import Course from "./courses/course";
const Courses = () => {
  const data = [
    {
      instarctorImg: istimg1,
      backImg: backimg1,
      title: "Mastering Web Design",
      subTitles:
        "Master The Art Of Web Designing And Mocking Prototyping And Creating Web Design Architicture",
      watchers: "950",
      price: "165",
    },
    {
      instarctorImg: istimg2,
      backImg: backimg2,
      title: "data Structure And Algorithms",
      subTitles:
        "Master The Art Ofdata Structure And Algorithms And Famous Algorithms like Sorting ,Dividing And Conquering ",
      watchers: "1150",
      price: "210",
    },
    {
      instarctorImg: istimg3,
      backImg: backimg3,
      title: "Responsive Web Design",
      subTitles:
        "Mastering Responsive Web Designing And Media Queries And know Everthing About BreakPoints",
      watchers: "950",
      price: "250",
    },
    {
      instarctorImg: istimg4,
      backImg: backimg4,
      title: "Mastering Python",
      subTitles:
        "Master  Python To Prepare For Data Science And AI And Automating Things in Your Life",
      watchers: "950",
      price: "250",
    },
    {
      instarctorImg: istimg5,
      backImg: backimg5,
      title: "PHP Examples",
      subTitles:
        "PHP Tutorials And Examples And Practice On Web Application And Connecting With Database",
      watchers: "850",
      price: "150",
    },
    {
      instarctorImg: istimg1,
      backImg: backimg1,
      title: "Mastering Web Design",
      subTitles:
        "Master The Art Of Web Designing And Mocking Prototyping And Creating Web Design Architicture",
      watchers: "950",
      price: "165",
    },
    {
      instarctorImg: istimg2,
      backImg: backimg2,
      title: "data Structure And Algorithms",
      subTitles:
        "Master The Art Ofdata Structure And Algorithms And Famous Algorithms like Sorting ,Dividing And Conquering ",
      watchers: "1150",
      price: "210",
    },
    {
      instarctorImg: istimg3,
      backImg: backimg3,
      title: "Responsive Web Design",
      subTitles:
        "Mastering Responsive Web Designing And Media Queries And know Everthing About BreakPoints",
      watchers: "950",
      price: "250",
    },
    {
      instarctorImg: istimg4,
      backImg: backimg4,
      title: "Mastering Python",
      subTitles:
        "Master  Python To Prepare For Data Science And AI And Automating Things in Your Life",
      watchers: "950",
      price: "250",
    },
    {
      instarctorImg: istimg5,
      backImg: backimg5,
      title: "PHP Examples",
      subTitles:
        "PHP Tutorials And Examples And Practice On Web Application And Connecting With Database",
      watchers: "850",
      price: "150",
    },
    {
      instarctorImg: istimg1,
      backImg: backimg1,
      title: "Mastering Web Design",
      subTitles:
        "Master The Art Of Web Designing And Mocking Prototyping And Creating Web Design Architicture",
      watchers: "950",
      price: "165",
    },
    {
      instarctorImg: istimg2,
      backImg: backimg2,
      title: "data Structure And Algorithms",
      subTitles:
        "Master The Art Ofdata Structure And Algorithms And Famous Algorithms like Sorting ,Dividing And Conquering ",
      watchers: "1150",
      price: "210",
    },
    {
      instarctorImg: istimg3,
      backImg: backimg3,
      title: "Responsive Web Design",
      subTitles:
        "Mastering Responsive Web Designing And Media Queries And know Everthing About BreakPoints",
      watchers: "950",
      price: "250",
    },
    {
      instarctorImg: istimg4,
      backImg: backimg4,
      title: "Mastering Python",
      subTitles:
        "Master  Python To Prepare For Data Science And AI And Automating Things in Your Life",
      watchers: "950",
      price: "250",
    },
    {
      instarctorImg: istimg5,
      backImg: backimg5,
      title: "PHP Examples",
      subTitles:
        "PHP Tutorials And Examples And Practice On Web Application And Connecting With Database",
      watchers: "850",
      price: "150",
    },
  ];
  return (
    <div className="courses">
      <SectionHeading title="Courses" />
      <div className="courses-container">
        {data.map((course) => (
          <Course {...course} />
        ))}
      </div>
    </div>
  );
};

export default Courses;
