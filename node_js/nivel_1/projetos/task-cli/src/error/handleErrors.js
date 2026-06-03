import Error404 from "./Error404.js";

export default function handleErrors(error) {
  if (error.code === "ENOENT") {
    console.error("The task's file doesn't exists.");
  } else if (error instanceof Error404) {
    error.sendAnswer();
  } else {
    console.error(error);
  }
}