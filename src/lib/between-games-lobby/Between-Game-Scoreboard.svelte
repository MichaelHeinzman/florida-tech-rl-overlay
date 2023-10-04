<script>
   import {logos, team_info, series, updateState} from "../processor";
</script>

<div class="between_game_scoreboard">
    <div class="between_game_team_box">
        <div class="between_game_team_name">{$team_info?.[0]?.name}</div>
        <img src={$logos?.[0]?.primary} alt={$team_info?.[0]?.name} class="team_logo"/>
    </div>

    <div class="between_game_series_box">
        <div class="between_game_series_score">{$updateState?.game?.teams?.[0]?.score || 0} : {$updateState?.game?.teams?.[1]?.score || 0}</div>
        <div class="">Game {Number($series?.[0]?.score) + Number($series?.[1]?.score) || "0:0"}</div>
    </div>
    <div class="between_game_team_box">
        <img src={$logos?.[1]?.primary} alt={$team_info?.[1]?.name} class="team_logo"/>
        <div class="between_game_team_name">{$team_info?.[1]?.name}</div>
    </div>
</div>


<style>
    .between_game_scoreboard {
        padding-top: 25px;
        position: absolute;
        width: 100%;
        height: fit-content;
        top: 0px;
        margin: auto;

        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        font-size: xx-large;
        font-size: xx-large;
        gap: 5%
    }
    .between_game_team_box {
        flex: 3;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5%;
    }
    .between_game_series_box {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        flex: 1;
        white-space: nowrap; 
    }
    .between_game_series_score {
        color: #FFF;
        text-align: center;
        font-family: Lato;
        font-size: 120px;
        font-style: normal;
        font-weight: 800;
        line-height: normal;
        flex: 1;
    }

    .between_game_team_name {
        color: #FFF;
        text-align: center;
        font-family: Lato;
        font-size: 80px;
        font-style: normal;
        font-weight: 800;
        line-height: normal;
        flex: 1;
    }

    .team_logo {
        width: 150px;
        height: 150px;
        flex-shrink: 0;
    }
</style>