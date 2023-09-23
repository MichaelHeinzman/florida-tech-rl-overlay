<script>
  import { getColorsFromTeam } from "../helpers";
  import {logos, colors, team_info, scores} from "../processor";
  import ScoreboardSeriesBox from "./ScoreboardSeriesBox.svelte";

  export let team = 0;
  let left = team === 0;
</script>

<div class="team_box {left ? "left_team_box" : "right_team_box"}" style="background: {getColorsFromTeam(team, $colors)?.primary}">
    <ScoreboardSeriesBox team={team}/>
    <div class="team_box_container {left ? "left_team_box_container" : "right_team_box_container"}" style="background: linear-gradient(180deg, {getColorsFromTeam(team, $colors)?.primary} 0%, rgba(5, 0, 0, 0.53) 100%);">
        <img class="team_box_logo {left ? "left_team_box_logo" : "right_team_box_logo"}" src={$logos?.[team]?.primary}  alt={$team_info[team]?.name}/>
        <span class="team_box_score">{$scores?.[team]}</span>
    </div>
</div>

<style>
    .team_box {
        position: absolute;
        width: fit-content;
        height: 100px;
        flex-shrink: 0;
        padding-left: 10px;
        padding-right: 10px;;
        border-radius: 5px;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
        z-index: 0;
        display: flex;
        align-items: center;
        gap: 10px;
        z-index: 30;
    }

    .left_team_box {
        left: 0;
        justify-content: end;

    }
    .right_team_box {
        right: 0;
        justify-content: start;
    }

    .team_box_container {
        width: 336px;
        height: 79px;
        flex-shrink: 0;
        border-radius: 5px;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
        display: flex;
        align-items: center;
        gap: 35px;
        overflow: hidden;
    }

    .left_team_box_container {
        justify-content: start;
    }

    .right_team_box_container {
        justify-content: end;
    }

    .team_box_score {
        display: flex;
        width: 95px;
        height: 76px;
        flex-direction: column;
        justify-content: center;
        flex-shrink: 0;

        color: #FFF;
        text-align: center;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        font-family: Lato;
        font-size: 80px;
        font-style: normal;
        font-weight: 800;
        line-height: normal;
    }
    .team_box_logo {
        width: 98px;
        height: 95%;
        flex-shrink: 0;
        border-radius: 5px;
    }

    .right_team_box_logo {
        order: 1;
    }
</style>