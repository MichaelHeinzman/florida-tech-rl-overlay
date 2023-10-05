<script>
  import { get_player_photo } from "../helpers";

    export let player = {};
    let left_team = player?.team === 0
</script>

<div class="between_game_player_box {left_team ? "left_between_game_player_box": "right_between_game_player_box"}">
    <img class="between_game_player_photo" src={get_player_photo(player?.name, null)} alt={"player"}/>
    <span class="between_game_team_stats_player_name">{player?.name}</span>
    <div class="labels {left_team ? "left_labels" : "right_labels"} between_game_team_player_stats">
        <span class="label">{player?.score || 0}</span>
        <span class="label">{player?.goals || 0}</span>
        <span class="label">{player?.assists || 0}</span>
        <span class="label">{player?.saves || 0}</span>
        <span class="label">{player?.shots || 0}</span>
    </div>
</div>


<style>
    .between_game_player_box {
        width: 100%;
        display: flex;
        align-items: center;
        flex-direction: row-reverse;
        justify-content: space-between;

        color: #FFF;
        text-align: right;
        font-family: Lato;
        font-size: 25px;
        font-style: normal;
        font-weight: 800;
        line-height: normal;
        text-transform: uppercase;
        padding-left: 5px;
    }

    .right_between_game_player_box {
        flex-direction: row;
        padding-left: 0px;
        padding-right: 5px;
    }
    .labels {
        display: flex;
        align-items: center;
        flex-direction: row-reverse;
        border-bottom: 1px solid white;
        padding-bottom: 16px;
        gap: 35px;
    }

    .right_labels {
        flex-direction: row;
    }
    .label {
        width: 65px;
        text-align: center;
    }
    .between_game_team_player_stats {
        border-bottom: 0px;
    }

    .between_game_team_stats_player_name {
        order: 1;
    }

    .between_game_player_photo {
        order: 2;
        height: 110px;
        object-fit: cover;
        padding: 10px;
    }
</style>