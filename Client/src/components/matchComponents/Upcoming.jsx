import "./upcoming.css";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Upcoming() {
  const [upcomingData, setUpcomingData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "http://127.0.0.1:4545/matches/upcoming"
        );
        setUpcomingData(response.data.data);
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, []);

  const showRemainingTime = (givenTime) => {
    const currentTime = new Date();
    const given = new Date(givenTime);
    const timeDiff = given - currentTime;
    let remainingDays = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    let remainingHours = Math.floor(
      (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let remainingMinutes = Math.floor(
      (timeDiff % (1000 * 60 * 60)) / (1000 * 60)
    );
    let remainingSeconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
    if (remainingDays < 0) remainingDays = 0;
    if (remainingHours < 0) remainingHours = 0;
    if (remainingMinutes < 0) remainingMinutes = 0;
    if (remainingSeconds < 0) remainingSeconds = 0;

    const remainingTime = `${remainingDays}d ${remainingHours}h ${remainingMinutes}m ${remainingSeconds}s`;
    return remainingTime;
  };

  console.log(upcomingData);

  return (
    <div className="upcoming">
      <div className="match__list">
        {upcomingData.map((match, key) => (
          <div className="match__el" key={key}>
            <div className="el__team team__1">
              <img
                className="el__team--img"
                src={`${match.t1img}`}
                alt="Team 1"
              />
              <span className="el__team--name">{match.t1.substring(0, 3)}</span>
            </div>
            <div className="match__details">
              <span className="el__matchtype">{match.matchType}</span>
              <span className="el__matchvs">VS</span>
              <span className="el__matchtime">
                {showRemainingTime(match.dateTimeGMT)}
              </span>
            </div>
            <div className="el__team team__2">
              <span className="el__team--name">{match.t2.substring(0, 3)}</span>
              <img
                className="el__team--img"
                src={`${match.t2img}`}
                alt="Team 1"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
