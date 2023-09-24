import { writable } from "svelte/store";

//Save the latest received message in a store.
export const socketOverlayMessageStore = writable({
  event: "default",
  data: {},
});

// Connect to broadcaster server on port 49322
const socket_broadcaster = new WebSocket("ws://localhost:49322");

socket_broadcaster.onopen = () => {
  console.log("Connected to SOS.");
  socket_broadcaster.send(JSON.stringify({ event: "config:no_config" }));
};

socket_broadcaster.onerror = (err) => {
  console.error("WebSocket error", err);
};

socket_broadcaster.onmessage = ({ data }) => {
  const parsed = JSON.parse(data);
  console.log("New msg:", parsed);

  socketOverlayMessageStore.set(parsed);
};
