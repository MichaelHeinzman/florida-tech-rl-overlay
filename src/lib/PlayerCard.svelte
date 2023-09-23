<script>
    import { getColorsFromTeam } from "./helpers";
    import {targetPlayer, goal_scored} from "./processor";
    import {colors, team_info} from "./processor";
    import Boost from "./team-boost/Boost.svelte";
</script>
  
<div class="player_card_box" style="background: {getColorsFromTeam($targetPlayer?.team_num, $colors)?.primary}">
    <div class="player_card_boost_box">
        <span>{$targetPlayer?.name}</span>
        <Boost percent={80} target={true} />
    </div>
    <div class="player_card_stat_box">
        <div class="player_card_stat_box_stat">
            <span>GOALS</span>
            <span>{$targetPlayer?.goals || 0}</span>
        </div>
        <div class="player_card_stat_box_stat">
            <span>SHOTS</span>
            <span>{$targetPlayer?.shots || 0}</span>
        </div>
        <div class="player_card_stat_box_stat">
            <span>ASST</span>
            <span>{$targetPlayer?.assists || 0}</span>
        </div>
        <div class="player_card_stat_box_stat">
            <span>SAVES</span>
            <span>{$targetPlayer?.saves || 0 }</span>
        </div>
    </div>

    <div class="player_card_photo_box" style="box-shadow: 0px 4px 24px 15px {getColorsFromTeam($targetPlayer?.team, $colors)?.primary}; display: {$goal_scored?.scorer?.id === $targetPlayer?.id && $team_info?.[$targetPlayer?.team_num]?.players ? "flex" : "none"}">
        <img src={$team_info?.[$targetPlayer?.team_num]?.players?.[$targetPlayer?.name]?.photo} alt={$targetPlayer?.name} class="player_photo"/>
    </div>
</div>

<style>
    .player_card_box {
        position: absolute;
        bottom: 0px;
        width: 672px;
        height: 54.217px;
        flex-shrink: 0;
        margin-left: 52px;
        margin-bottom: 34px;
    }
    .player_card_stat_box {
        position: absolute;
        right: 0px;
        bottom: 0px;
        width: 363.893px;
        height: 78.522px;
        flex-shrink: 0;
        margin-bottom: 7.48px;
        background: #1D1D21;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 6.4px;
    }
    .player_card_stat_box_stat{
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: #FFF;
        text-align: center;
        font-family: Lato;
        font-size: 24px;
        font-style: normal;
        font-weight: 800;
        line-height: normal;
    }
    .player_card_boost_box{
        width: 258.329px;
        height: 100%;
        flex-shrink: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: end;
        margin-left: 29.18px;
        margin-right: 20.6px;

        color: #FFF;
        font-family: Lato;
        font-size: 20px;
        font-style: normal;
        font-weight: 800;
        line-height: normal;
        text-transform: uppercase;
        gap: 2px;
    }
    .player_card_photo_box {
        position: absolute;
        bottom: 30px;
        left: 25px;
        margin-bottom: 54px;
        width: 194px;
        height: 304px;
        flex-shrink: 0;
        border-radius: 5px;
        opacity: .5;
        background: rgba(217, 217, 217, 0.14);
        overflow: hidden;
    }
    .player_photo {
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
</style>