import { Inngest } from "inngest";

// Initialize the Inngest client
export const inngest = new Inngest({
  id: "Equinex",
  name: "Equinex",
  eventKey: process.env.INNGEST_EVENT_KEY,
});