<script>
  import { fade } from "svelte/transition";
  import {colors} from "../processor";
  import { quadInOut } from "svelte/easing";
  import BetweenGameScoreboard from "./Between-Game-Scoreboard.svelte";
  import BetweenGamesStats from "./BetweenGamesStats.svelte";
</script>


<div transition:fade={{delay: 250, duration: 300, easing: quadInOut}} class="between_game_box" style="background: linear-gradient(90deg, {$colors?.[0]?.primary} 0%, #000 49.54%, {$colors?.[1]?.primary} 100%);">
    <div class="between_game_box_background" />
    <BetweenGameScoreboard />
    <BetweenGamesStats />
</div>

<style>
    .between_game_box_background {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0px;
        left: 0px;
        z-index: -5;
        background-image: url("https://cdn.discordapp.com/attachments/865315347732758558/1158842710904549416/Hexagons_1.png?ex=651db7e0&is=651c6660&hm=1795958414e197a6f732791d221558757ca83a63e83ced007c6441d04c4630fe&");
    }
    .between_game_box {
        position: relative;
        width: 100%;
        height: 100%;
        display: flex;
        z-index: -10;
    }
</style>