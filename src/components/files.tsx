import "../assets/Css/files.css";
import pdf from "../assets/svgs/pdf.svg";
import psd from "../assets/svgs/psd.svg";
import zip from "../assets/svgs/zip.svg";
import dll from "../assets/svgs/dll.svg";
import eps from "../assets/svgs/eps.svg";
import png from "../assets/svgs/png.svg";
import avi from "../assets/svgs/avi.svg";
import FileWidget from "./files/filewidget";
import FileStatistics from "./files/filestatistics";
import SectionHeading from "./section-heading";
const Files = () => {
  const data = [
    {
      fileImg: pdf,
      title: "my-file",
      by: "Rashido",
      date: "20/06/2020",
      size: "5.5MB",
    },
    {
      fileImg: psd,
      title: "myfileoo",
      by: "Rashidoo",
      date: "20/12/2021",
      size: "7.5MB",
    },
    {
      fileImg: zip,
      title: "filing",
      by: "Rashiddd",
      date: "22/06/2021",
      size: "2.5MB",
    },
    {
      fileImg: eps,
      title: "secret.eps",
      by: "R1212",
      date: "27/5/2022",
      size: "100.0MB",
    },
    {
      fileImg: png,
      title: "filing.png",
      by: "Rashi",
      date: "22/12/2022",
      size: "6.5MB",
    },
    {
      fileImg: avi,
      title: "filing.avi",
      by: "Rashidd",
      date: "22/12/2022",
      size: "12.5MB",
    },
    {
      fileImg: png,
      title: "filing.png",
      by: "Rashi",
      date: "22/12/2022",
      size: "6.5MB",
    },
    {
      fileImg: pdf,
      title: "my-file",
      by: "Rashido",
      date: "20/06/2020",
      size: "5.5MB",
    },
    {
      fileImg: avi,
      title: "filing.avi",
      by: "Rashidd",
      date: "22/12/2022",
      size: "12.5MB",
    },
    {
      fileImg: zip,
      title: "filing",
      by: "Rashiddd",
      date: "22/06/2021",
      size: "2.5MB",
    },
    {
      fileImg: eps,
      title: "secret.eps",
      by: "R1212",
      date: "27/5/2022",
      size: "100.0MB",
    },
    {
      fileImg: psd,
      title: "myfileoo",
      by: "Rashidoo",
      date: "20/12/2021",
      size: "7.5MB",
    },
    {
      fileImg: zip,
      title: "filing",
      by: "Rashiddd",
      date: "22/06/2021",
      size: "2.5MB",
    },
    {
      fileImg: pdf,
      title: "my-file",
      by: "Rashido",
      date: "20/06/2020",
      size: "5.5MB",
    },
    {
      fileImg: psd,
      title: "myfileoo",
      by: "Rashidoo",
      date: "20/12/2021",
      size: "7.5MB",
    },
    {
      fileImg: zip,
      title: "filing",
      by: "Rashiddd",
      date: "22/06/2021",
      size: "2.5MB",
    },
    {
      fileImg: eps,
      title: "secret.eps",
      by: "R1212",
      date: "27/5/2022",
      size: "100.0MB",
    },
    {
      fileImg: pdf,
      title: "my-file",
      by: "Rashido",
      date: "20/06/2020",
      size: "5.5MB",
    },
    {
      fileImg: avi,
      title: "filing.avi",
      by: "Rashidd",
      date: "22/12/2022",
      size: "12.5MB",
    },
    {
      fileImg: eps,
      title: "secret.eps",
      by: "R1212",
      date: "27/5/2022",
      size: "100.0MB",
    },
  ];
  return (
    <div className="files">
      <SectionHeading title="Files" />
      <div className="main-container">
        <div className="files-container">
          {data.map((file) => (
            <FileWidget {...file} />
          ))}
        </div>
        <FileStatistics />
      </div>
    </div>
  );
};

export default Files;
