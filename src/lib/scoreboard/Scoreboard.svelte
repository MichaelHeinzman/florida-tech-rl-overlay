<script>
    import { getColorsFromTeam } from "../helpers";
import {logos, colors, team_info} from "../processor";
  import ScoreboardTeamBox from "./ScoreboardTeamBox.svelte";
</script>

<div class="scoreboard">

    <span class="team_box_name left_team_box_name">{$team_info[0]?.name}</span>
    <span class="team_box_name right_team_box_name">{$team_info[1]?.name}</span>

    <ScoreboardTeamBox team={0}/>
    <ScoreboardTeamBox team={1}/>
    <div class="time_box"><span class="time">5:00</span></div>

</div>

<style>
    .scoreboard {
        position: absolute;
        width: 785px;
        height: 100px;
        margin: auto;
        left: 0px;
        right: 0px;
        top: 0px;
        margin: auto;
    }
    .time_box {
        position: absolute;
        margin: auto;
        left: 0px;
        right: 0px;
        width: 225px;
        height: 100px;
        background-color: #1D1D21;
        clip-path: polygon(0 0, 100% 0, 85% 100%, 15% 100%);
        z-index: 50;
    }
    .time {
        display: flex;
        width: 225px;
        height: 100px;
        flex-direction: column;
        justify-content: center;
        flex-shrink: 0;

        color: #F9F9F9;
        text-align: center;
        font-family: Lato;
        font-size: 48px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }

    .team_box_name {
        position: absolute;
        bottom: -29px;
        z-index: 0;

        padding-left: 10px;
        padding-right: 10px;
        padding-bottom: 2px;
        padding-top: 2px;

        color: #FFF;
        text-align: center;
        font-family: Lato;
        font-size: 24px;
        font-style: normal;
        font-weight: 800;
        line-height: normal;
        border-radius: 0px 0px 5px 5px;
        background: #1D1D21;
    }
    .left_team_box_name {
        left: 66px;
    }
    .right_team_box_name {
        right: 66px;
    }
</style>