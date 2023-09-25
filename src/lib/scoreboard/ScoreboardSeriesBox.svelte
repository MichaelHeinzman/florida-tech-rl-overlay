<script>
    import { series } from "../processor";
    export let team = 0;
    let left = team === 0;

    // Calculate the number of lines needed to win
</script>

<div class="team_series_box {left ? 'left_team_series_box' : 'right_team_series_box'}">
    {#if $series?.best_of}
        {#each Array(Math.ceil($series?.best_of / 2)) as _, index}
            {#if index < $series?.[team].score}
                <div class="team_series_point"/>
            {:else}
                <div class="team_series_point team_series_point_empty"/>
            {/if}
        {/each}
    {/if}
</div>

<style>
    .team_series_box {
        width: 45px;
        height: 79px;
        flex-shrink: 0;
        border-radius: 5px;
        left: 0px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 9px;
        background: rgba(5, 0, 0, 0.53);
    }

    .left_team_series_box {
        order: 0;
    }

    .right_team_series_box {
        order: 1;
    }

    .team_series_point {
        width: 80%;
        max-height: 11px;
        flex: 1;
        flex-shrink: 0;
        border-radius: 5px;
        background: #FFF;
        order: 2;
    }

    .team_series_point_empty {
        order: 1;
        border-radius: 5px;
        background: rgba(217, 217, 217, 0.32);
    }
</style>
