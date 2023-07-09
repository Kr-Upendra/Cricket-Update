import { Link } from "react-router-dom";
import Upcoming from "./matchComponents/upcoming";

export default function Matches() {
  return (
    <div className="matches home__el">
      <div className="matches__tab">
        <Link to="/upcoming" className="el-upcoming el-tab active">
          Upcoming
        </Link>
        <Link to="/live" className="el-live el-tab">
          Live
        </Link>
        <Link to="/finished" className="el-finished el-tab">
          Finished
        </Link>
      </div>
      <Upcoming />
    </div>
  );
}
