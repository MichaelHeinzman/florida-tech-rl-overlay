<script>
  import { onDestroy } from "svelte";
    import { get_player_photo } from "../helpers";
    import { players } from "../processor";
    import BetweenGamePlayer from "./BetweenGamePlayer.svelte";

    export let team = 0;
    let storePlayersArray = [];
    
    // Subscribe to changes in the players store
    const unsubscribe = players.subscribe($players => {
        storePlayersArray = $players ? Object.values($players) : [];
    });

    // Remember to unsubscribe wshen the component is destroyed
    onDestroy(unsubscribe);
</script>

<div class="between_game_team_stats {team === 0 ? "left_between_game_team_stats" : "right_between_game_team_stats"}">
    <div class="labels {team === 0 ? "left_labels" : "right_labels"}">
        <span>Score</span>
        <span>Goals</span>
        <span>Assists</span>
        <span>Saves</span>
        <span>Shots</span>
    </div>
    {#if storePlayersArray}
        {#each storePlayersArray as player}
            {#if player?.team === team}
                <BetweenGamePlayer player={player}/>
            {/if}
        {/each}
    {/if}
</div>

<style>
    .between_game_team_stats {
        flex: 1;
        display: flex;
        flex-direction: column;
        height: 100%;
        padding-top: 20px;
    }
    .labels {
        color: #FFF;
        text-align: right;
        font-family: Lato;
        font-size: 20px;
        font-style: normal;
        font-weight: 800;
        line-height: normal;
        text-transform: uppercase;
        flex-direction: row-reverse;
        display: flex;
        align-items: center;
        gap: 33px;
        border-bottom: 1px solid white;
        padding-bottom: 16px;
    }
    .right_labels {
        flex-direction: row;
    }
</style>