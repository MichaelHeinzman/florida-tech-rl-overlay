import { derived } from "svelte/store";
import { socketMessageStore } from "./socket";

export const updateState = derived(socketMessageStore, ($msg, set) => {
  if (!$msg) return;

  if ($msg.event === "game:update_state") {
    set($msg.data);
  }
});

export const targetPlayer = derived(updateState, ($update, set) => {
  if (!$update) return;

  if ($update.game.hasTarget) {
    const player = $update.players[$update.game.target];
    set(player);
  } else {
    set({});
  }
});

export const players = derived(updateState, ($update, set) => {
  if (!$update) return;

  if ($update.players) {
    const players = $update.players;
    set(players);
  } else {
    set({});
  }
});

export const config = derived(socketMessageStore, ($msg, set) => {
  if (!$msg) return;

  if ($msg.event === "config:update_config") {
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
      [1]: { primary: "#005623", secondary: "#FFF", mutual: "#121013" },
    });
  }
});
