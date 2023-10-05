import { derived } from "svelte/store";
import { socketMessageStore } from "./socket";
import { socketOverlayMessageStore } from "./socket_overlay";
import { convertSecondsToMinutesAndSeconds } from "./helpers";

// MATCH CREATED EVENT
export const matchCreated = derived(socketMessageStore, ($msg, set) => {
  if (!$msg) return false;
  if ($msg?.event === "game:match_created") {
    set($msg.data);
  }
});

// GAME INITIALIZED
export const gameInitialized = derived(socketMessageStore, ($msg, set) => {
  if (!$msg) return false;
  if ($msg?.event === "game:initialized") {
    console.log("GAME INTIALIZED", $msg.data);
    set($msg.data);
  }

  if ($msg?.event === "game:update_state") {
    if ($msg.data.game.hasWinner) set(false);
    else set(true);
  }

  if ($msg?.event === "game:match_ended") set(false);
});

// GAME PRE COUNTDOWN BEGIN
export const gamePrecountdownBegin = derived(
  socketMessageStore,
  ($msg, set) => {
    if (!$msg) return false;
    if ($msg?.event === "game:pre_countdown_begin") {
      console.log("PRE COUNTDOWN", $msg.data);
      set($msg.data);
    }
  }
);

// GAME POST COUNTDOWN BEGIN
export const gamePostcountdownBegin = derived(
  socketMessageStore,
  ($msg, set) => {
    if (!$msg) return false;
    if ($msg?.event === "game:post_countdown_begin") {
      console.log("PRE COUNTDOWN", $msg.data);
      set($msg.data);
    }
  }
);

// GAME UPDATE STATE EVENT
export const updateState = derived(socketMessageStore, ($msg, set) => {
  if (!$msg) return;
  if ($msg?.event === "game:update_state") {
    set($msg.data);
  }
  {
    if ($msg?.event === "game:match_destroyed") set(false);
  }
});

export const time = derived(updateState, ($update, set) => {
  if (!$update) return;
  if ($update?.game?.time_seconds) {
    const time = convertSecondsToMinutesAndSeconds($update?.game?.time_seconds);
    set(time);
  } else {
    set("5:00");
  }
});
export const scores = derived(updateState, ($update, set) => {
  if (!$update) return;
  if ($update?.game?.teams) {
    const scores = {
      [0]: $update.game.teams[0].score,
      [1]: $update.game.teams[1].score,
    };
    set(scores);
  } else {
    set({
      [0]: 5,
      [1]: 5,
    });
  }
});

export const targetPlayer = derived(updateState, ($update, set) => {
  if (!$update) return;
  if ($update?.game?.hasTarget) {
    const player = $update.players[$update.game.target];
    set(player);
  } else {
    set(null);
  }
});

export const players = derived(updateState, ($update, set) => {
  if (!$update) return;
  if ($update?.players) {
    const players = $update.players;
    set(players);
  } else {
    set({});
  }
});

// GAME STAT FEED EVENT
export const statFeedEvent = derived(socketMessageStore, ($msg, set) => {
  if (!$msg) return null;
  if ($msg?.event === "game:statfeed_event") {
    set($msg.data);
  } else {
    if ($msg?.event === "game:replay_start") set(null);
  }
});

// GAME GOAL SCORED EVENT
export const goal_scored = derived(socketMessageStore, ($msg, set) => {
  if (!$msg) return { scorer: null };
  if ($msg?.event === "game:goal_scored") {
    set($msg.data);
  } else {
    if (
      $msg?.event === "game:replay_end" ||
      $msg?.event === "game:replay_start"
    )
      set({ scorer: null });
  }
});

// GAME REPLAY START EVENT
export const replayStart = derived(socketMessageStore, ($msg, set) => {
  if (!$msg) return false;
  if ($msg?.event === "game:replay_start") {
    set($msg.data);
  } else {
    if ($msg?.event === "game:replay_will_end") set(false);
  }
});

// GAME REPLAY WILL END EVENT
export const replayWillEnd = derived(socketMessageStore, ($msg, set) => {
  if (!$msg) return false;
  if ($msg?.event === "game:replay_will_end") {
    set($msg.data);
  } else {
    if ($msg?.event === "game:replay_end") set(false);
  }
});

// GAME REPLAY END EVENT
export const replayEnd = derived(socketMessageStore, ($msg, set) => {
  if (!$msg) return false;
  if ($msg?.event === "game:replay_end") {
    set($msg.data);
  } else {
    if ($msg?.event !== "game:update_state") set(false);
  }
});

// GAME MATCH ENDED
export const matchEnded = derived(socketMessageStore, ($msg, set) => {
  if (!$msg) return false;

  if ($msg?.event === "game:match_ended") {
    set($msg.data);
  }

  if ($msg?.event === "game:podium_start") {
    set(false);
  }
});

// GAME CLOCK STOPPED
export const clockStopped = derived(socketMessageStore, ($msg, set) => {
  if (!$msg) return false;
  if ($msg?.event === "game:clock_stopped") {
    set($msg.data);
  } else set(false);
});

// GAME PODIUM START
export const podiumStart = derived(socketMessageStore, ($msg, set) => {
  if (!$msg) return false;
  if ($msg?.event === "game:podium_start") {
    set($msg.data);
  }
  if ($msg?.event === "game:match_created") set(false);
});

// MATCH DESTROYED
export const matchDestroyed = derived(socketMessageStore, ($msg, set) => {
  if (!$msg) return false;
  if ($msg?.event === "game:match_destroyed") {
    set($msg.data);
  }
  if ($msg?.event === "game:match_created") set(false);
});

// CONFIG FROM SOFTWARE EVENT
export const config = derived(socketOverlayMessageStore, ($msg, set) => {
  if (!$msg) return;
  if (
    $msg?.event === "config:update_config" ||
    $msg?.event === "config:no_config"
  ) {
    set($msg.data);
  }
});

export const colors = derived(config, ($update, set) => {
  if (!$update) return;
  if ($update?.colors) {
    const colors = $update.colors;
    set(colors);
  }
});

export const logos = derived(config, ($update, set) => {
  if (!$update) return;
  if ($update?.logos) {
    const logos = $update.logos;
    set(logos);
  }
});

export const team_info = derived(config, ($update, set) => {
  if (!$update) return;

  if ($update?.team_info) {
    const team_info = $update.team_info;
    set(team_info);
  }
});

export const series = derived(config, ($update, set) => {
  if (!$update) return;
  if ($update?.series) {
    const series = $update.series;
    set(series);
  }
});
