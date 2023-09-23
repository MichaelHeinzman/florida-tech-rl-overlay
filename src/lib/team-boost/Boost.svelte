<script>
  import { getColorsFromTeam } from "../helpers";
  import {colors} from "../processor";

  export let percent = 80;
  export let target = false;
  export let team_num = 0;
  $: console.log(percent);
</script>

<div class="boost_box" style="background: {getColorsFromTeam(team_num, $colors)?.mutual}">
  <div class="boost_bar" style="width: {percent}%; background: {getColorsFromTeam(team_num, $colors)?.[target ? "secondary" : "primary"]}"/>
</div>

<style>
  .boost_box {
    width: 100%;
    height: 9px;
    flex-shrink: 0;
    border-radius: 2px;
  }
  .boost_bar {
    height: 100%;
    flex-shrink: 0;
    border-radius: 2px;
  }
</style>