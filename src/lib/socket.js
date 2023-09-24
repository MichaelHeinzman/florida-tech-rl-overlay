import { writable } from "svelte/store";

//Connect to SOS server on port 49122
const socket = new WebSocket("ws://localhost:49122");

socket.onopen = () => {
  console.log("Connected to SOS.");
};

socket.onerror = (err) => {
  console.error("WebSocket error", err);
};

//Save the latest received message in a store.
export const socketMessageStore = writable({
  event: "default",
  data: {},
});

socket.onmessage = ({ data }) => {
  const parsed = JSON.parse(data);
  socketMessageStore.set(parsed);
};

// Connect to broadcaster server on port 49322
const socket_broadcaster = new WebSocket("ws://localhost:49322");

socket_broadcaster.onopen = () => {
  console.log("Connected to SOS.");
};

socket_broadcaster.onerror = (err) => {
  console.error("WebSocket error", err);
};

socket_broadcaster.onmessage = ({ data }) => {
  const parsed = JSON.parse(data);
  console.log("New msg:", parsed);

  socketMessageStore.set(parsed);
};
