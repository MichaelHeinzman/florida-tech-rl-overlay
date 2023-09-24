<script>
    import { getColorsFromTeam, statIconFromEvent } from "../helpers";
    import {statFeedEvent, colors} from "../processor";
    export let player = null;
    import Boost from "./Boost.svelte";

    // Use a store to keep track of statFeed events
    import { writable } from 'svelte/store';
    const statFeedEvents = writable([]);

    // Function to add a statFeed event to the store
    const addStatFeedEvent = (event) => {
      statFeedEvents.update((events) => [...events, event]);
    };
    // Function to remove the oldest statFeed event from the store
    const removeOldestStatFeedEvent = () => {
      statFeedEvents.update((events) => {
        const [, ...rest] = events; // Remove the oldest event
        return rest;
      });
    };

    // Function to handle displaying and removing statFeed events
    const handleStatFeedEvents = () => {
      console.log($statFeedEvents)

      const event = $statFeedEvent; // Get the current list of events
        if (isMainTarget(event, player) || isSecondaryTarget(event, player))
          addStatFeedEvent(event); // Add it again to keep displaying it
        setTimeout(() => {
          removeOldestStatFeedEvent(); // Remove the oldest event after 2 seconds
        }, 2000);
      }
    // Watch for changes in the statFeedEvents store
    $: handleStatFeedEvents();

    const isMainTarget = (statFeedEvent, player) => {
      return statFeedEvent?.main_target?.id === player?.id;
    }
    const isSecondaryTarget = (statFeedEvent, player) => {
      return statFeedEvent?.secondary_target?.id === player?.id;
    }

    const statBoxLogic = (statFeedEvent, player) => {
      if (isMainTarget(statFeedEvent, player))
        return statFeedEvent?.main_target?.team_num === 0 ? "left_stat_box" : "right_stat_box";
      if (isSecondaryTarget(statFeedEvent, player))
        return statFeedEvent?.secondary_target?.team_num === 0 ? "left_stat_box" : "right_stat_box";
    }

    const backgroundWhenStatAchieved = (statFeedEvent, player) => {
      if ((isMainTarget(statFeedEvent, player) || isSecondaryTarget(statFeedEvent, player)) &&  $statFeedEvents?.length > 0)
        return `background: linear-gradient(270deg, ${getColorsFromTeam(player?.team, $colors)?.primary} 0%, #1D1D21 100%);`
    }
</script>
  
  <div class="player_boost_box" style="{backgroundWhenStatAchieved($statFeedEvent, player)}">
    {#if $statFeedEvents?.length > 0}
      <div class="stat_box {statBoxLogic($statFeedEvent, player)}" >
        {#each $statFeedEvents as statEvent, index}
          <img src={statIconFromEvent(statEvent.event_name)} alt={statEvent.event_name} class="stat_icon"/>
        {/each}
      </div>
    {/if}
    <div class="player_boost_box_container">
      <div class="player_boost_text">
        <div class={`name ${player?.team === 0 ? "left_name" : "right_name"}`}>
          {player?.name}
        </div>
        <span class="boost_bar_amount name">{player?.boost}</span>
      </div>
  
      <Boost percent="{player?.boost}" team={player?.team}/>
    </div>
  </div>

  <style>
    .player_boost_box {
      position: relative;
      display: flex;
      justify-content: start;
      align-items: center;
      min-width: 347px;
      height: 46px;
      border-radius: 5px;
      background: #1D1D21;
      padding-left: 27.8px;
      padding-right: 13.2px;
      padding-bottom: 8px;
      transition: width 1s ease-in-out;
    }
    .player_boost_box_container {
      min-width: 347px;
      height: 100%;
      order: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: start;
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

    .stat_box {
      width: 100px;
      display: flex;
      align-items: center;
      z-index: 500;
    }
    .left_stat_box {
      order: 3;
      justify-content: end;
    }
    .right_stat_box {
      order: 0;
      justify-content: start;
    }
    .stat_icon {
      width: 80px;
      height: 80px;
      object-fit: contain;
      position: absolute;
    }
    .left_stat_icon {
      right: 0px;
    }
    .right_stat_icon {
      left: 0px;
    }
  </style>