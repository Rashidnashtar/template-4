import "../assets/Css/sectionheading.css";
interface props {
  title: string;
}
const SectionHeading: React.FC<props> = ({ title }) => {
  return <h2 className="section-heading">{title}</h2>;
};

export default SectionHeading;
