interface props {
  title: string;
  date: string;
  subTitle: string;
  listImgs: string[];
  listTags: string[];
  progress: number;
  payment: number;
}

const ProjectWidget: React.FC<props> = ({
  title,
  date,
  subTitle,
  listImgs,
  listTags,
  progress,
  payment,
}) => {
  let progressColor;
  if (progress > 50 && progress !== 100) {
    progressColor = "#22c55e";
  } else if (progress <= 50) {
    progressColor = "red";
  } else {
    progressColor = "#0075ff";
  }
  return (
    <div className="project-widget">
      <p className="floating-date">{date}</p>
      <h3>{title}</h3>
      <p className="title-p">{subTitle}</p>
      <div className="imgs">
        {listImgs.map((img) => (
          <img src={img} alt="person" />
        ))}
      </div>
      <div className="tags">
        {listTags.map((tag) => (
          <p className="tag">{tag}</p>
        ))}
      </div>
      <div className="progress">
        <div className="prog">
          <span
            style={{ width: `${progress}%`, backgroundColor: progressColor }}
          ></span>
        </div>
        <p>$ {payment}</p>
      </div>
    </div>
  );
};

export default ProjectWidget;
