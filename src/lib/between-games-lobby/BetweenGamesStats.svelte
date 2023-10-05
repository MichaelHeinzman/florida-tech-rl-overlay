<script>
  import BetweenGameTeamStats from "./BetweenGameTeamStats.svelte";

</script>

<div class="between_game_stat_box">
    <div class="between_game_stat_container">
        <BetweenGameTeamStats team={0}/>
        <div class="divider"/>
        <BetweenGameTeamStats team={1}/>
    </div>
</div>

<style>
    .between_game_stat_box {
        position: relative;
        align-self: flex-end;
        
        bottom: 0px;
        
        height: 70%;
        width: 100%;
        z-index: -5;

        display: flex;
        justify-content: center;
        align-items: start;

        color: white;
    }
    .between_game_stat_container {
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: space-between;
        gap: 33px;
    }
    .divider {
        width: 1px;
        height: 100%;
        background: white;
    }
</style>