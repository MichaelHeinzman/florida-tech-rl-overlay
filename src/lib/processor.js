import { derived } from "svelte/store";
import { socketMessageStore } from "./socket";

export const goal_scored = derived(socketMessageStore, ($msg, set) => {
  if (!$msg) return;
  if ($msg?.event === "game:goal_scored") {
    set($msg.data);
  }
});

export const updateState = derived(socketMessageStore, ($msg, set) => {
  if (!$msg) return;
  if ($msg?.event === "game:update_state") {
    set($msg.data);
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
    set({});
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

export const config = derived(socketMessageStore, ($msg, set) => {
  if (!$msg) return;
  if ($msg?.event === "config:update_config") {
    set($msg.data);
  }
});

export const colors = derived(config, ($update, set) => {
  if (!$update) return;
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
  if (!$update) return;
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
  if (!$update) return;

  if ($update?.team_info) {
    const team_info = $update.team_info;
    set(team_info);
  } else {
    set({
      [0]: {
        name: "Florida Tech",
        players: {
          "Four Leaf Grover": {
            photo:
              "https://floridatechsports.com/images/2023/3/7/Seth_Heinzman_headshot_aD5b5.jpg?width=300",
          },
        },
      },
      [1]: {
        name: "EARU Varsity",
        players: {
          "Four Leaf Grover": {
            photo:
              "https://floridatechsports.com/images/2023/3/7/Seth_Heinzman_headshot_aD5b5.jpg?width=300",
          },
        },
      },
    });
  }
});

export const series = derived(config, ($update, set) => {
  if (!$update) return;
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
