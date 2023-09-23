<script>
    export let player = {
        boost: 70,
        name: "Name Placeholder",
        team: 0,
    }
    import Boost from "./Boost.svelte";
  </script>
  
  <div class="player_boost_box">
    <div class="player_boost_text">
      <div class={`name ${player?.team === 0 ? "left_name" : "right_name"}`}>
        {player?.name}
      </div>
      <span class="boost_bar_amount name">{player?.boost}</span>
    </div>

    <Boost percent="{player.boost}" team={player?.team}/>
  </div>
  
  <style>
    .player_boost_box {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: start;
      width: 347px;
      height: 46px;
      flex-shrink: 0;
      border-radius: 5px;
      background: #1D1D21;
      padding-left: 27.8px;
      padding-right: 13.2px;
      padding-bottom: 8px;
    }
    .player_boost_backdrop {

    }
    .left_player_boost_box {
    }
    .right_player_boost_box {
    }
    .name {
      color: #FFF;
      font-family: Lato;
      font-size: 24px;
      font-style: normal;
      font-weight: 800;
      line-height: normal;
      display: flex;
      flex-direction: column;
      justify-content: center;
      flex-shrink: 0;
      padding-top: 2px;
      text-transform: uppercase;
    }

    .player_boost_text {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: end;
    }

    .right_name {
      order: 1;
    }
    .left_name {
      order: 0;
    }

  </style>