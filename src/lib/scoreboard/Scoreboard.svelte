<script>
    import { getColorsFromTeam } from "../helpers";
import {logos, colors} from "../processor";
</script>

<div class="scoreboard">
    <div class="team_box left_team_box" style="background: {getColorsFromTeam(0, $colors)?.primary}">
        <div class="team_series_box left_team_series_box">
            <div class="team_series_point team_series_point_empty"/>
            <div class="team_series_point team_series_point_empty"/>
            <div class="team_series_point team_series_point_empty"/>
            <div class="team_series_point"/>
        </div>
        <div class="team_box_container left_team_box_container" style="background: linear-gradient(180deg, {getColorsFromTeam(0, $colors)?.primary} 0%, rgba(5, 0, 0, 0.53) 100%);">
            <img class="team_box_logo" src={$logos?.[0]?.primary} />
            <span class="team_box_score">5</span>
        </div>
    </div>
    <span class="team_box_name left_team_box_name">Florida Tech</span>
    <span class="team_box_name right_team_box_name">EARU Varsity</span>

    <div class="team_box right_team_box" style="background: {getColorsFromTeam(1, $colors)?.primary}">
        <div class="team_series_box right_team_series_box">
            <div class="team_series_point team_series_point_empty"/>
            <div class="team_series_point team_series_point_empty"/>
            <div class="team_series_point team_series_point_empty"/>
            <div class="team_series_point"/>
        </div>
        <div class="team_box_container right_team_box_container" style="background: linear-gradient(180deg, {getColorsFromTeam(1, $colors)?.primary} 0%, rgba(5, 0, 0, 0.53) 100%);">
            <span class="team_box_score">5</span>
            <img class="team_box_logo" src={$logos?.[1]?.primary} />
        </div>
    </div>
    <div class="time_box"><span class="time">5:00</span></div>

</div>

<style>
    .scoreboard {
        position: absolute;
        width: 785px;
        height: 100px;
        margin: auto;
        left: 0px;
        right: 0px;
        top: 0px;
        margin: auto;
    }
    .time_box {
        position: absolute;
        margin: auto;
        left: 0px;
        right: 0px;
        width: 225px;
        height: 100px;
        background-color: #1D1D21;
        clip-path: polygon(0 0, 100% 0, 85% 100%, 15% 100%);
        z-index: 50;
    }
    .time {
        display: flex;
        width: 225px;
        height: 100px;
        flex-direction: column;
        justify-content: center;
        flex-shrink: 0;

        color: #F9F9F9;
        text-align: center;
        font-family: Lato;
        font-size: 48px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }


    .team_box {
        position: absolute;
        width: fit-content;
        height: 100px;
        flex-shrink: 0;
        padding-left: 10px;
        padding-right: 10px;;
        border-radius: 5px;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
        z-index: 0;
        display: flex;
        align-items: center;
        gap: 10px;
        z-index: 30;
    }

    .left_team_box {
        left: 0;
        justify-content: end;

    }
    .right_team_box {
        right: 0;
        justify-content: start;
    }

    .team_box_container {
        width: 336px;
        height: 79px;
        flex-shrink: 0;
        border-radius: 5px;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
        display: flex;
        align-items: center;
        gap: 35px;
        overflow: hidden;
    }

    .left_team_box_container {
        justify-content: start;
    }

    .right_team_box_container {
        justify-content: end;
    }

    .team_box_score {
        display: flex;
        width: 95px;
        height: 76px;
        flex-direction: column;
        justify-content: center;
        flex-shrink: 0;

        color: #FFF;
        text-align: center;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        font-family: Lato;
        font-size: 80px;
        font-style: normal;
        font-weight: 800;
        line-height: normal;
    }
    .team_box_logo {
        width: 98px;
        height: 79px;
        flex-shrink: 0;
        border-radius: 5px;
        background-image: url(https://floridatechsports.com/images/responsive_2021/AT-Panther_head-only.png);
    }

    .team_box_name {
        position: absolute;
        bottom: -29px;
        z-index: 0;

        padding-left: 10px;
        padding-right: 10px;
        padding-bottom: 2px;
        padding-top: 2px;

        color: #FFF;
        text-align: center;
        font-family: Lato;
        font-size: 24px;
        font-style: normal;
        font-weight: 800;
        line-height: normal;
        border-radius: 0px 0px 5px 5px;
        background: #1D1D21;
    }
    .left_team_box_name {
        left: 66px;
    }
    .right_team_box_name {
        right: 66px;
    }
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
    }

    .team_series_point_empty {
        border-radius: 5px;
        background: rgba(217, 217, 217, 0.32);
    }
</style>