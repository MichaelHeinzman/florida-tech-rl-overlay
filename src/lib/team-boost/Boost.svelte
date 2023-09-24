<script>
  import { getColorsFromTeam } from "../helpers";
  import {colors} from "../processor";

  export let percent = 80;
  export let target = false;
  export let team = 0;
</script>

<div class="boost_box {team === 0 ? "left_boost_box" : "right_boost_box"}" style="background: {getColorsFromTeam(team, $colors)?.mutual}">
  <div class="boost_bar" style="width: {percent}%; background: {getColorsFromTeam(team, $colors)?.[target ? "secondary" : "primary"]}"/>
</div>

<style>
  .boost_box {
    width: 100%;
    height: 9px;
    flex-shrink: 0;
    border-radius: 2px;
    display: flex;
  }
  .left_boost_box {
    justify-content: start;
  }
  .right_boost_box {
    justify-content: end;
  }
  .boost_bar {
    height: 100%;
    flex-shrink: 0;
    border-radius: 2px;
    transition: width 1s ease; 
  }
</style>