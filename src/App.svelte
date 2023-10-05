<script>
  import PlayerCard from "./lib/PlayerCard.svelte";
  import TargetBoost from "./lib/TargetBoost.svelte";
  import BetweenGamesLobby from "./lib/between-games-lobby/BetweenGamesLobby.svelte";
  import {updateState, matchCreated, matchEnded, podiumStart, gameInitialized, clockStopped } from "./lib/processor";
  import ReplayScene from "./lib/replay-scene/ReplayScene.svelte";
  import Scoreboard from "./lib/scoreboard/Scoreboard.svelte";
  import TeamPlayerBoost from "./lib/team-boost/TeamPlayerBoost.svelte";
  import WinningTeamAnimation from "./lib/winning-team-animation/WinningTeamAnimation.svelte";
</script>

<main class="app">
    {#if ((!$updateState?.game?.isReplay && $gameInitialized))}
        <Scoreboard/>
        <TeamPlayerBoost team={0}/>
        <TeamPlayerBoost team={1}/>
    {/if}
    
    {#if $updateState?.game?.isReplay && !$podiumStart && !$updateState?.game.hasWinner}
      <ReplayScene />
    {/if}

    {#if ($updateState?.game?.isReplay || $updateState?.hasGame )}
      <TargetBoost />
      <PlayerCard />
    {/if}
    
    {#if ($matchEnded)}
      <WinningTeamAnimation />
    {/if}

    {#if (($updateState?.game?.hasWinner && $updateState?.game?.isReplay))}
      <BetweenGamesLobby />
    {/if}
</main>

<style>
  .app {
    position: relative;
    width: 1920px;
    height: 1080px;
  }
</style>