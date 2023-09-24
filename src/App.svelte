<script>
  import PlayerCard from "./lib/PlayerCard.svelte";
  import TargetBoost from "./lib/TargetBoost.svelte";
  import { statIconFromEvent } from "./lib/helpers";
  import { statFeedEvent, updateState, } from "./lib/processor";
  import ReplayScene from "./lib/replay-scene/ReplayScene.svelte";
  import Scoreboard from "./lib/scoreboard/Scoreboard.svelte";
  import TeamPlayerBoost from "./lib/team-boost/TeamPlayerBoost.svelte";

</script>

<main class="app">
    {#if ((!$updateState?.game?.isReplay && $updateState?.hasGame))}
        <Scoreboard/>
        <TeamPlayerBoost team={0}/>
        <TeamPlayerBoost team={1}/>
    {/if}
    <span style="position: absolute; bottom: 0px;">{JSON.stringify($statFeedEvent)}</span>
    {#if $updateState?.game?.isReplay}
      <ReplayScene />
    {/if}

    {#if ($updateState?.game?.isReplay || $updateState?.hasGame)}
      <TargetBoost />
      <PlayerCard />
    {/if}
</main>

<style>
  .app {
    position: relative;
    width: 1920px;
    height: 1080px;
  }
</style>