<script>
  import { onDestroy } from "svelte";
    import { players } from "../processor";
    import PlayerBoost from "./PlayerBoost.svelte"
  import { fly } from "svelte/transition";
  import { quartInOut } from "svelte/easing";
    export let team = 0;
    let storePlayersArray = [];
    
    // Subscribe to changes in the players store
    const unsubscribe = players.subscribe($players => {
        storePlayersArray = $players ? Object.values($players) : [];
    });

    // Remember to unsubscribe when the component is destroyed
    onDestroy(unsubscribe);
</script>

<div class={`team_boost_box ${team === 0 ? "left_team_boost_box" : "right_team_boost_box"}`}  transition:fly={{x: team === 0 ? -300 : 300, easing: quartInOut}}>
    {#if storePlayersArray}
        {#each storePlayersArray as player}
            {#if player?.team === team}
                <PlayerBoost player={player}/>
            {/if}
        {/each}
    {/if}
</div>

<style>
    .team_boost_box {
        position: absolute;
        top: 49px;
        display: flex;
        width: fit-content;
        flex-direction: column;
        justify-content: start;
        gap: 5px;
    }
    .left_team_boost_box {
        align-items: start;
        left: -10px;
    }
    .right_team_boost_box {
        right: 0px;
        align-items: end;
    }
</style>