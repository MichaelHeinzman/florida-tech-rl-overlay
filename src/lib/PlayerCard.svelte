<script>
    import { getColorsFromTeam } from "./helpers";
    import {targetPlayer} from "./processor";
    import {colors} from "./processor";
    import Boost from "./team-boost/Boost.svelte";
</script>
  
<div class="player_card_box" style="background: {getColorsFromTeam($targetPlayer?.team, $colors)?.primary}">
    <div class="player_card_boost_box">
        <span>{$targetPlayer?.name}</span>
        <Boost percent={80} target={true} colors={{box: "#121013", bar: "#fff"}}/>
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

    <div class="player_card_photo_box">
        <img src="" alt={$targetPlayer?.name}/>
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
        bottom: 0px;
        margin-bottom: 54px;
        width: 290px;
        height: 250px;
        flex-shrink: 0;

        border: 5px solid #1D1D21;
        background: rgba(217, 217, 217, 0.14);
        display: none;
    }
</style>