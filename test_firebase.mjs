import { initializeApp } from "firebase/app";

console.log("Starting");
try {
  const app = initializeApp({});
  console.log("App created", app);
} catch (e) {
  console.error("Caught error:", e.message);
}
