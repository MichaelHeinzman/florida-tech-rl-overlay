<script>
  import { fade } from "svelte/transition";
  import {colors, logos, team_info, series, updateState} from "../processor";
  import { quadInOut } from "svelte/easing";
</script>


<div transition:fade={{delay: 250, duration: 300, easing: quadInOut}} class="between_game_box" style="background: linear-gradient(90deg, {$colors?.[0]?.primary} 0%, #000 49.54%, {$colors?.[1]?.primary} 100%);">
    <div class="between_game_box_background" />
    <div class="between_game_scoreboard">
        <div class="between_game_team_box">
            <div class="between_game_team_name">{$team_info?.[0]?.name}</div>
            <img src={$logos?.[0]?.primary} alt={$team_info?.[0]?.name} class="team_logo"/>
        </div>

        <div class="between_game_series_box">
            <div class="between_game_series_score">{$updateState?.game?.teams?.[0]?.score} : {$updateState?.game?.teams?.[1]?.score}</div>
            <div class="">Game {Number($series?.[0]?.score) + Number($series?.[1]?.score) || "0:0"}</div>
        </div>
        <div class="between_game_team_box">
            <img src={$logos?.[1]?.primary} alt={$team_info?.[1]?.name} class="team_logo"/>
            <div class="between_game_team_name">{$team_info?.[1]?.name}</div>
        </div>
    </div>
</div>

<style>
    .between_game_box_background {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0px;
        left: 0px;
        background-image: url("https://cdn.discordapp.com/attachments/865315347732758558/1158842710904549416/Hexagons_1.png?ex=651db7e0&is=651c6660&hm=1795958414e197a6f732791d221558757ca83a63e83ced007c6441d04c4630fe&");
    }
    .between_game_box {
        position: relative;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: start;
    }

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
    }
    .between_game_series_score {
        color: #FFF;
        text-align: center;
        font-family: Lato;
        font-size: 120px;
        font-style: normal;
        font-weight: 800;
        line-height: normal;
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