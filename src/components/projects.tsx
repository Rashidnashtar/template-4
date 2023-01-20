import SectionHeading from "./section-heading";
import "../assets/Css/projects.css";
import ProjectWidget from "./settings/project-widget";
import img1 from "../assets/image/team-01.png";
import img2 from "../assets/image/team-02.png";
import img3 from "../assets/image/team-03.png";
import img4 from "../assets/image/team-04.png";
import img5 from "../assets/image/team-05.png";
const Projects = () => {
  const data = [
    {
      title: "Elzero Dashboard",
      date: "15/10/2021",
      subTitle: "Elzero Dashboard Project Design And Programming And Hosting",
      listImgs: [img1, img2, img3, img4, img5],
      listTags: ["Programming", "Design", "Hosting", "Marketing"],
      progress: 50,
      payment: 2500,
    },
    {
      title: "Academy Portal",
      date: "15/6/2021",
      subTitle: "Academy Portal Project Design And Programming ",
      listImgs: [img3, img4, img5],
      listTags: ["Programming", "Design"],
      progress: 70,
      payment: 1800,
    },
    {
      title: "Chatting Application",
      date: "15/6/2022",
      subTitle: "Chatting Application Project Design ",
      listImgs: [img1, img2, img3],
      listTags: ["Design"],
      progress: 100,
      payment: 950,
    },
    {
      title: "Ahmad Dashboard",
      date: "15/6/2022",
      subTitle: "Ahmad Dashboard Project Design And Programming And Hosting",
      listImgs: [img1, img3, img4, img5],
      listTags: ["Programming", "Design", "Hosting", "Marketing"],
      progress: 60,
      payment: 1700,
    },
    {
      title: "Ahmad Portal",
      date: "15/10/2021",
      subTitle: "Ahmad Portal Project Design And Programming ",
      listImgs: [img1, img2, img3],
      listTags: ["Programming", "Design"],
      progress: 65,
      payment: 850,
    },
    {
      title: "Mohamad Application",
      date: "15/10/2021",
      subTitle: "Mohamad Application Project Design",
      listImgs: [img1, img2, img3],
      listTags: ["Design"],
      progress: 40,
      payment: 2500,
    },
    {
      title: "Mohamad Dashboard",
      date: "15/6/2022",
      subTitle: "Mohamad Dashboard Project Design And Programming And Hosting",
      listImgs: [img1, img2, img3, img4],
      listTags: ["Programming", "Design", "Hosting", "Marketing"],
      progress: 55,
      payment: 1950,
    },
    {
      title: "Mohamad Portal",
      date: "15/10/2021",
      subTitle: "Mohamad Portal Project Design And Programming",
      listImgs: [img1, img2, img3, img4, img5],
      listTags: ["Programming", "Design"],
      progress: 65,
      payment: 1650,
    },
    {
      title: "Ahmad Application",
      date: "15/10/2021",
      subTitle: "Ahmad Application Project Design ",
      listImgs: [img1, img2, img3, img4, img5],
      listTags: ["Design"],
      progress: 90,
      payment: 950,
    },
  ];

  return (
    <div className="projects">
      <SectionHeading title="Projects" />
      <div className="projects-container">
        {data.map((project) => (
          <ProjectWidget {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
