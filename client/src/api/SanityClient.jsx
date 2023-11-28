import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: import.meta.env.VITE_REACT_APP_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2023-11-28",
  useCdn: true,
  ignoreBrowserTokenWarning: true,
  token: import.meta.env.VITE_REACT_APP_SANITY_TOKEN
});