<script>
  import PlayerCard from "./lib/PlayerCard.svelte";
  import { socketMessageStore } from "./lib/socket";
  import TeamPlayerBoost from "./lib/team-boost/TeamPlayerBoost.svelte";
  $: console.log($socketMessageStore);
</script>

<main class="app">
      <PlayerCard />
      <TeamPlayerBoost team={0}/>
      <TeamPlayerBoost team={1}/>
</main>

<style>
  .app {
    position: relative;
    width: 1920px;
    height: 1080px;
  }
</style>