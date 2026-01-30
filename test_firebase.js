import { initializeApp } from "firebase/app";

try {
  initializeApp({});
  console.log("Success");
} catch (e) {
  console.error("Caught error:", e.message);
}
