<script>
  import PlayerCard from "./lib/PlayerCard.svelte";
  import Scoreboard from "./lib/scoreboard/Scoreboard.svelte";
  import { socketMessageStore } from "./lib/socket";
  import TeamPlayerBoost from "./lib/team-boost/TeamPlayerBoost.svelte";
  $: console.log($socketMessageStore);
</script>

<main class="app">
    <Scoreboard/>
    <PlayerCard />
    <TeamPlayerBoost team_num={0}/>
    <TeamPlayerBoost team_num={1}/>
</main>

<style>
  .app {
    position: relative;
    width: 1920px;
    height: 1080px;
  }
</style>