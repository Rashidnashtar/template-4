import pdfimg from "../../assets/svgs/pdf.svg";
interface props {
  fileImg: string;
  title: string;
  by: string;
  date: string;
  size: string;
}
const FileWidget: React.FC<props> = ({ fileImg, title, by, date, size }) => {
  return (
    <div className="file-widget">
      <div className="hero">
        <div className="floating-icon">
          <i className="bi bi-cloud-download-fill"></i>
        </div>
        <img src={fileImg} alt="pdf" />
        <h4>{title}</h4>
        <p>{by}</p>
      </div>
      <div className="footer">
        <p>{date}</p>
        <p>{size}</p>
      </div>
    </div>
  );
};

export default FileWidget;
