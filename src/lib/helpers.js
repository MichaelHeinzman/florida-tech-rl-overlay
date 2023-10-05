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
import BicycleHit from "../assets/stat-icons/Bicycle_Goal_points_icon.webp";
import OvertimeGoal from "../assets/stat-icons/Overtime_Goal_points_icon.webp";

export const statIconFromEvent = (event) => {
  console.log(event);
  switch (event) {
    case "Save":
      return Save;
    case "Savior":
      return Savior;
    case "BicycleHit":
      return BicycleHit;
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
    case "OvertimeGoal":
      return OvertimeGoal;
    default:
      return "";
  }
};

const default_picture =
  "https://cdn.discordapp.com/attachments/865315347732758558/1158821196683563180/Group_66.png?ex=651da3d7&is=651c5257&hm=e1be6020a0050f177d5440db73215ab141f68e064ac372dc63007627e6346286&";

const player_pictures = {
  dasc: "https://cdn.discordapp.com/attachments/865315347732758558/1158827149390786590/dasc-removebg-preview.png?ex=651da962&is=651c57e2&hm=128d68c32cd9aabc1755cd1a5a6d93a1f82972076db21403f9e9b62f04a5f7a6&",
  beastinnfeastinn:
    "https://cdn.discordapp.com/attachments/865315347732758558/1158827312905728120/beastin-removebg-preview.png?ex=651da989&is=651c5809&hm=66faf35434994d3814dbcfa9c562a5d8165494bd4a7bc34fb73d1bcea8145ab6&",
  ayylo: default_picture,
  sloth: default_picture,
  dimez:
    "https://cdn.discordapp.com/attachments/865315347732758558/1158826571348574308/dimez-removebg-preview.png?ex=651da8d8&is=651c5758&hm=6e785657a38427cfd0eab5a5fa106a5b7fbeefb9f8a9294be4dfe662c2925268&",
  funionring:
    "https://cdn.discordapp.com/attachments/865315347732758558/1158838017193148436/resize__2_-removebg-preview.png?ex=651db381&is=651c6201&hm=88bd76df85a5c79df5a15f17f9f634bbf8acb34036679d2895c491b66b9837ce&",
  ironcitykilla22:
    "https://cdn.discordapp.com/attachments/865315347732758558/1158827081405321246/jonathon.png?ex=651da952&is=651c57d2&hm=c6c6d9e5eb191ea1056da751c46359a098c5178397e323e4c952aba5b9e7cdd4&",
  speedyspaceboy:
    "https://cdn.discordapp.com/attachments/865315347732758558/1158826110860144750/speedy-removebg-preview.png?ex=651da86a&is=651c56ea&hm=ecc96b62e8083342f917bdf44f51b2ea2cb658fc3d6caa3e30ee02ec4007f38b&",
  "four leaf grover":
    "https://cdn.discordapp.com/attachments/865315347732758558/1158820897856180246/resize-removebg-preview.png?ex=651da38f&is=651c520f&hm=b077858ff4cfba9b199e6d44d845d154bd4e09404f1e24e16fc9adaaaa3db120&",
};

export const get_player_photo = (name, logo) => {
  if (player_pictures?.[name?.toLowerCase()])
    return player_pictures?.[name?.toLowerCase()];
  else return logo ? logo : default_picture;
};

export const get_team_logo_from_player = (player, logos) => {
  return logos?.[player?.team]?.primary;
};
