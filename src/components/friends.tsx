import "../assets/Css/friends.css";
import SectionHeading from "./section-heading";
import friendImg1 from "../assets/image/friend-01.jpg";
import friendImg2 from "../assets/image/friend-02.jpg";
import friendImg3 from "../assets/image/friend-03.jpg";
import friendImg4 from "../assets/image/friend-04.jpg";
import friendImg5 from "../assets/image/friend-05.jpg";
import Friend from "./friends/friend";
const Friends = () => {
  const data = [
    {
      photo: friendImg1,
      name: "Ahmed Nasser",
      proff: "JavaScript Developer",
      friendsCount: 99,
      projectsCount: 15,
      acticlesCount: 25,
      joiningDate: "Joined 02/10/2021",
      isVIP: true,
    },
    {
      photo: friendImg2,
      name: "Rashid nashtar",
      proff: "Cloud Developer",
      friendsCount: 30,
      projectsCount: 11,
      acticlesCount: 12,
      joiningDate: "Joined 02/12/2022",
      isVIP: false,
    },
    {
      photo: friendImg3,
      name: "saif Alden",
      proff: "Mobile Developer",
      friendsCount: 86,
      projectsCount: 8,
      acticlesCount: 33,
      joiningDate: "Joined 11/10/2020",
      isVIP: false,
    },
    {
      photo: friendImg4,
      name: "Moataz abdulbaki",
      proff: "Back-End Developer",
      friendsCount: 120,
      projectsCount: 40,
      acticlesCount: 44,
      joiningDate: "Joined 12/11/2020",
      isVIP: false,
    },
    {
      photo: friendImg5,
      name: "Rashid Rashid",
      proff: "Algorithm Developer",
      friendsCount: 80,
      projectsCount: 30,
      acticlesCount: 18,
      joiningDate: "Joined 01/08/2020",
      isVIP: true,
    },
    {
      photo: friendImg5,
      name: "Rashid Rashid",
      proff: "Algorithm Developer",
      friendsCount: 80,
      projectsCount: 30,
      acticlesCount: 18,
      joiningDate: "Joined 01/08/2020",
      isVIP: false,
    },
    {
      photo: friendImg2,
      name: "Rashid nashtar",
      proff: "Cloud Developer",
      friendsCount: 30,
      projectsCount: 11,
      acticlesCount: 12,
      joiningDate: "Joined 02/12/2022",
      isVIP: false,
    },
    {
      photo: friendImg3,
      name: "saif Alden",
      proff: "Mobile Developer",
      friendsCount: 86,
      projectsCount: 8,
      acticlesCount: 33,
      joiningDate: "Joined 11/10/2020",
      isVIP: false,
    },
    {
      photo: friendImg4,
      name: "Moataz abdulbaki",
      proff: "Back-End Developer",
      friendsCount: 120,
      projectsCount: 40,
      acticlesCount: 44,
      joiningDate: "Joined 12/11/2020",
      isVIP: false,
    },

    {
      photo: friendImg1,
      name: "Ahmed Nasser",
      proff: "JavaScript Developer",
      friendsCount: 99,
      projectsCount: 15,
      acticlesCount: 25,
      joiningDate: "Joined 02/10/2021",
      isVIP: true,
    },
  ];
  return (
    <div className="friends">
      <SectionHeading title="Friends" />
      <div className="friends-container">
        {data.map((friend) => (
          <Friend {...friend} />
        ))}
      </div>
    </div>
  );
};

export default Friends;
