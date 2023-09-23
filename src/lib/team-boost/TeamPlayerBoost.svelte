<script>
  import { updateState } from "../processor";
    import PlayerBoost from "./PlayerBoost.svelte"
    export let team = 0;
    export let players = $updateState?.players || [{
        boost: 70,
        name: "Monkey Moon",
        team: team,
    },{
        boost: 70,
        name: "Monkey Moon",
        team: team,
    },{
        boost: 70,
        name: "Monkey Moon",
        team: team,
    },];

    let filteredPlayers = [undefined, undefined, undefined];
    // Create a derived store that filters players by teamNumber
    if (players)
      filteredPlayers = Object.values(players)?.filter((player) => player.team === team);
</script>

<div class={`team_boost_box ${team === 0 ? "left_team_boost_box" : "right_team_boost_box"}`}>
    {#each players as player}
        <PlayerBoost player={player}/>
    {/each}
</div>

<style>
    .team_boost_box {
        position: absolute;
        top: 49px;
        flex-shrink: 0;
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: start;
        gap: 5px;
    }
    .left_team_boost_box {
        left: -10px;
    }
    .right_team_boost_box {
        right: 0px;
    }
</style>