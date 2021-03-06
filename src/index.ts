import express from "express";
import compression from "compression";

import HomePage from "./pages/home";

const app = express();
const port = process.env.PORT || 8080;

// Enable gzip compression for all HTTP responses
app.use(compression());

// Allow all of the generated files to be served up by Express
app.use("/static", express.static("dist/client"));

// Map the "/" route to the home page
app.get("/", HomePage);

// Start the server
// @ts-ignore
app.listen(port, (err) => {
  if (err) {
    throw err;
  }

  if (port !== "0") {
    console.log(`Listening on port ${port}`);
  }
});
