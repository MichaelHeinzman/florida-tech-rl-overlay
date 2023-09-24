import { derived } from "svelte/store";
import { socketMessageStore } from "./socket";
import { convertSecondsToMinutesAndSeconds } from "./helpers";

// MATCH CREATED EVENT
export const matchCreated = derived(socketMessageStore, ($msg, set) => {
  if (!$msg) return false;
  if ($msg?.event === "game:match_created") {
    set($msg.data);
    console.log($msg);
  }
});

// GAME INITIALIZED
export const gameInitialized = derived(socketMessageStore, ($msg, set) => {
  if (!$msg) return false;
  if ($msg?.event === "game:initialized") {
    set($msg.data);
  }
});

// GAME PRE COUNTDOWN BEGIN
export const gamePrecountdownBegin = derived(
  socketMessageStore,
  ($msg, set) => {
    if (!$msg) return false;
    if ($msg?.event === "game:pre_countdown_begin") {
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
    if ($msg?.event === "game:replay_end") set(false);
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
  } else set(false);
});

// GAME PODIUM START
export const podiumStart = derived(socketMessageStore, ($msg, set) => {
  if (!$msg) return false;
  if ($msg?.event === "game:podium_start") {
    set($msg.data);
  }
});

// MATCH DESTROYED
export const matchDestroyed = derived(socketMessageStore, ($msg, set) => {
  if (!$msg) return false;
  if ($msg?.event === "game:match_destroyed") {
    set($msg.data);
  } else set(false);
});

const configTemplate = {
  colors: {
    [0]: { primary: "#700", secondary: "#FFF", mutual: "#121013" },
    [1]: { primary: "#00549A", secondary: "#FFF", mutual: "#121013" },
  },
  logos: {
    [0]: {
      primary:
        "https://floridatechsports.com/images/responsive_2021/AT-Panther_head-only.png",
    },
    [1]: {
      primary:
        "https://cdn.discordapp.com/attachments/822578384479322160/1092609383868923954/eSports.png",
    },
  },
  team_info: {
    [0]: {
      name: "Florida Tech",
      players: {
        DASC: {
          photo: "",
        },
        BEASTINNFEASTIN: {
          photo: "",
        },
        AYYLO: {
          photo: "",
        },
      },
    },
  },
  series: {
    best_of: 3,
    [0]: {
      score: 1,
    },
    [1]: {
      score: 1,
    },
  },
};
// CONFIG FROM SOFTWARE EVENT
export const config = derived(socketMessageStore, ($msg, set) => {
  // if (!$msg) return;
  if ($msg?.event === "config:update_config") {
    set($msg.data);
  }
});

export const colors = derived(config, ($update, set) => {
  // if (!$update) return;
  if ($update?.colors) {
    const colors = $update.colors;
    set(colors);
  } else {
    set({
      [0]: { primary: "#700", secondary: "#FFF", mutual: "#121013" },
      [1]: { primary: "#00549A", secondary: "#FFF", mutual: "#121013" },
    });
  }
});

export const logos = derived(config, ($update, set) => {
  // if (!$update) return;
  if ($update?.logos) {
    const logos = $update.logos;
    set(logos);
  } else {
    set({
      [0]: {
        primary:
          "https://floridatechsports.com/images/responsive_2021/AT-Panther_head-only.png",
      },
      [1]: {
        primary:
          "https://cdn.discordapp.com/attachments/822578384479322160/1092609383868923954/eSports.png",
      },
    });
  }
});

export const team_info = derived(config, ($update, set) => {
  // if (!$update) return;

  if ($update?.team_info) {
    const team_info = $update.team_info;
    set(team_info);
  } else {
    set({
      [0]: {
        name: "Florida Tech",
        players: {},
      },
      [1]: {
        name: "EARU Varsity",
        players: {},
      },
    });
  }
});

export const series = derived(config, ($update, set) => {
  // if (!$update) return;
  if ($update?.series) {
    const series = $update.series;
    set(series);
  } else {
    set({
      best_of: 3,
      [0]: {
        score: 1,
      },
      [1]: {
        score: 1,
      },
    });
  }
});
