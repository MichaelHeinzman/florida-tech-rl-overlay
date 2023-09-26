export const getColorsFromTeam = (team, colors) => {
  return team === 0 ? colors?.[0] : colors?.[1];
};

export const convertSecondsToMinutesAndSeconds = (totalSeconds) => {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
  return `${minutes}:${formattedSeconds}`;
};

import Save from "../assets/stat-icons/Save_points_icon.webp";
import Savior from "../assets/stat-icons/Savior_points_icon.webp";
import Goal from "../assets/stat-icons/Goal_points_icon.webp";
import Assist from "../assets/stat-icons/Assist_points_icon.webp";
import Playmaker from "../assets/stat-icons/Playmaker_points_icon.webp";
import HatTrick from "../assets/stat-icons/Hat_Trick_points_icon.webp";
import Demolish from "../assets/stat-icons/Demolition_points_icon.webp";
import Shot from "../assets/stat-icons/Shot_on_Goal_points_icon.webp";
import EpicSave from "../assets/stat-icons/Epic_Save_points_icon.webp";
import ClearBall from "../assets/stat-icons/Clear_Ball_points_icon.webp";
import LongGoal from "../assets/stat-icons/Long_Goal_points_icon.webp";
import PoolShot from "../assets/stat-icons/Pool_Shot_points_icon.webp";
import TurtleGoal from "../assets/stat-icons/Turtle_Goal_points_icon.webp";
import LowFive from "../assets/stat-icons/Low_Five_points_icon.webp";
import MVP from "../assets/stat-icons/MVP_points_icon.webp";

export const statIconFromEvent = (event) => {
  console.log(event);
  switch (event) {
    case "Save":
      return Save;
    case "Savior":
      return Savior;
    case "Goal":
      return Goal;
    case "Assist":
      return Assist;
    case "Playmaker":
      return Playmaker;
    case "HatTrick":
      return HatTrick;
    case "Demolish":
      return Demolish;
    case "Shot":
      return Shot;
    case "EpicSave":
      return EpicSave;
    case "ClearBall":
      return ClearBall;
    case "LongGoal":
      return LongGoal;
    case "PoolShot":
      return PoolShot;
    case "TurtleGoal":
      return TurtleGoal;
    case "LowFive":
      return LowFive;
    case "MVP":
      return MVP;
    default:
      return "";
  }
};
